const nodemailer = require('nodemailer')

const main = async (message) => {
  const htmlMessage = `
                         <h2>Telefonska številka: ${message.tel}</h2>
                         <h2>E-mail: ${message.mail}</h2>
                         <h2>Zanima me: ${message.zanimaMe.spletnaStran}<br>
                         ${message.zanimaMe.spletnaTrgovina}<br>
                         ${message.zanimaMe.seo}<br>
                         ${message.zanimaMe.vodenjeDružabnihProfilov}<br>
                         ${message.zanimaMe.tiskopisje}<br>
                         ${message.zanimaMe.fotografiranje}<br>
                         ${message.zanimaMe.organizacijaDogodkov}<br>
                         ${message.zanimaMe.videoProdukcija}<br>
                         ${message.zanimaMe.graficnoOblikovanje} </h2><br>
                         <h2>${message.soglasam}</h2>
                         `
  const transporter = nodemailer.createTransport({
    host: 'mail.dig-it.si',
    port: 465,
    secure: true,
    auth: {
      user: 'david@dig-it.si',
      pass: 'pO=KW{=8KX6)',
    },
  })

  const info = await transporter.sendMail({
    from: 'Dig-it Spletna Stran <niksa@dig-it.si>',
    to: 'info@dig-it.si',
    subject: 'Novo sporočilo',
    html: htmlMessage,
  })

  return info.messageId
}

export default async function mailSend(req, res) {
  const id = await main(req.body).catch((e) => console.log(e))
  if (id) {
    res.status(200).json(id)
  } else {
    res.status(404).json(err)
  }
}
