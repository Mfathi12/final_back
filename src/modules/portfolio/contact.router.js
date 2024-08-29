import express from 'express';
import { handleContactForm } from './contact.controller.js';

const router = express.Router();

// Route to handle contact form submission
router.post('/handle', handleContactForm);

export default router;
