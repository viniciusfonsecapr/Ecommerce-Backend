import Sequelize, { Model } from 'sequelize'

class Request extends Model {
  static init (sequelize) {
    super.init({
      usuario_id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      preco: Sequelize.INTEGER,
      descricao: Sequelize.STRING,
      quantidade: Sequelize.INTEGER
    }, {
      sequelize
    })
  }
}

export default Request
