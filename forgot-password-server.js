const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // allows JSON body

// 1. Generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// 2. Send OTP email
app.post("/send-otp", async (req, res) => {
    const { email } = req.body;

    const otp = generateOTP();
    console.log("Generated OTP:", otp);  // for debugging

    // Set up email transporter (Gmail example)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mixedvegewrice@gmail.com",
            pass: "YOUR_APP_PASSWORD" 
        }
    });

    const mailOptions = {
        from: "YOUR_GMAIL@gmail.com",
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is: ${otp}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "OTP sent!" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Failed to send email" });
    }
});

// Start server
app.listen(3000, () => console.log("Server running at http://localhost:3000"));

