'use strict';
const Database = use('Database')
const User = use('App/Models/User');

class AuthController {
  async login({response, auth, request}){

    const {username, password} = request.all();

    try{
      console.log(username, password)
      let token = await auth.attempt(username, password);
      let user = await User.findBy('username', username)

      Object.assign(user, token);
      return response.json(user);

    } catch (error){
      console.log(error)
      return response.status(401).send()
    }
  }

  async test({response, auth, request}){
    console.log('test')
  }
}

module.exports = AuthController;
