var recipes = new Object; 
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj; 
}
function deleteFromObjectByKey(obj, key) {
  obj = Object.assign({}, obj)
  delete obj.key
  return obj; 
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj; 
}