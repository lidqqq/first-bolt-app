import { DialogSubmitAction } from '@slack/bolt';
import { app } from '../../app';

app.action('button_click', async ({ body, ack, say, respond }) => {
  // アクションのリクエストを確認
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
  // await respond(`<@${body.user.id}> clicked the button`);
});

app.action<DialogSubmitAction>('button_abc', async ({ ack, client, body }) => {
  const user = body['user']['id'];
  // アクションのリクエストを確認
  await ack();
  await client.chat.postMessage({
    channel: user,
    text: 'clicked!!!!!!'
  });
  // await say(`button_abc: <@${body.user.id}> clicked the button`);
  // await respond(`<@${body.user.id}> clicked the button`);
});
