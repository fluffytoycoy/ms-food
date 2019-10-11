//Creates an object of
//
export function parseMenu(menu){
  const menuCategories = Object.keys(menu);
  let menuTypes = {}
  let menuItems = [];
  menuCategories.forEach((category)=>{
    menuTypes = Object.keys(menu[category]);
    menuTypes.forEach((type)=>{
      //push each meal array onto flat menu list
      menuItems.push(...menu[category][type])
    })
  })
  return {menu: menuItems, categories: menuCategories, types: menuTypes};
}
