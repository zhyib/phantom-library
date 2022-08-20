import mysql, { Pool } from 'mysql';
import config from '@src/config/config';

class Mysql {
  private pool: Pool;

  constructor() {
    this.pool = mysql.createPool({
      database: config.database.database,
      user: config.database.username,
      password: config.database.password,
      host: config.database.host,
      acquireTimeout: 30000,
    });
  }

  public query(sql: string) {
    return new Promise<object>((resolve, reject) => {
      console.log(new Date(), sql);
      this.pool.query(sql, (error, results, fields) => {
        if (error) {
          throw error;
        }
        resolve(results);
      });
    });
  }
}

export default new Mysql();
