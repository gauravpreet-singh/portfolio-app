import db from '../config/db.js'
import nodemailer from 'nodemailer'

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body

    db.run(
      `INSERT INTO contacts (name, email, message)
       VALUES (?, ?, ?)`,
      [name, email, message],
      async function (err) {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          })
        }

        // Email Sending
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        })

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: 'Portfolio Contact Message',
          html: `
            <h2>New Contact Message</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p>${message}</p>
          `,
        })

        res.status(201).json({
          success: true,
          message: 'Message Sent Successfully',
          contactId: this.lastID,
        })
      }
    )
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}