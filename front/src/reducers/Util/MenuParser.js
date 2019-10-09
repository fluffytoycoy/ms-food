export function parseMenu(menu){
  const menuCategories = Object.keys(menu);
  let menuItems = [];
  menuCategories.forEach((category)=>{
    const categoryTypes = Object.keys(menu[category]);
    categoryTypes.forEach((type)=>{
      //push each meal array onto flat menu list
      menuItems.push(...menu[category][type])
    })
  })
  return menuItems;
}
