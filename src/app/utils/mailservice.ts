/* eslint-disable no-unused-vars */
import nodemailer from 'nodemailer';
import config from '../config';
import { TContactForm } from '../modules/Contact/contact.interface';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailUser,
    pass: config.emailPassword,
  },
});

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetUrl = `${config.frontendUrl}/reset-password/${token}`;
  const mailOptions = {
    from: config.emailUser,
    to: email,
    subject: 'Reset your password within 10 mins!',
    html: `<p>You requested a password reset. Click the link below to reset your password:</p>
           <a href="${resetUrl}">${resetUrl}</a>
           <p>If you didn't request this, please ignore this email.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('Failed to send password reset email');
  }
};

export const sendContactFormEmail = async (formData: TContactForm) => {
  const mailOptions = {
    from: config.emailUser,
    to: config.emailUser, // Send to your email
    replyTo: formData.email, // Allow replying to the sender
    subject: `Portfolio Contact Form Message from ${formData.name}`,
    html: `
      <h2>Portfolio Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('Failed to send contact form email');
  }
};
