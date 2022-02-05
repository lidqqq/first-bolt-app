
https://slack.dev/bolt-js/ja-jp/tutorial/getting-started

When you run `npm run dev`, you always need to set ngrok forwarding endpoints to slack settings.

- Event Subscriptions
- Interactivity & Shortcuts

## ハマるとこ

- vercel は public dir を矯正されるので設定マスト
- `vercel.json` で全ての `/api` を `rewrites` する
- vercel は `/api` に serverless を矯正する
  - ので、bolt 側のエンドポイントを変えてやる必要がある
    - `endpoints: ['/api/slack/events']`
- runtime は node.js っぽいので、`-r tsm` とかはダメっぽい。ので vercel では js へ build する
