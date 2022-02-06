import { app } from '../../app';

const welcomeChannelId = 'C031VBC4MM2';

app.event('app_mention', async ({ event, client, logger }) => {
  try {
    // 組み込みの client で chat.postMessage を呼び出す
    const result = await client.chat.postMessage({
      channel: welcomeChannelId,
      text: `Welcome to the team, <@${event.user}>! 🎉 You can introduce yourself in this channel.`
    });
    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
});
