

let driver = {}


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}




function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  result = Object.assign({}, driver)
  delete result[key]
  return result
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
