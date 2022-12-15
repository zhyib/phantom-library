import config from '@src/config/config';
import { Sequelize } from 'sequelize';

export default new Sequelize({
  database: config.database.database,
  dialect: 'mysql', // 指定连接的数据库类型
  host: config.database.host,
  username: config.database.username,
  password: config.database.password,
  dialectOptions: {
    requestTimeout: 90000,
  },
  pool: {
    max: 5, // 连接池最大连接数量
    min: 0, // 最小连接数量
    idle: 10000, // 如果一个线程 10秒内没有被使用过的话，就释放
  },
});
