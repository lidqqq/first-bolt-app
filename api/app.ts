import { App } from '@slack/bolt';
import 'dotenv/config';

// ボットトークンとソケットモードハンドラーを使ってアプリを初期化します
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: ['/api/slack/events']
});

export { app };
