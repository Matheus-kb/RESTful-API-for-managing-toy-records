import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';

export const Brinquedo = sequelize.define('brinquedo', {
  id : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  },
  faixa_etaria: {
    type: DataTypes.INTEGER(2),
    allowNull: false    
  },
  
}, {
  timestamps: false,
});