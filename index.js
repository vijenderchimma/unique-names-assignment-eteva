let array1 = ["vijju","mahesh","raju","kumar","srinu","raviteja"]
let array2 = ["mahesh","srinivas","srikanth","thiurupathi","raju","laxman"]

// Here we will get names that is not in array2. if anyone matches it won't be added into uniqueNamesArr1 filter is used to filter the names that don't match.
let uniqueNamesArr1 = array1.filter(names => !array2.includes(names))
console.log(uniqueNamesArr1)

// Here we will get names that is not in array1. if anyone matches it won't be added into uniqueNamesArr1 filter is used to filter the names that don't match.

let uniqueNamesArr2 = array2.filter(names => !array1.includes(names))
console.log(uniqueNamesArr2)

//Here we will get names that are in both arra1 and array2

let commonNames = array1.filter(names => array2.includes(names))
console.log(commonNames)