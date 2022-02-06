
https://slack.dev/bolt-js/ja-jp/tutorial/getting-started

When you run `npm run dev`, you always need to set ngrok forwarding endpoints to slack settings.

- Event Subscriptions
- Interactivity & Shortcuts
- Slash Commands

But you just need to edit your manifest file easy to change all of them.

## setup

1. fork this repository
1. set envs to Vercel
```
SLACK_SIGNING_SECRET={your-secret-from-slack-dashboard}
SLACK_BOT_TOKEN={xoxb-your-bot-token-from-slack-dashboard}
```

## ハマるとこ

- vercel は public dir を矯正されるので設定マスト
  - 空の index.html でも置いておく
- `vercel.json` で全ての `/api` を `rewrites` する
- vercel は `/api` に serverless を強制する
  - ので、bolt 側のエンドポイントを変えてやる必要がある
    - [`endpoints: ['/api/slack/events']`](https://github.com/lidqqq/first-bolt-app/blob/main/src/slack/app.ts#L8)
  - TS は default の runtime で用意されているので、build する必要ない
- FaaS 環境では [`processBeforeResponse: true` を設定する](https://slack.dev/bolt-js/ja-jp/deployments/aws-lambda#:~:text=processbeforeresponse%3A%20true) ことが必須となる
