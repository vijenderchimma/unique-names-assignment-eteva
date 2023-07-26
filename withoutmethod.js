function findUniqueNamesNotInArr(arr1,arr2){

    let uniqueNames = [];
    let nameOccurences = {};

    for (let i=0; i < arr1.length; i++){

        const name = arr1[i];

        if (!nameOccurences[name] && !isNameInArr(name,arr2)){
            uniqueNames[uniqueNames.length] = name;
            nameOccurences[name] = true;
        }
    }
    return uniqueNames
}


function isNameInArr(name,arr){
    for (let i =0; i< arr.length; i++){
        if (arr[i] === name){
            return true
        }
    }
    return false
}

function findCommonNames(arr1,arr2){
    let nameOccurences = {}
    let commonNames = []

    for (let i = 0; i< arr1.length; i++){
        const name = arr1[i]
        nameOccurences[name] = true;
    }

    for (let i = 0; i < arr2.length; i++){
        const name = arr2[i]

        if (nameOccurences[name]){
            commonNames[commonNames.length] = name;
            nameOccurences[name] = false;
        }
    }

    return commonNames
}

let array1 = ["vijju","mahesh","raju","kumar","srinu","raviteja"]
let array2 = ["mahesh","srinivas","srikanth","thiurupathi","raju","laxman"]

let uniqueNamesArr1 = findUniqueNamesNotInArr(array1,array2)
let uniqueNamesArr2 = findUniqueNamesNotInArr(array2,array1)
let commonNames = findCommonNames(array1,array2)
console.log(uniqueNamesArr1)
console.log(uniqueNamesArr2)
console.log(commonNames)