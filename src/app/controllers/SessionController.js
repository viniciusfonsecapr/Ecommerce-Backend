import * as Yup from 'yup'
import User from '../models/User'

class SessionController {
  async store (request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      cpf: Yup.string(),
      name: Yup.string().required()
    })

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Make sure your email or cpf or and name' })
    }
    const { email } = request.body

    const user = await User.findOne({
      where: { email }
    })
    if (!user) {
      return response.status(400).json({ error: 'Make sure your email or cpf or and name' })
    }
    return response.json({ id: user.id, email, name: user.name })
  }
}

export default new SessionController()
