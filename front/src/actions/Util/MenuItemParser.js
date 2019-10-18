export function parseMenuItem(menuItem){
  return {
    name: menuItem.name,
    category_id: menuItem.category_id,
    type_id: menuItem.type_id,
    price: menuItem.price,
    served: menuItem.served,
    subType: menuItem.subType,
    ingredients: menuItem.ingredients,
  }
}
