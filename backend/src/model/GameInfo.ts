import { DataTypes, Model } from 'sequelize';
import sequelize from '@instance/sequelized';

// eslint-disable-next-line no-use-before-define
class GameInfo extends Model {
  /**
   * 游戏id
   */
  declare gameId: number;

  /**
   * 中文标题
   */
  declare titleCn: string | null;

  /**
   * 英文标题
   */
  declare titleEn: string | null;

  /**
   * 平台
   */
  declare platform: 'PC'| 'STEAM'| 'XBOX'| 'PS'| 'NS' | null;

  /**
   * 评分
   */
  declare rate: number | null;

  /**
   * 开发商
   */
  declare developer: string | null;

  /**
   * 发行商
   */
  declare publisher: string | null;

  /**
   * 短评
   */
  declare commentLine: string | null;

  /**
   * 长评
   */
  declare commentText: string | null;

  /**
   * 游玩时间
   */
  declare playedTime: number | null;

  /**
   * 游玩日期
   */
  declare playDate: Date | null;

  /**
   * 发行日期
   */
  declare publishDate: Date | null;
}

GameInfo.init({
  gameId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titleCn: {
    type: DataTypes.STRING(100),
  },
  titleEn: {
    type: DataTypes.STRING(100),
  },
  platform: {
    type: DataTypes.ENUM('PC', 'STEAM', 'XBOX', 'PS', 'NS'),
  },
  rate: {
    type: DataTypes.FLOAT,
  },
  developer: {
    type: DataTypes.STRING(100),
  },
  publisher: {
    type: DataTypes.STRING(100),
  },
  commentLine: {
    type: DataTypes.STRING(100),
  },
  commentText: {
    type: DataTypes.STRING(1000),
  },
  playedTime: {
    type: DataTypes.INTEGER,
  },
  playDate: {
    type: DataTypes.DATE,
  },
  publishDate: {
    type: DataTypes.DATE,
  },
}, { sequelize, timestamps: false });

GameInfo.sync({ alter: true });

export default GameInfo;
