// Sort - Sort the elements in the array

const sort = (array) => {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

const elements = [1, 5, 2, 1, 7, 4, 2, 1, 1, 1, 1, 2, 2, 9, 1, 3, 1, 8, 1, 9]
console.log(elements)
const sortedElements = sort(elements);
console.log(sortedElements);


const numbers = [3, 7, 2, 9, 1, 5];

numbers.sort((a, b) => a - b);

console.log(numbers);