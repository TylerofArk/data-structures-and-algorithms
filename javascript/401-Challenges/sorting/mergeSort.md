# Understanding the Logic Behind Merge Sort

Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem into smaller sub-problems until they become simple enough to solve directly.

## Here are the steps Merge Sort takes:

Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
Continue dividing the sub-arrays in the same manner until you are left with only single element arrays.
Starting with the single element arrays, merge the sub-arrays so that each merged sub-array is sorted.
Repeat step 3 unit with end up with a single sorted array.

PseudoCode:

``` ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### JS interpreted Code:

``` function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
 left and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [ ...arr, ...left, ...right ]
}
```

### References:

[Stack Abuse](https://stackabuse.com/merge-sort-in-javascript/)
