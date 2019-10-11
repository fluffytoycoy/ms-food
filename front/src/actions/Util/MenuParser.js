//Creates an object of
//
export function parseMenu(menu){
  const categoryKeys = Object.keys(menu);
  let menuTypes = {};
  let menuCategories = {};
  let menuItems = [];

  categoryKeys.forEach((category)=>{
    console.log(menu)
    const typeKeys = Object.keys(menu[category]);
    typeKeys.forEach((type)=>{
      //push each meal array onto flat menu list
      if(!menuCategories[category]){
        menuCategories[category] = menu[category][type][0].category_id;
      }
      if(!menuTypes[type]){
        menuTypes[type] = menu[category][type][0].type_id;
      }
      menuItems.push(...menu[category][type])
    })
  })
  return {menu: menuItems, categories: menuCategories, types: menuTypes};
}
