import { projectModel } from "../../../DB/models/project.model.js";

export const createProject = async (req, res) => {
    try {
      const { title, description } = req.body;
      const image = req.file ? `assets/${req.file.filename}` : null;
  
      const project = await projectModel.create({ title, description, image });
      return res.json({ success: true, results: project });
    } catch (error) {
      return res.json({ success: false, message: error.stack });
    }
  };

export const getProjects = async (req, res) => {
    try {
    const projects = await projectModel.find();
    return res.json({ success: true, results: projects });
    } catch (error) {
    return res.json({ success: false, message: error.stack });
    }
};

export const editProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const image = req.file ? `assets/${req.file.filename}` : null;

        const project = await projectModel.findOneAndUpdate(
            {_id:id},
            { title:title, description:description, image:image|| undefined},
            { new: true }
        );
        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        return res.json({ success: true, results:{project} });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await projectModel.findOneAndDelete({ _id: id });

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        return res.json({ success: true, results: project });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};






