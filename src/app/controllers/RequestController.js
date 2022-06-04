import * as Yup from 'yup'

class RequestController {
  async store (request, response) {
    const schema = Yup.object().shape({
      usuario_id: Yup.string().required(),
      name: Yup.string().required(),
      preco: Yup.number().required(),
      descricao: Yup.string().required(),
      quantidade: Yup.number().required()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }
    return response.json({ ok: true })
  }
}

export default new RequestController()
