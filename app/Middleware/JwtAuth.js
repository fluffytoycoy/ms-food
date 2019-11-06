'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class JwtAuth {

  async handle ({ request, response, auth}, next) {
    try{
      console.log(request)
        await auth.check()
    } catch (e) {
      if(e.name === 'ExpiredJwtToken'){
        const refreshToken = request.headers().refreshtoken
        console.log(refreshToken);
        const newToken = await auth.generateForRefreshToken(refreshToken)
        response.header('NewToken', newToken.token);
      } else {
        return response.status(401).send()
      }
    }
    await next(response)
  }
}

module.exports = JwtAuth
