export default {
  // 启动端口
  port: 3000,
  // 数据库配置
  database: {
    database: 'phantom',
    username: 'ptm',
    password: 'Txcld6118@',
    host: '1.12.243.205',
    port: 3306,
    dialectOptions: {
      requestTimeout: 90000,
    },
    pool: {
      max: 5, // 连接池最大连接数量
      min: 0, // 最小连接数量
      idle: 10000, // 如果一个线程 10秒内没有被使用过的话，就释放
    },
  },
};
