const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground"
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const auth = new OAuth2( MAILING_ID, MAILING_SECRET, MAILING_REFRESH, oauth_link );

exports.sendVerificationEmail=(email, name, url) => {

    auth.setCredentials({
        refresh_token: MAILING_REFRESH,
    });

    const accessToken = auth.getAccessToken();
    const stmp = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: EMAIL,
            clientId: MAILING_ID,
            clientSecret: MAILING_SECRET,
            refreshToken: MAILING_REFRESH,
            accessToken,
        },
    });
    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: "Clang Social Account Verification",
        html: `<div style="max-width:screen;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;gap:10px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-weight:600;color:#f51997"><img src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671128285/Clang-Social/cs_vm6e6x.png" alt="Clang Social" style="width:30px"><span>Action: Activate your Clang Social account</span></div><div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem 0;border-top:1px solid silver;border-bottom:1px solid silver;color:#141823;font-style:17px;font-family:'Trebuchet MS','Lucida Sans Unicode','Lucida Grande','Lucida Sans',Arial,sans-serif"><span>Hello ${name},</span><div style="padding:20px 0"><span style="padding:1.5rem 0">Welcome to the family. Before continuing, you have one final task to complete which is to confirm your account.</span></div><a href="${url}" style="display:flex;justify-content:center;align-items:center;width:200px;padding:10px 15px;background-color:#f51997;color:#fff;text-decoration:none;font-weight:600">Confirm your account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:gray">Clang Social | Post Anything, Anytime, Anywhere</span></div></div>`
    };
    stmp.sendMail(mailOptions, (err, res) => {
        if(err) return err;
        return res;
    })
};