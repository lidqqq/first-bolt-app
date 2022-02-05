import { app } from '../../app';

app.action('button_click', async ({ body, ack, say, respond }) => {
  // アクションのリクエストを確認
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
  // await respond(`<@${body.user.id}> clicked the button`);
});
