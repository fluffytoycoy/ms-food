'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MenuItemSchema extends Schema {
  up () {
    this.create('menu_items', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('price')
      table.string('ingredients')
      table.string('subType')
      table.string('served')
      table.integer('type_id').notNullable().unsigned().references('id').inTable('menu_type')
      table.integer('category_id').notNullable().unsigned().references('id').inTable('menu_categories')
      table.timestamps()

    })
  }

  down () {
    this.drop('menu_items')
  }
}

module.exports = MenuItemSchema
