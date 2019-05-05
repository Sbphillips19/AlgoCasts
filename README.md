# AlgoCasts

Companion repo to a course on Udemy.com

Run all tests by running the command (make sure you have jest installed):

jest FolderName/test.js --watch

Notes about Runtime Complexity:

Describes the performance of an algorithm- how much processing power/ time is required to run your algorithm if you double the inputs

1 additional step through loop is a 'linear' runtime or 'N'

A loop within a loop/ 2 for loops (nested loops) we are taking input N and then as we increase N we have to do significantly more things.  
 as 'n' increased by one we had to do more stuff or (n\*n) things total
This would be N^2 or quadratic runtime

Common runtimes:

Constant time- 1- no matter how many elements we're working with the algorithm/ operation/ whatever will always take the same time

Logarithmic Time- log(n)- you have this if doubling the number of elements you are iterating over doesn't double the amount of work- always assume that searching operations are log(n)

Linear Time- n- iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length', you probably have 'n', or linear runtime

Quasilinear Time- n*log(n)- you have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operating is n*log(n)

Quadratic Time- n^2- Every element in a collection has to be compared to every other element- 'the handshake problem'

Exponential Time- 2^n- if you add a 'single' element to a collection, the processing power required doubles

BIG 'O' Notation
O(n)- linear
O(1)- constant
O(n^2)- quadratic

Memoization is caching- how to improve runtime of this function
