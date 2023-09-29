import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const sendCert=(docData)=>{
    transporter.sendMail({
        from: 'John Doe <'+process.env.EMAIL + '>',
        to: 'godfreydhl@gmail.com', 
        subject: 'Testing nodemailer',
        html: `<h1>Heading</h1>
        <p> This is a nodemailer email. Well done G</p>`,
        attachments:[
            {
                filename:'invoice.pdf',
                path:`./document/${docData.email}.pdf`
            }
        ]
    }, (err, info)=>{
        if(err) throw err;
        res.json({status:info.response})
    })

}

export default sendCert