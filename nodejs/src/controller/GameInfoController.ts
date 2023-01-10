import Result from '@util/Result';
import router from '@instance/router';
import { queryGameInfoByTitle } from '@service/GameInfoService';
import { Context } from 'koa';

export default (() => {
  router.get('/queryGameInfoByTitle', async (ctx: Context) => {
    let searchParam = ctx.query.title;
    if (!searchParam) {
      // if undefined
      searchParam = '';
    }
    if (typeof searchParam === 'object') {
      // if string[]
      searchParam = searchParam.join('');
    }

    const gameInfos = await queryGameInfoByTitle(searchParam);
    const result = Result.success(gameInfos);
    ctx.body = result;
  });
})();
