export default {
  // 启动端口
  port: 3000,
  // 数据库配置
  database: {
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
