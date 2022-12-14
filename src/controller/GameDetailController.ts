import Result from '@util/Result';
import router from '@util/Router';
import { Context } from 'koa';
import GameInfo from '@src/model/GameInfo';

export default (() => {
  router.get('/getAll', async (ctx: Context) => {
    const gameInfo = await GameInfo.findAll();
    const result: Result = new Result(0, gameInfo, 'ok');
    ctx.body = result;
  });
})();
