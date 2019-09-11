'use strict'

/*
|--------------------------------------------------------------------------
| MealTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
const MealType = use('App/Models/MealType');
const mealTypes = require('./data/MealTypeData');


class MealTypeSeeder {
  async run () {
    const trx = await Database.beginTransaction()
    await MealType.createMany(mealTypes, trx)
    trx.commit();
  }
}

module.exports = MealTypeSeeder
