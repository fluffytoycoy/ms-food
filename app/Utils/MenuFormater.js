'use strict'
//Returns menuData in a format of
// {
//   category1:
//   {
//       type1:[menuItem1, ..ect]
//       type2:[menuItem1, ..ect]
//   }
//   ...ect
// }

module.exports = function(menu){
  let formatedMenu = {}
  menu.forEach(menuItem=>{
    if(formatedMenu[menuItem.category]){
      if(formatedMenu[menuItem.category][menuItem.type]){
        formatedMenu[menuItem.category][menuItem.type].push(menuItem);
      }else{
        formatedMenu[menuItem.category][menuItem.type] = [menuItem];
      }
    }else{
      formatedMenu[menuItem.category] ={};
      formatedMenu[menuItem.category][menuItem.type] = [menuItem];
    }
  })
  return formatedMenu;
}
