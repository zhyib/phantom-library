import { DataTypes, Model } from 'sequelize';
import sequelize from '@src/util/sequelize';

class GameInfo extends Model { };

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
