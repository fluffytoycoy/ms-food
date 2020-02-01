'use strict';
const Database = use('Database')
const User = use('App/Models/User');

class AuthController {

  async login({response, auth, request}){
    const {username, password} = request.all();
    try{
      let token = await auth.withRefreshToken().attempt(username, password);
      return response.json(token);
    } catch (error){
      return response.status(401).send()
    }
  }

  async logout({response, auth, request}){
    const token = auth.getAuthHeader()
     await auth.revokeTokens([token], true);
    return response.status(200).send();
  }
}

module.exports = AuthController;
