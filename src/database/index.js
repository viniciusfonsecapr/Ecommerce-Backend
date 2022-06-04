import Sequelize from 'sequelize'

// Models abaixo
import Request from '../app/models/Request'
import User from '../app/models/User'

// configuração da database
import configData from '../config/database'

const models = [User, Request]
class Database {
  constructor () {
    this.init()
  }

  init () {
    this.connection = new Sequelize(configData)
    models.map(model => model.init(this.connection))
  }
}
export default new Database()
