const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

async function sendPoll() {
    try {
        await bot.telegram.sendPoll(process.env.CHAT_ID, 'Вдалося вчора почитати?)', ['Так!', 'Ні(((', 'Не беру участь'], { is_anonymous: false });
        await bot.telegram.sendPoll(process.env.CHAT_ID, 'А медитувати?)', ['Намасте!', 'Ні(((', 'Не беру участь'], { is_anonymous: false });
        console.log('done')
    } catch (e) {
        console.log('error')
        console.log(e)
    }
}

sendPoll();
