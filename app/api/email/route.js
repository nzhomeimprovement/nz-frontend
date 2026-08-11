import { NextResponse } from "next/server";
import { Resend } from "resend";

// ─── Email template ───────────────────────────────────────────────────────────

function buildEmailHtml({ type, title, fields }) {
  const rows = fields
    .filter((f) => f.value)
    .map(
      ({ label, value, isLarge }) => `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #f2f2f2;">
          <p style="margin:0 0 5px;color:#999999;font-size:10px;font-weight:700;
                    letter-spacing:0.15em;text-transform:uppercase;font-family:Helvetica,Arial,sans-serif;">
            ${label}
          </p>
          <p style="margin:0;color:#111111;font-size:15px;font-weight:600;line-height:1.5;
                    font-family:Helvetica,Arial,sans-serif;${isLarge ? "white-space:pre-wrap;" : ""}">
            ${value}
          </p>
        </td>
      </tr>`
    )
    .join("");

  const emailField = fields.find((f) => f.key === "email")?.value;
  const phoneField = fields.find((f) => f.key === "phone")?.value;

  const ctaButton = emailField
    ? `<a href="mailto:${emailField}"
          style="display:inline-block;background-color:#111111;color:#D0956B;text-decoration:none;
                 font-size:13px;font-weight:700;padding:13px 30px;border-radius:50px;
                 letter-spacing:0.05em;font-family:Helvetica,Arial,sans-serif;">
         Reply to Client
       </a>`
    : phoneField
    ? `<a href="tel:${phoneField.replace(/\D/g, "").replace(/^/, "+")}"
          style="display:inline-block;background-color:#111111;color:#D0956B;text-decoration:none;
                 font-size:13px;font-weight:700;padding:13px 30px;border-radius:50px;
                 letter-spacing:0.05em;font-family:Helvetica,Arial,sans-serif;">
         Call Client
       </a>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:#eeeeee;
             font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="background-color:#eeeeee;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width:600px;width:100%;">

          <!-- ── Header ── -->
          <tr>
            <td style="background-color:#111111;padding:38px 44px 34px;
                       border-radius:20px 20px 0 0;text-align:center;">
              <p style="margin:0 0 10px;color:#D0956B;font-size:10px;font-weight:700;
                         letter-spacing:0.3em;text-transform:uppercase;">
                NZ Home Improvement
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;
                         letter-spacing:-0.02em;line-height:1.2;">
                ${title}
              </h1>
              <p style="margin:12px 0 0;color:#ffffff80;font-size:13px;line-height:1.4;">
                ${type === "lead"
                  ? "A new lead has been submitted from the homepage form."
                  : "A new message has been submitted from the Contact Us page."}
              </p>
            </td>
          </tr>

          <!-- ── Lime accent bar ── -->
          <tr>
            <td style="background-color:#D0956B;height:4px;font-size:1px;line-height:1px;">&nbsp;</td>
          </tr>

          <!-- ── Body ── -->
          <tr>
            <td style="background-color:#ffffff;padding:36px 44px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                ${rows}
              </table>
            </td>
          </tr>

          <!-- ── CTA ── -->
          ${ctaButton ? `
          <tr>
            <td style="background-color:#f9f9f9;padding:28px 44px;text-align:center;
                       border-top:1px solid #eeeeee;">
              ${ctaButton}
            </td>
          </tr>` : ""}

          <!-- ── Footer ── -->
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

// ─── Thank-you email (sent to the customer) ───────────────────────────────────

function buildThankYouHtml({ name }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Thank You for Contacting NZ Home Improvement</title>
</head>
<body style="margin:0;padding:0;background-color:#eeeeee;
             font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="background-color:#eeeeee;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width:600px;width:100%;">

          <tr>
            <td style="background-color:#111111;padding:38px 44px 34px;
                       border-radius:20px 20px 0 0;text-align:center;">
              <p style="margin:0 0 10px;color:#D0956B;font-size:10px;font-weight:700;
                        letter-spacing:0.3em;text-transform:uppercase;">
                NZ Home Improvement
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;
                         letter-spacing:-0.02em;line-height:1.2;">
                Thank You, ${name}!
              </h1>
            </td>
          </tr>

          <tr>
            <td style="background-color:#D0956B;height:4px;font-size:1px;line-height:1px;">&nbsp;</td>
          </tr>

          <tr>
            <td style="background-color:#ffffff;padding:36px 44px 28px;">
              <p style="margin:0 0 16px;color:#111111;font-size:15px;line-height:1.6;
                        font-family:Helvetica,Arial,sans-serif;">
                We've received your message and appreciate you reaching out to NZ Home Improvement.
                A member of our team will review your request and get back to you within one business day.
              </p>
              <p style="margin:0;color:#111111;font-size:15px;line-height:1.6;
                        font-family:Helvetica,Arial,sans-serif;">
                If your project is time-sensitive, feel free to call us directly at
                <a href="tel:+12035247974" style="color:#D0956B;text-decoration:none;font-weight:700;">+1 203-524-7974</a>.
              </p>
            </td>
          </tr>

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

function buildThankYouText({ name }) {
  return `Hi ${name},

Thanks for reaching out to NZ Home Improvement. We've received your message and a member of our team will get back to you within one business day.

If your project is time-sensitive, call us at +1 203-524-7974.

NZ Home Improvement
1372 Summer St, Stamford, CT 06905, USA`;
}

// ─── reCAPTCHA verification ────────────────────────────────────────────────────

async function verifyRecaptcha(token) {
  if (!token) return false;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY, response: token }),
  });
  const data = await res.json();
  return data.success === true;
}

// ─── Resend client ─────────────────────────────────────────────────────────────

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, recaptchaToken } = body;

    if (type === "contact") {
      const recaptchaOk = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaOk) {
        return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let title, subject, replyTo, fields, customerEmail, customerName;

    if (type === "lead") {
      const { name, phone, email, zip, interest, referral } = body;

      if (!name || !phone || !email) {
        return NextResponse.json({ error: "Name, phone, and email are required." }, { status: 400 });
      }

      if (!emailRegex.test(email)) {
        return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
      }

      title   = "New Lead Received";
      subject = `New Lead: ${name}${interest ? ` — ${interest}` : ""}`;
      replyTo = email;
      customerEmail = email;
      customerName  = name;
      fields  = [
        { key: "name",     label: "Full Name",           value: name },
        { key: "phone",    label: "Phone Number",         value: phone },
        { key: "email",    label: "Email",                value: email },
        { key: "zip",      label: "Zip Code",             value: zip },
        { key: "interest", label: "Remodeling Interest",  value: interest },
        { key: "referral", label: "How They Found Us",    value: referral },
      ];

    } else if (type === "contact") {
      const { name, email, subject: msgSubject, message } = body;

      if (!name || !email || !message) {
        return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
      }

      if (!emailRegex.test(email)) {
        return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
      }

      title   = "New Contact Message";
      subject = msgSubject || `New message from ${name}`;
      replyTo = email;
      customerEmail = email;
      customerName  = name;
      fields  = [
        { key: "name",    label: "Name",    value: name },
        { key: "email",   label: "Email",   value: email },
        { key: "subject", label: "Subject", value: msgSubject },
        { key: "message", label: "Message", value: message, isLarge: true },
      ];

    } else {
      return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
    }

    const fromName = process.env.FROM_NAME || "NZ Home Improvement";
    const fromEmail = process.env.FROM_EMAIL;
    const from = `${fromName} <${fromEmail}>`;

    const { error: sendError } = await resend.emails.send({
      from,
      replyTo,
      to: process.env.CONTACT_EMAIL || fromEmail,
      subject,
      html: buildEmailHtml({ type, title, fields }),
    });

    if (sendError) {
      console.error("[/api/email] Resend error:", sendError);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    if (customerEmail) {
      const { error: thankYouError } = await resend.emails.send({
        from,
        to: customerEmail,
        subject: "Thank you for contacting NZ Home Improvement",
        html: buildThankYouHtml({ name: customerName }),
        text: buildThankYouText({ name: customerName }),
      });
      if (thankYouError) {
        console.error("[/api/email] Thank-you email failed:", thankYouError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[/api/email] Error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
