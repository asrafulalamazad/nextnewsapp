import nodemailer from "nodemailer";
export async function SendEmail(EmailTo,EmailText,EmailSubject) {

    let Transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "asrafulnodemailer@gmail.com",
            pass: 'gszb lsan rcfn pcnu'
        },
    });
    let MailOption = {
        from: 'ASRAFUL NewsPortal <asrafulnodemailer@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    }
    return  await Transport.sendMail(MailOption)
}
