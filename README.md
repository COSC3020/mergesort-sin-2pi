# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

The outer loop starts with subarraySize = 1 and doubles it each time with (subarraySize *= 2).

It continues until subarraySize reaches arrayLength. 

It can be simplified to $2^n$.

$2^0$ is our first iteration, equaling 1

$2^1$ is our second iteration, equaling 2

$2^2$ is our third iteration, equaling 4

$2^n$ is our nth iteration, equaling n

It can be simplified to $2^n$. We can turn this into $\Theta log_2(n)$. We start at 1, after each time we multiply it by two we get the next power of 2 for $n$

For each time the outer loop runs, the inner loop does n/subarraySize work. subarraySize is doubling each time, I know that this is the geometric series so the inner loop can be expressed as $\Theta(n)$

Now, mergesort() is $log(n)$.

mergeSubarrays() outer loop runs from leftIndex to rightIndex, covering all elements in the array which is $\Theta(n)$ elements. 

If the elements are not in order the inner while activates, it has to shift elements to properly seat the value being held by rightIndex, which can cover $\Theta(n)$ elements on each iteration.

Because of this, mergeSubarrays() does $n^2$ work.

From this I concluded that this implementation has a time complexity of $n^2 \cdot log_2n ∈ \Theta (n^2logn)$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
