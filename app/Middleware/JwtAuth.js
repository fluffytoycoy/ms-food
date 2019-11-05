'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class JwtAuth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth}, next) {
    try{
        await auth.check()
    } catch (e) {
      if(e.name === 'ExpiredJwtToken'){
        const refreshToken = request.headers().refreshtoken
        request.headers().authorization = await auth.generateForRefreshToken(refreshToken)
      } else {
        return response.status(401).send()
      }
    }
    await next()
  }
}

module.exports = JwtAuth
