'use strict';
const Database = use('Database')
const User = use('App/Models/User');

class AuthController {

  async login({response, auth, request}){
    const {username, password} = request.all();
    try{
      console.log(username, password)
      let token = await auth.withRefreshToken().attempt(username, password);
      console.log(token)
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
}

module.exports = AuthController;
