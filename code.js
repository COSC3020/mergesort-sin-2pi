function mergesort(arr) {
  const n = arr.length;

  for (let size = 1; size < n; size *= 2) {
    for (let start = 0; start < n - 1; start += 2 * size) {
      const mid = Math.min(start + size - 1, n - 1);
      const end = Math.min(start + 2 * size - 1, n - 1);
      merge(arr, start, mid, end);
    }
  }

  return arr;
}
