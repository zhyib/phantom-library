import 'module-alias/register';
import Koa from 'koa';
import router from '@util/Router';
import config from '@src/config/config';
import '@controller/GameDetailController';

const app = new Koa();

app.use(router.routes());
app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
