import { app } from './app';
import './handlers';

(async () => {
  const port = process.env.PORT || 80;
  // アプリを起動します
  await app.start(port);

  console.log(`⚡️ Bolt app is running at port:${port}!`);
})();
