'use strict';
const Database = use('Database')
const MealType = use('App/Models/MealType');
const MenuItem = use('App/Models/MenuItem');
const MenuCategory = use('App/Models/MenuCategory');
const formatMenu = require('../../Utils/MenuFormater');

class ApiController {
  async getMenu(){
    try{
      const menu = await Database
      .select('*',
              'menu_items.name as name',
              'menu_categories.name as category',
              'meal_types.name as type')
      .from('menu_items')
      .innerJoin('meal_types', 'menu_items.type_id', 'meal_types.id')
      .innerJoin('menu_categories', 'menu_items.category_id', 'menu_categories.id');

      return formatMenu(menu)
    } catch (e){
      console.log(e)
    }
  }
  async test(){

  }
}

module.exports = ApiController;
