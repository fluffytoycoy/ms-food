'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MealType extends Model {
  menuItems(){
    return this.hasMany('App/Models/MenuItem');
  }
}

module.exports = MealType
