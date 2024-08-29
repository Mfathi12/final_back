import { skillModel } from "../../../DB/models/skill.model.js";

export const createSkill = async (req, res) => {
try {
    const { title, description } = req.body;
    const image = req.file ? `assets/${req.file.filename}` : null;

    const skill = await skillModel.create({ title, description, image });
    return res.json({ success: true, results: skill });
} catch (error) {
    return res.json({ success: false, message: error.stack });
}
};

export const getAllSkills = async (req, res) => {
    try {
    const skills = await skillModel.find();
    return res.json({ success: true, results: skills });
    } catch (error) {
    return res.json({ success: false, message: error.stack });
    }
};

export const editSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        let image;

        if (req.file) {
            image = `assets/${req.file.filename}`;
        }

        const updateFields = {};
        if (title) updateFields.title = title;
        if (description) updateFields.description = description;
        if (image) updateFields.image = image;

        const skill = await skillModel.findOneAndUpdate(
            { _id: id },
            { $set: updateFields },
            { new: true }
        );
        
        if (!skill) {
            return res.status(404).json({ success: false, message: "Skill not found" });
        }

        return res.json({ success: true, results: skill });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await skillModel.findOneAndDelete({ _id: id });

        if (!skill) {
            return res.status(404).json({ success: false, message: "skill not found" });
        }

        return res.json({ success: true, results: skill });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};







