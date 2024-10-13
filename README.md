# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer

Our outer loop in mergesort() runs log(n) times. This is because we are analyzing the input starting in pairs of two (our subarrays), and doubling each time. $2^0, 2^1, 2^2, ..., 2^k$, we stop when the subarrays are greater than the array length. $2^k >= n$ which equals $\Theta(logn)$.

The inner loop has to run through the entire input each time it is called, this is taking $n$ time.

I can now say that our mergesort() function has a time complexity of $\Theta(nlogn)$.

mergeSubarrays() takes $\Theta(n^2)$ time to run, as it involves shifting elements inside the input, and there are two loops that go over $n$ elements in the worst case. 

With this, I say that this program has a time complexity of $\Theta(n^3logn$).

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
