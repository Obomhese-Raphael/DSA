// Array Chunks

// Question: Given an array of integers and a chunk size, return an array of arrays where each inner array contains elements from the original array, in groups of the given chunk size.

// Steps: 
// 1. Initialize an empty array called "chunked" to store the resulting chunks.
// 2. Iterate through the input array using a for loop.
// 3. Inside the loop, create a new array called "chunk" to store the current chunk of elements.
// 4. Push the current element from the input array into the "chunk" array.
// 5. If the length of the "chunk" array reaches the given chunk size, push it into the "chunks" array and reset the "chunk" array.
// 6. After the loop, check if there are any remaining elements in the "chunk" array. If so, push it into the "chunks" array.

const chunkArray = (array, size) => {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        const chunk = array.slice(index, index + size);
        console.log(chunk);
        chunked.push(chunk);
        index += size;
    }
    return chunked;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Expected Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]


// Using a For loop

const chunksArray = (array, size) => {
    const chunked = [];

    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }

    return chunked;
};

console.log(chunksArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Expected Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]