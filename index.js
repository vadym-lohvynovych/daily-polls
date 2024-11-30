const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

async function sendPoll() {
    try {
        const poll = await bot.telegram.sendPoll(process.env.CHAT_ID, 'Вдалося вчора почитати?)', ['Так, звісно!', 'Ні((('], { is_anonymous: false });
        console.log('done')
    } catch (e) {
        console.log('error')
        console.log(e)
    }
}

sendPoll();