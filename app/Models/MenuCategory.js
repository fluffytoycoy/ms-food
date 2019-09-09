'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MenuCategory extends Model {
  menuItems(){
    return this.hasMany('App/Models/MenuItem');
  }
}

module.exports = MenuCategory
