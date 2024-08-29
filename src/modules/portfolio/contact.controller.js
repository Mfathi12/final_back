// src/modules/contact/contact.controller.js
import nodemailer from 'nodemailer';

// Function to handle contact form submission
export async function handleContactForm(req, res) {
    const { name, email, phone, message } = req.body;

    // Configure Nodemailer for sending emails
    const transporter = nodemailer.createTransport({
        host: 'localhost',
        service: 'gmail',
        auth: {
            user: 'totafarag218@gmail.com',
            pass: 'euts dkaj xnqm bjwi'
        }
    });

    const mailOptions = {
        from: email,
        to: 'mariamfathi17@gmail.com',
        subject: `Contact form submission from ${name}`,
        text: `You have received a new message from your website contact form:nName: ${name} nEmail: ${email} nPhone: ${phone} Message:${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending message');
    }
}
