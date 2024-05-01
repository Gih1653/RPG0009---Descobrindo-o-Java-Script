
function swap(array, pos1, pos2) {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
}


function shuffle(array, swaps) {
  for (let i = 0; i < swaps; i++) {
      const pos1 = Math.floor(Math.random() * array.length);
      const pos2 = Math.floor(Math.random() * array.length);
      swap(array, pos1, pos2);
  }
}

function bubble_sort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (array[j] > array[j + 1]) {
              swap(array, j, j + 1);
          }
      }
  }
}

function selection_sort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (array[j] < array[minIndex]) {
              minIndex = j;
          }
      }
      if (minIndex !== i) {
          swap(array, i, minIndex);
      }
  }
}
function quick_sort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;
  const pivot = array[end];
  let left = start;
  let right = end - 1;
  while (left <= right) {
      while (array[left] < pivot) left++;
      while (array[right] > pivot) right--;
      if (left <= right) {
          swap(array, left, right);
          left++;
          right--;
      }
  }
  swap(array, left, end);
  quick_sort(array, start, left - 1);
  quick_sort(array, left + 1, end);
}