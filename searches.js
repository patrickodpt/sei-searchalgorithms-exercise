function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let found = false;
    let elementIndex;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == element) {
        // console.log("FOUND IT")
        found = true;
        elementIndex = i
        return elementIndex
      }
    }

    if (found == false) {
      return -1
    }
}

let recursionCounter = 0; //will be use to save original array below

function recursiveBinarySearch(arr, element, start = 0, end = arr.length){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    let midElement;
    let midElementIndex;
    let arrPartition = arr.slice(start, end)

    if (arrPartition.length < 1 && arrPartition[start] != element) {
      return -1
    } else if (arrPartition.length == 1 && arrPartition[start] == element) {
      return midElementIndex
    } else if (arrPartition.length % 2 == 0) {
      midElementIndex = (arrPartition.length / 2) - 1 //gets element just to left of center
      midElement = arrPartition[midElementIndex]
    } else {
      midElementIndex = Math.floor(arrPartition.length / 2)
      midElement = arrPartition[midElementIndex]
    }

    if (midElement == element) {
      
      return midElementIndex

    } else if (element < midElement) {
      recursionCounter++
      return recursiveBinarySearch(arrPartition, element, start = 0, end = midElementIndex)
    } else if (element > midElement) {
      recursionCounter++
      return recursiveBinarySearch(arrPartition, element, start = midElementIndex + 1, end = arrPartition.length)
    }
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
