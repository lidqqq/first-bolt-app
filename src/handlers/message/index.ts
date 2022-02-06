import { app } from '../../app';

// "hello" を含むメッセージをリッスンします
app.message('hello', async ({ message, say, }) => {
  // イベントがトリガーされたチャンネルに say() でメッセージを送信します
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${(message as any).user}> !`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${(message as any).user}> !`,
    thread_ts: message.ts
  });
});
