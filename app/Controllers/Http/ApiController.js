'use strict';
const Database = use('Database')
const MealType = use('App/Models/MealType');
const MenuItem = use('App/Models/MenuItem');
const MenuCategory = use('App/Models/MenuCategory');

class ApiController {
  async getMenu(){
    try{
      const menu = await Database
        .select('*')
        .from('menu_items')
        // .whereIn('genre_id', genres).whereIn('console_id', consoles)
        // .innerJoin('genres', 'games.genre_id', 'genres.id')
        // .innerJoin('consoles', 'games.console_id', 'consoles.id')
        // .select('title', 'games.img_url', 'consoles.name as console', 'genres.name as genre')
        // .orderByRaw('RANDOM()')
        // .limit(1)
      console.log(menu)
      return menu
    } catch (e){
      console.log(e)
    }
  }
}

module.exports = ApiController;
