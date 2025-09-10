import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const transporter = nodemailer.createTransport({
    
    service: "gmail",  
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

function renderTemplate(templateName: string, variables: Record<string, string>) {
    const filePath = path.join(__dirname, "..", "templates", `${templateName}.html`);
    let html = fs.readFileSync(filePath, "utf-8");

    for (const key in variables) {
        const value = variables[key] ?? ""; 

        html = html.replace(new RegExp(`{{${key}}}`, "g"), value);
    }

    return html;
}


export {
    renderTemplate,transporter
}