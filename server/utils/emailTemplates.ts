import { getBase64Image } from "./tobase64";

export async function getUserEmailTemplate(name) {
  const myImageBase64 = await getBase64Image('public/logo-light.png');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Consultation Received</title>
        <style>
          /* Basic Reset */
          body { margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
          .logo { text-align: center; margin-bottom: 20px; }
          .logo img { max-width: 200px; height: auto; }
          .header { background-color: #f4f4f4; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .footer { text-align: center; margin-top: 20px; color: #777; font-size: 0.8em; }
          .accent-color { color: #007bff; } /* Example accent color */
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo">
                <img src="${myImageBase64}" alt="A plus Logo">
            </div>
            <div class="header">
                <h2 style="color: #007bff; margin-bottom: 0;">Thank you for your inquiry, ${name}!</h2>
            </div>
            <div class="content">
                <p style="line-height: 1.6;">We have received your request and will be in touch shortly.  Our team is reviewing your information, and we'll get back to you as soon as possible.</p>
                <p style="line-height: 1.6;">We appreciate your interest in our services!</p>
            </div>
            <div class="footer">
                Best regards,<br>A plus Tutoring
            </div>
        </div>
    </body>
    </html>
    `;
}

export async function getAdminEmailTemplate(data) {
  const myImageBase64 = await getBase64Image('public/logo-light.png');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Consultation Request</title>
        <style>
            /* Basic Reset */
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333; }
            .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; }
            .logo { text-align: center; margin-bottom: 20px; }
            .logo img { max-width: 150px; }
            .data-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .data-table th, .data-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .data-table th { background-color: #f2f2f2; }
            .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #777; }
            .important { font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo">
                <img src="${myImageBase64}" alt="A plus Logo">
            </div>
            <div class="content">
                <h2 style="color: #d32f2f; margin-bottom: 15px;">New Consultation Request</h2>
                <p><span class="important">Name:</span> ${data.name}</p>
            <p><span class="important">Phone:</span> ${data.phone}</p>
            <p><span class="important">Source:</span> ${data.source}</p>
            <p>Check the dashboard for more details.</p>
        </div>
        <div class="footer">
            &copy; ${new Date().getFullYear()} A plus Tutoring. All rights reserved.
        </div>
    </div>
    </body>
    </html>
    `;
}
