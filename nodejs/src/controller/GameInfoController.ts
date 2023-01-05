import Result from '@util/Result';
import router from '@instance/router';
import GameInfo from '@model/GameInfo';
import { Context } from 'koa';

export default (() => {
  router.get('/getAll', async (ctx: Context) => {
    const gameInfo: GameInfo[] = await GameInfo.findAll({
      order: ['titleEn'],
    });
    const result: Result = Result.success(gameInfo);
    ctx.body = result;
  });
})();
