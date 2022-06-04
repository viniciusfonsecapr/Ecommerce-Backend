import { v4 } from 'uuid'
import User from '../models/User'
import * as Yup from 'yup'

class UserController {
  async store (request, response) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().email().required(),
      cpf: Yup.string().required().min(11),
      telefone: Yup.string().required().min(11)
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { nome, email, cpf, telefone } = request.body

    const userExists = await User.findOne({
      where: { email }
    })

    if (userExists) {
      return response.status(409).json({ error: 'User already exists' })
    }

    const user = await User.create({
      id: v4(),
      nome,
      email,
      cpf,
      telefone
    })

    return response.status(201).json({ id: user.id, nome, email, cpf, telefone })
  }
}

export default new UserController()
