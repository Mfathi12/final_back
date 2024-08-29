import { adminModel } from "../../../DB/models/admin.model.js";

export const signup = async (req, res) => {
    try {
        const { confirmpassword, email, password } = req.body;

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        // Check if the email already exists in the database
        const isadmin = await adminModel.findOne({ email });
        if (isadmin) {
            return res.json({ success: false, message: "Email already exists" });
        }

        // Create a new admin
        const admin = await adminModel.create({ email, password });

        return res.json({ success: true, msg: "Signup successful" });
    } catch (error) {
        return res.json({ success: false, error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the admin by email
        const isAdmin = await adminModel.findOne({ email });
        if (!isAdmin) {
            return res.json({ success: false, msg: "Invalid email or password" });
        }

        // Check if the provided password matches the stored password
        if (password !== isAdmin.password) {
            return res.json({ success: false, msg: "Invalid email or password" });
        }

        return res.json({ success: true, message: "User can log in" });
    } catch (error) {
        return res.json({ success: false, error: error.message });
    }
};
