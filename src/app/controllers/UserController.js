import { v4 } from 'uuid'
import * as Yup from 'yup'

import User from '../models/User'
class UserController {
  async store (request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      telefone: Yup.string().required(),
      email: Yup.string().email().required()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, cpf, telefone, email } = request.body

    const userExists = await User.findOne({
      where: { email }
    })
    if (userExists) {
      return response.status(409).json({ error: 'User already exists' })
    }

    const user = await User.create({
      id: v4(),
      name,
      cpf,
      telefone,
      email
    })

    return response.status(201).json({ id: user.id, name, email })
  }
}
export default new UserController()
