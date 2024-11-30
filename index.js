const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);
const chatId = '-4536195920';


async function sendPoll() {
    try {
        const poll = await bot.telegram.sendPoll(chatId, 'Вдалося вчора почитати?)', ['Так, звісно!', 'Ні((('], { is_anonymous: false });
        console.log('done')
    } catch (e) {
        console.log('error')
        console.log(e)
    }
}

sendPoll();