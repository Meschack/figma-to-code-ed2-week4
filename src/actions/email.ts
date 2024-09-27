'use server'

import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const mailFromAdress = process.env.MAIL_FROM_ADDRESS
const mailFromPassword = process.env.MAIL_PASSWORD
const port = process.env.MAIL_PORT
const host = process.env.MAIL_HOST

export const sendMail = async (options: Omit<Mail.Options, 'from'>) => {
  try {
    if (!mailFromAdress || !host || !mailFromPassword || !port)
      throw new Error('Missing some environment key(s)')

    const mailOptions: Mail.Options = {
      from: `Doctrin ${mailFromAdress}`,
      ...options
    }

    const transport = nodemailer.createTransport({
      host,
      port: Number(port),
      auth: { user: 'apikey', pass: mailFromPassword }
    })

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Mail sent')
          } else {
            reject(err.message)
          }
        })
      })

    await sendMailPromise()

    return { success: true, message: 'Mail sent' }
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error while sending the mail : ' + error.message)
    }

    throw error
  }
}
