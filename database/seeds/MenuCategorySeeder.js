'use strict'

/*
|--------------------------------------------------------------------------
| MenuCategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database');
const MenuCategory = use('App/Models/MenuCategory');
const menuData = require('./data/MenuCategoryeData');

class MenuCategorySeeder {
  async run () {
    const trx = await Database.beginTransaction()
    await MenuCategory.createMany(menuData, trx)
    trx.commit();
  }
}

module.exports = MenuCategorySeeder
