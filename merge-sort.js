// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  let merged = [];

  if (arr.length <= 1) return arr; // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half
  let halfIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, halfIndex);
  let right = arr.slice(halfIndex);

  // Recursively sort the left half
  // Recursively sort the right half
  left = mergeSort(left);
  right = mergeSort(right);

  // Merge the halves together and return
  let j = 0;
  let i = 0;

  while (i < left.length || j < right.length){
    if (right[j] === undefined || left[i] < right[j]){
      merged.push(left[i]);
      i++;
    }

    if (left[i] === undefined || left[i] > right[j]){
      merged.push(right[j]);
      j++;
    }

  }

  return merged;

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

}

module.exports = [merge, mergeSort];
