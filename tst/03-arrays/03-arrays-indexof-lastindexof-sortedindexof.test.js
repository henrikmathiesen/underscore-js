/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#indexOf
indexOf_.indexOf(array, value, [isSorted])
Returns the index at which value can be found in the array, or -1 if value is not present in the array. If you're working with a large array, and you know that the array is already sorted, pass true for isSorted to use a faster binary search ... or, pass a number as the third argument in order to look for the first matching value in the array after the given index. 

http://underscorejs.org/#lastIndexOf
lastIndexOf_.lastIndexOf(array, value, [fromIndex])
Returns the index of the last occurrence of value in the array, or -1 if value is not present. Pass fromIndex to start your search at a given index. 

http://underscorejs.org/#sortedIndex
sortedIndex_.sortedIndex(list, value, [iteratee], [context])
Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. If an iteratee function is provided, it will be used to compute the sort ranking of each value, including the value you pass. The iteratee may also be the string name of the property to sort by (eg. length). 

*/