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

  findIndexById: function(itemList, id){
      return itemList.findIndex(item => item.id === id)
  },

  editMenuItem: function(itemList, item){
    let newMenu = this.removeAtIndex(itemList, item.id);
    return this.addItem(newMenu, item);
  },

  removeAtIndex: function(itemList, index){
      return [...itemList.slice(0, index), ...itemList.slice(index + 1)]
  },

  addItem: function(itemList, item){
      let newItemList = itemList;
      return newItemList.push(item);
  }
}
