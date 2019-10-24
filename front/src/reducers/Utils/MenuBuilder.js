//Returns a New based on functions used
export const MenuBuilder = {
  addToDisplayMenu: function(menu, item){
      console.log(menu)
      console.log(item)
      //returns a new Display Menu
      let newMenu = menu;
      let menuList = menu[item.category][item.type] ? menu[item.category][item.type] : [];
      console.log(menuList)
      newMenu[item.category][item.type] = this.addMenuItem(menuList, item);

      return newMenu;
  },

  updateDisplayMenu: function(menu, item){
      //returns a new Display Menu
      let newMenu = this.removeFromDisplayMenu(menu, item);
      return this.addToDisplayMenu(newMenu, item);
  },

  removeFromDisplayMenu: function(menu, item){
      //returns a new Display Menu
      let test = {test: {}, };
      test['test']['test'] = 'yes';
      console.log(test.test.test)
      let newMenu = menu;
      let menuList = menu[item.category][item.type];
      if(menuList){
        const index = this.findIndexById(menuList, item.id);
        newMenu[item.category][item.type] =   this.removeAtIndex(menuList, index);
      }
      return newMenu;
  },

  updateMenuItem: function(itemList, item){
    const index = this.findIndexById(itemList, item.id);
    let newMenu = this.removeAtIndex(itemList, index);
    return this.addMenuItem(newMenu, item);
  },

  removeMenuItem: function(itemList, item){
    const index = this.findIndexById(itemList, item.id);
    if(index >= 0){
      return this.removeAtIndex(itemList, index);
    }
    return itemList;
  },

  removeAtIndex: function(itemList, index){
      const newItemList =  [...itemList.slice(0, index), ...itemList.slice(index + 1)];
      return newItemList;
  },

  addMenuItem: function(itemList, item){
      let newItemList = itemList;
      newItemList.push(item)
      return newItemList;
  },

  findIndexById: function(itemList, id){
      return itemList.findIndex(item => item.id === id)
  },
}
