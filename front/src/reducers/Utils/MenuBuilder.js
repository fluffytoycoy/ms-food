//Returns a New based on functions used
export const MenuBuilder = {
  addToDisplayMenu: function(menu, item){
      //returns a new Display Menu
      let newMenu = menu;
      let menuList = menu[item.category][item.type];
      newMenu[item.category][item.type] = this.addItem(menuList, item);

      return newMenu;
  },

  editDisplayMenuItem: function(menu, item){
      //returns a new Display Menu
      let newMenu = this.removeFromDisplayMenu(menu, item);
      return this.addToDisplayMenu(newMenu, item);
  },

  removeFromDisplayMenu: function(menu, item){
      //returns a new Display Menu
      let newMenu = menu;
      let menuList = newMenu[item.category][item.type];
      const index = this.findIndexById(menuList, item.id);
      newMenu[item.category][item.type] = this.removeAtIndex(menuList, index);

      return newMenu;
  },

  editMenuItem: function(itemList, item){
    const index = this.findIndexById(itemList, item.id);
    let newMenu = this.removeAtIndex(itemList, index);
    return this.addItem(newMenu, item);
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
      console.log(newItemList);
      return newItemList;
  },

  addItem: function(itemList, item){
      let newItemList = itemList;
      return newItemList.push(item);
  },

  findIndexById: function(itemList, id){
      return itemList.findIndex(item => item.id === id)
  },
}
