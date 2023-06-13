# LinkedList Data Structure

A LinkedList is a linear data structure consisting of a sequence of nodes. Each node contains an element and a reference (or link) to the next node in the sequence. The first node is called the head, and the last node is called the tail. If a node's reference points to null, it indicates the end of the LinkedList.

LinkedLists are dynamic data structures that can grow or shrink during program execution, unlike arrays that have a fixed size. They provide efficient insertion and removal of elements, especially at the beginning or end, but accessing elements in the middle of a LinkedList is slower compared to arrays.

LinkedLists are commonly used when the number of elements is unknown or frequently changing, or when efficient insertion and deletion operations are a priority.

## Types of LinkedLists

LinkedLists can be categorized into the following types:

### 1. Singly LinkedList

A Singly LinkedList is the simplest form of a LinkedList. Each node in a Singly LinkedList contains an element and a reference to the next node in the sequence. Traversing this type of LinkedList can only be done in a forward direction.

### 2. Doubly LinkedList

A Doubly LinkedList extends the functionality of a Singly LinkedList by adding a reference to the previous node in addition to the next node. Each node in a Doubly LinkedList contains an element, a reference to the next node, and a reference to the previous node. The presence of backward links allows traversal in both forward and backward directions.

### 3. Circular LinkedList

A Circular LinkedList is a variation of a LinkedList where the last node's reference points back to the head, forming a circular structure. This means that the tail node's next reference points to the head node instead of null. Circular LinkedLists are useful in scenarios where cyclical behavior is required, such as implementing circular buffers or circular queues.

## Complexity of LinkedList Operations

The complexity of various operations on LinkedLists can be described as follows:

### Access

Accessing an element in a LinkedList requires traversing the list from the head node until reaching the desired element. The time complexity of accessing an element is linear, O(n), as it may require traversing the entire list in the worst case.

### Insertion/Removal

Insertion and removal operations in a LinkedList can be efficient, depending on the position.

- At the beginning: Inserting or removing an element at the beginning of the LinkedList is a constant-time operation, O(1), as it involves updating the head reference.
- At the end: Inserting or removing an element at the end of the LinkedList is also a constant-time operation, O(1), if the tail reference is maintained.
- At a specific position: Inserting or removing an element at a specific position in the LinkedList requires traversing to that position, resulting in a linear time complexity, O(n). However, if the position is known, the operation can be performed in constant time with a reference to the node.

### Search

Searching for an element in a LinkedList requires traversing the list from the head node until the element is found or reaching the end. The time complexity of searching in a LinkedList is linear, O(n), as it may require traversing the entire list in the worst case.

LinkedLists provide efficient insertion and removal at the beginning or end of the list but have slower access and search operations compared to arrays. The choice of LinkedList vs. Array depends on the specific use case and the types of operations required for efficient data manipulation.

## Use-Cases

LinkedLists are versatile data structures that find application in various real-world scenarios. Some common use cases of LinkedLists include:

1. **Implementing Queues and Stacks**: LinkedLists are commonly used to implement queues and stacks due to their efficient insertion and removal operations at the beginning or end of the list.

2. **Web Browsers' History**: The history feature in web browsers is often implemented using a LinkedList. Each visited web page is stored as a node, and the LinkedList allows users to navigate forward and backward through their browsing history.

3. **Music Player Playlist**: LinkedLists can be used to implement a playlist in a music player application. Each song in the playlist can be represented by a node, and the LinkedList allows for easy insertion, removal, and traversal of songs in the playlist.

4. **Undo/Redo Functionality**: LinkedLists are useful for implementing undo/redo functionality in applications. Each action or state change can be stored as a node, and the LinkedList allows for easy traversal and reverting to previous states.

5. **Hash Table Collision Handling**: In hash table implementations, collisions may occur when multiple keys map to the same index. LinkedLists are used to handle collisions by creating a linked list of elements that share the same index, allowing efficient insertion and retrieval of key-value pairs.

6. **Garbage Collection**: Some garbage collection algorithms, such as the mark-and-sweep algorithm, utilize LinkedLists to keep track of objects and manage memory allocation. Linked structures can be used to represent objects in memory and track their references.

7. **Sparse Graph Representation**: LinkedLists can be used to represent sparse graphs efficiently. Each vertex in the graph can be represented by a node, and the LinkedList stores the adjacency list, containing the vertices connected to each node.

These are just a few examples of real-time use cases where LinkedLists provide flexibility and efficient operations for various applications. The choice of data structure depends on the specific requirements of the problem at hand.
