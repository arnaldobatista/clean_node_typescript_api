import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { type httpRequest, type httpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  handle(httpRequest: httpRequest): httpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) { return badRequest(new MissingParamError(field)) }
    }
  }
}
