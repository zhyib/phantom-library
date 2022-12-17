import config from '@src/config/config';
import { Sequelize } from 'sequelize';

export default new Sequelize({
  dialect: 'mysql', // 指定连接的数据库类型
  ...config.database,
});
