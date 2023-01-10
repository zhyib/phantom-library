import GameInfo from '@model/GameInfo';
import { Sequelize, Op } from 'sequelize';

/**
 * 通过中文或英文标题查询
 * @param searchParam 查询标题
 * @returns
 */
export function queryGameInfoByTitle(searchParam: string) {
  return GameInfo.findAll({
    order: ['titleEn'],
    where: {
      [Op.or]: [
        Sequelize.where(Sequelize.fn('lower', Sequelize.col('titleEn')), Op.like, `%${searchParam.toLowerCase()}%`),
        {
          titleCn: { [Op.like]: `%${searchParam}%` },
        },
      ],
    },
  });
}
export function queryGameInfoByPage() {
  console.log('queryGameInfoByPage');
}
