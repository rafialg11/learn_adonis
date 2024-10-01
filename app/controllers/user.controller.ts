import { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";

export default class UserController {
  async store({request, response}: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    const user = await User.create(data)
    return response.created(user)
  }

  async show({request, response}: HttpContext) {
    const id = request.param('id')
    const user = await User.findOrFail(id)
    return response.ok(user)
  }

  async update({request, response}: HttpContext) {
    const id = request.param('id')
    const data = request.only(['fullName', 'email', 'password'])
    const user = await User.findOrFail(id)
    user.merge(data)
    await user.save()
    return response.ok(user)
  }
}
