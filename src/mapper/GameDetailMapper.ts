import mysql from '@util/Mysql';

export default async function gameDetailMapper() {
  return mysql.query('SELECT * FROM game_detail');
};
