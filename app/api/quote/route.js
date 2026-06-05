import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function buildQuoteHtml({ name, email, phone, service, address, details, timeline, budget }) {
  const field = (label, value) =>
    value
      ? `<tr>
           <td style="padding:14px 0;border-bottom:1px solid #f2f2f2;">
             <p style="margin:0 0 5px;color:#999999;font-size:10px;font-weight:700;
                       letter-spacing:0.15em;text-transform:uppercase;font-family:Helvetica,Arial,sans-serif;">
               ${label}
             </p>
             <p style="margin:0;color:#111111;font-size:15px;font-weight:600;line-height:1.5;
                       font-family:Helvetica,Arial,sans-serif;">
               ${value}
             </p>
           </td>
         </tr>`
      : "";

  const detailsRow = details
    ? `<tr>
         <td style="padding:14px 0;border-bottom:1px solid #f2f2f2;">
           <p style="margin:0 0 5px;color:#999999;font-size:10px;font-weight:700;
                     letter-spacing:0.15em;text-transform:uppercase;font-family:Helvetica,Arial,sans-serif;">
             Project Details
           </p>
           <p style="margin:0;color:#111111;font-size:15px;font-weight:600;line-height:1.5;
                     white-space:pre-wrap;font-family:Helvetica,Arial,sans-serif;">
             ${details}
           </p>
         </td>
       </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>New Quote Request</title>
</head>
<body style="margin:0;padding:0;background-color:#eeeeee;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="background-color:#eeeeee;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#111111;padding:38px 44px 34px;
                       border-radius:20px 20px 0 0;text-align:center;">
              <p style="margin:0 0 10px;color:#D0956B;font-size:10px;font-weight:700;
                        letter-spacing:0.3em;text-transform:uppercase;">
                NZ Home Improvement
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;
                         letter-spacing:-0.02em;line-height:1.2;">
                New Quote Request
              </h1>
              <p style="margin:12px 0 0;color:#ffffff80;font-size:13px;line-height:1.4;">
                A new free quote has been requested from the website.
              </p>
            </td>
          </tr>

          <!-- Accent bar -->
          <tr>
            <td style="background-color:#D0956B;height:4px;font-size:1px;line-height:1px;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:36px 44px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                ${field("Full Name", name)}
                ${field("Email", email)}
                ${field("Phone Number", phone)}
                ${field("Service Requested", service)}
                ${field("Property Address / Zip", address)}
                ${field("Desired Timeline", timeline)}
                ${field("Budget Range", budget)}
                ${detailsRow}
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color:#f9f9f9;padding:28px 44px;text-align:center;
                       border-top:1px solid #eeeeee;">
              <a href="mailto:${email}"
                 style="display:inline-block;background-color:#111111;color:#D0956B;
                        text-decoration:none;font-size:13px;font-weight:700;padding:13px 30px;
                        border-radius:50px;letter-spacing:0.05em;font-family:Helvetica,Arial,sans-serif;">
                Reply to Client
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#111111;padding:26px 44px;
                       border-radius:0 0 20px 20px;text-align:center;">
              <p style="margin:0 0 6px;color:#666666;font-size:11px;line-height:1.7;">
                1372 Summer St, Stamford, CT 06905, USA
              </p>
              <p style="margin:0;font-size:11px;line-height:1.7;">
                <a href="mailto:build@nzhomeimprovement.net"
                   style="color:#D0956B;text-decoration:none;">
                  build@nzhomeimprovement.net
                </a>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="tel:+12035247974"
                   style="color:#D0956B;text-decoration:none;">
                  +1 203-524-7974
                </a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, address, details, timeline, budget } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"NZ Home Improvement" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || "build@nzhomeimprovement.net",
      subject: `New Quote Request: ${name}${service ? ` — ${service}` : ""}`,
      html: buildQuoteHtml({ name, email, phone, service, address, details, timeline, budget }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[/api/quote] Error:", error);
    return NextResponse.json({ error: "Failed to send quote request." }, { status: 500 });
  }
}
