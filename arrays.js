var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
 
 function addElementToBeginningOfArray(chocolateBars, foo){
return ['foo', ...chocolateBars]
 }
 
 function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
 [chocolateBars.unshift("foo")]
 return chocolateBars
}

function addElementToEndOfArray(chocolateBars, foo){
  return [...chocolateBars, 'foo']
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  [chocolateBars.push('foo')]
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
return chocolateBars[2]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
[chocolateBars.shift()]
return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
return chocolateBars.slice(1)
}