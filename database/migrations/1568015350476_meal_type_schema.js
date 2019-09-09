'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MealTypeSchema extends Schema {
  up () {
    this.create('meal_types', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('meal_types')
  }
}

module.exports = MealTypeSchema
