import Result from '@util/Result';
import router from '@util/Router';
import gameDetailService from '@service/GameDetailService';
import { Context } from 'koa';

export default (() => {
  router.get('/getAll', async (ctx: Context) => {
    const data = await gameDetailService();
    const result: Result = new Result(0, data, 'ok');
    ctx.body = result;
  });
})();
