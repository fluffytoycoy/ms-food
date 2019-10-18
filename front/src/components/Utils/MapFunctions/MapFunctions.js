export function getStringifiedKeyFromValue(object, value){
  return Object.keys(object).filter(key => object[key] == value)[0];
}
