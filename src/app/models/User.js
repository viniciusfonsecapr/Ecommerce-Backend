import Sequelize, { Model } from 'sequelize'

class User extends Model {
  static init (sequelize) {
    super.init({
      name: Sequelize.STRING,
      cpf: Sequelize.STRING,
      telefone: Sequelize.STRING,
      email: Sequelize.STRING
    }, {
      sequelize
    })
  }
}

export default User
