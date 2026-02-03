import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // 1. Save to Database
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    await newContact.save();

    // 2. Configure Email Transporter
    // NOTE: In production, use environment variables for credentials
    // For now, this is a placeholder structure.
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred service
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 3. Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Send to admin
      subject: `New Contact Request from ${firstName} ${lastName}`,
      text: `
        You have received a new message from the contact form.
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
    };

    // 4. Email to User (Auto-reply)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Samikaran',
      text: `
        Dear ${firstName},
        
        Thank you for reaching out to Samikaran. We have received your message and will get back to you shortly.
        
        Best Regards,
        Team Samikaran
      `,
    };

    // Attempt to send emails (don't block response on failure, but log it)
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
        console.log('Emails sent successfully');
      } else {
        console.log('Skipping email sending: Missing EMAIL_USER or EMAIL_PASS in .env');
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // We still return success to the user because the data WAS saved
    }

    res.status(201).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
  }
};
