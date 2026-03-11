import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, product, message } = body;

    // Basic validation
    if (!name || !email || !phone || !product || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const productLabels: Record<string, string> = {
      "gir-cow-ghee": "Gir Cow A2 Ghee",
      vermicompost: "Organic VermiCompost",
      both: "Both Products",
      general: "General Inquiry",
    };

    const productLabel = productLabels[product] || product;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to farm owner
    await transporter.sendMail({
      from: `"Alpha Farm Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New Inquiry: ${productLabel} — from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #FEFAE0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #2D6A4F, #40916C); padding: 30px; text-align: center;">
            <h1 style="color: #FEFAE0; margin: 0; font-size: 28px;">Alpha Farm</h1>
            <p style="color: #D4A017; margin: 5px 0 0; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">New Inquiry Received</p>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D9C9A3; color: #6B4226; font-size: 13px; width: 35%;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D9C9A3; color: #3B2314; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D9C9A3; color: #6B4226; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D9C9A3; color: #3B2314;"><a href="mailto:${email}" style="color: #2D6A4F;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D9C9A3; color: #6B4226; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D9C9A3; color: #3B2314;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D9C9A3; color: #6B4226; font-size: 13px;">Product Interest</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D9C9A3;">
                  <span style="background: #D4A017; color: #3B2314; padding: 3px 12px; border-radius: 20px; font-size: 13px; font-weight: bold;">${productLabel}</span>
                </td>
              </tr>
            </table>
            <div style="margin-top: 20px; background: #F8F4E3; border-radius: 12px; padding: 18px; border-left: 4px solid #2D6A4F;">
              <p style="color: #6B4226; font-size: 13px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="color: #3B2314; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <div style="background: #2D6A4F; padding: 16px; text-align: center;">
            <p style="color: #FEFAE0; font-size: 12px; margin: 0; opacity: 0.7;">
              This inquiry was submitted via alphafarm.in - Please reply directly to ${email}
            </p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the person who submitted
    await transporter.sendMail({
      from: `"Alpha Farm Gaushala" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for your inquiry, ${name.split(" ")[0]}! — Alpha Farm`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #FEFAE0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #2D6A4F, #40916C); padding: 30px; text-align: center;">
            <h1 style="color: #FEFAE0; margin: 0; font-size: 28px;">Alpha Farm</h1>
            <p style="color: #D4A017; margin: 5px 0 0; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">Gir Cow Gaushala</p>
          </div>
          <div style="padding: 30px;">
            <p style="color: #3B2314; font-size: 17px; font-weight: bold; margin: 0 0 12px;">Dear ${name.split(" ")[0]},</p>
            <p style="color: #6B4226; line-height: 1.7; margin: 0 0 15px;">
              Thank you for reaching out to Alpha Farm Gaushala! We have received your inquiry
              regarding <strong style="color: #2D6A4F;">${productLabel}</strong> and our team will get
              back to you within <strong>24 hours</strong>.
            </p>
            <p style="color: #6B4226; line-height: 1.7; margin: 0 0 20px;">
              We are committed to providing you with the finest answers about our pure Gir Cow
              products. In the meantime, feel free to call us directly if you have any urgent needs.
            </p>
            <div style="background: #F8F4E3; border-radius: 12px; padding: 18px; border-left: 4px solid #D4A017;">
              <p style="color: #3B2314; font-weight: bold; margin: 0 0 8px;">Alpha Farm Gaushala</p>
              <p style="color: #6B4226; font-size: 14px; margin: 0 0 4px;">📍 Gujarat, India</p>
              <p style="color: #6B4226; font-size: 14px; margin: 0 0 4px;">📞 +91 00000 00000</p>
              <p style="color: #6B4226; font-size: 14px; margin: 0;">🌿 Est. 15 March 2022</p>
            </div>
            <p style="color: #3B2314; margin: 20px 0 0; font-style: italic;">
              Warm regards,<br />
              <strong>Team Alpha Farm</strong><br />
              <span style="font-size: 13px; color: #6B4226;">Shri Kishor & Kiranbhai Balubhai Vataliya</span>
            </p>
          </div>
          <div style="background: #2D6A4F; padding: 16px; text-align: center;">
            <p style="color: #FEFAE0; font-size: 12px; margin: 0; opacity: 0.7;">Pure · Natural · Ethical — alphafarm.in</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
