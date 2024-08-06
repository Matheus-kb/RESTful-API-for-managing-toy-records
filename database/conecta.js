import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'loja_brinquedos_matheus_e_julia', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});