'use strict';
const Database = use('Database')
const User = use('App/Models/User');

class AuthController {

  async login({response, auth, request}){
    const {username, password} = request.all();
    try{
      console.log(username, password)
      let token = await auth.withRefreshToken().attempt(username, password);
      return response.json(token);

    } catch (error){
      console.log(error)
      return response.status(401).send()
    }
  }

  async isLoggedIn({response, auth, request}){
    const requestedData = {requestedData: 'true'};
    return response.json(requestedData);
  }

  async logout({response, auth, request}){
    const token = auth.getAuthHeader()
    console.log(token)
     await auth.revokeTokens([token], true);
    return response.status(200).send();
  }
}

module.exports = AuthController;
