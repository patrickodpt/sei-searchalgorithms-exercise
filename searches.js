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

function recursiveBinarySearch(arr, element, start = 0, end = arr.length - 1){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let midElement;
    let elementIndex;
    console.log(`array: ${arr}`);
    if (arr.length % 2 == 0) {
      elementIndex = (arr.length / 2) - 1 //gets element just to left of center
      midElement = arr[elementIndex]
      console.log(`EVEN: ${midElement}`);

    } else {
      elementIndex = Math.floor(arr.length / 2)
      midElement = arr[elementIndex]
      console.log(`ODD: ${midElement}`);

    }

    //INFINITE LOOP WON'T SOLVE TONIGHT
    if (arr.length == 1 || midElement == element) {
      return elementIndex
    } else if (element < midElement) {
      recursiveBinarySearch(arr, element, 0, elementIndex - 1)
    } else if (element > midElement) {
      recursiveBinarySearch(arr, element, elementIndex + 1, end)
    }

    return -100
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
