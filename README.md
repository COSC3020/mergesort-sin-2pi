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

## Recurrence Relation and Summation Analysis

Let T(n) be the time complexity of the algorithm for an input of size n.

The algorithm divides the problem into subproblems of size $n/2^i$, where $i$ goes from $1$ to $log_2(n)$. At each level, we perform $n * 2^i$ comparisons.

We can express this as a recurrence relation:

$$ T(n) = \sum_{i=1}^{\log_2(n)} (n * 2^i) $$

$$ T(n) = n * \sum_{i=1}^{\log_2(n)} (2^i) $$

This looks like we can use the geometric series here.

$$
\begin{aligned}
\sum_{i=1}^{\log_2(n)} [2^i] &= 2 * \frac{2^{\log_2(n)} - 1}{2 - 1} \\
&= 2 * (n - 1) \\
&= 2n - 2
\end{aligned}
$$

Now I can substitute back in the original equation.



$T(n) = n * (2n - 2)$

$= 2n^2 - 2n$



This simplifies down to $T(n) = \Theta(n^2)$

The entire process is repeated `log<sub>2</sub>(n) times due to the outer loop that doubles the subarray size in each iteration.

Therefore, the final time complexity is:

$$ T(n) = \Theta(n^2 * \log_2(n)) $$


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
