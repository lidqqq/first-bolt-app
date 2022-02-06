import { app } from '../../app';

// モーダルでのデータ送信リクエストを処理します
app.view('view_1', async ({ ack, body, view, client, logger }) => {
  // モーダルでのデータ送信リクエストを確認
  await ack();

  // 入力値を使ってやりたいことをここで実装 - ここでは DB に保存して送信内容の確認を送っている

  // block_id: block_1 という input ブロック内で action_id: input_a の場合の入力
  const val = view['state']['values']['input_c']['dreamy_input'];
  const user = body['user']['id'];

  // ユーザーにメッセージを送信
  try {
    await client.chat.postMessage({
      channel: user,
      text: val.value
    });
  }
  catch (error) {
    logger.error(error);
  }

});
