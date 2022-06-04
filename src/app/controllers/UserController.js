import { v4 } from 'uuid'

import User from '../models/User'
class UserController {
  async store (request, response) {
    const { name, cpf, telefone, email } = request.body

    const user = await User.create({
      id: v4(),
      name,
      cpf,
      telefone,
      email
    })

    return response.json(user)
  }
}
export default new UserController()
