# Array

An array is a linear data structure that stores a fixed-size sequence of elements of the same type. The elements in an array are typically stored in contiguous memory locations, allowing for efficient access to individual elements using their indices.

Arrays are widely used because they provide fast access to elements and allow for efficient manipulation of data. They are commonly used in programming languages to store collections of items, such as numbers, characters, or objects.

Arrays are defined by their size, which represents the number of elements they can hold. The size of an array is fixed and determined at the time of declaration.

Note: In JavaScript, arrays are dynamic and can store any types of items in a single array and doesn't require fixed size.

## Types of Arrays

Arrays can be categorized into the following types:

### 1. One-Dimensional Array

A one-dimensional array, also known as a simple or linear array, is the most basic form of an array. It stores elements in a single row or line. Elements in a one-dimensional array are accessed using a single index.

### 2. Two-Dimensional Array

A two-dimensional array, also known as a matrix or table, is an extension of the one-dimensional array. It is structured as a grid of elements with rows and columns. Elements in a two-dimensional array are accessed using two indices, one for the row and one for the column.

### 3. Multi-Dimensional Array

A multi-dimensional array is an array with more than two dimensions. It can be thought of as a nested array structure, where each element can itself be an array. Multi-dimensional arrays provide a way to represent complex data structures, such as matrices with multiple dimensions or multi-level trees.

## Complexity of Array Operations

The complexity of various operations on arrays can be described as follows:

### Access

Accessing an element in an array by its index is a constant-time operation, denoted as O(1). Since arrays provide direct access to elements using their indices, accessing any element in an array takes the same amount of time, regardless of the size of the array.

### Insert

Inserting an element into an array requires shifting all subsequent elements to accommodate the new element. The complexity of insertion in an array depends on the position of insertion.

- At the end: Inserting an element at the end of the array takes constant time, O(1).
- At the beginning: Inserting an element at the beginning of the array requires shifting all existing elements, resulting in a linear time complexity, O(n).
- At a specific index: Inserting an element at a specific index in the array also requires shifting subsequent elements, resulting in a linear time complexity, O(n).

### Remove

Removing an element from an array requires shifting subsequent elements to fill the gap created by the removal. Similar to insertion, the complexity of removal depends on the position of the element to be removed.

- At the end: Removing the last element from an array takes constant time, O(1).
- At the beginning: Removing the first element requires shifting all subsequent elements, resulting in a linear time complexity, O(n).
- At a specific index: Removing an element from a specific index in the array also requires shifting subsequent elements, resulting in a linear time complexity, O(n).

### Find

Finding or searching for an element in an array requires traversing the array and comparing each element until a match is found. The complexity of finding an element in an unsorted array is linear, O(n), as the worst case may involve examining all elements. However, if the array is sorted, more efficient search algorithms such as binary search can be used, reducing the complexity to logarithmic time, O(log n).

It's important to note that the complexities mentioned above represent the worst-case scenarios