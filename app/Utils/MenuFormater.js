'use strict'
//Returns menuData in a format of
// {
//   category1:
//   {
//       type1:{products:[]}
//       type2:{products:[]}
//   }
//   ...ect
// }

module.exports = function(menu){
  let formatedMenu = {}
  menu.forEach(menuItem=>{
    if(formatedMenu[menuItem.category]){
      if(formatedMenu[menuItem.category][menuItem.type]){
        formatedMenu[menuItem.category][menuItem.type].products.push(menuItem)
      }else{
        formatedMenu[menuItem.category][menuItem.type]= {products: [menuItem]};
      }
    }else{
      formatedMenu[menuItem.category] ={};
      formatedMenu[menuItem.category][menuItem.type] ={products: [menuItem]};
    }
  })
  return formatedMenu;
}
