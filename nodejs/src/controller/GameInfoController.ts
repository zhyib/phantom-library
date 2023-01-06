import Result from '@util/Result';
import router from '@instance/router';
import GameInfo from '@model/GameInfo';
import { Context } from 'koa';
import { Op } from 'sequelize';

export default (() => {
  router.get('/getAll', async (ctx: Context) => {
    const gameInfo: GameInfo[] = await GameInfo.findAll({
      order: ['titleEn'],
      where: {
        titleEn: {
          [Op.like]: `%${ctx.query.titleEn}%`,
        },
      },
    });
    const result: Result = Result.success(gameInfo);
    ctx.body = result;
  });
})();
