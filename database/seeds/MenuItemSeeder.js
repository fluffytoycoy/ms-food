'use strict'

/*
|--------------------------------------------------------------------------
| MenuItemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database');
const MenuItem = use('App/Models/MenuItem');
const menuData = require('./data/MenuItemData');

class MenuItemSeeder {
  async run () {
    const trx = await Database.beginTransaction()
    await MenuItem.createMany(menuData, trx)
    trx.commit();
  }
}

module.exports = MenuItemSeeder
