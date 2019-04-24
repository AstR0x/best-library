;(function () {


    /**
     * Get the random number
     *
     * @param {number} x The bottom bound
     * @param {number} y  The upper bound
     * @param {number} z A number that should not appear
     * @return {number} The random number
     * */
    function randomNum(x, y, z = undefined) {

        if (arguments.length === 1) {
            return Math.round(Math.random() * x);
        }

        if (y < x) {
            throw new Error('maximum less than minimum');
        }

        let randomNumber = Math.round((Math.random() * (y - x) + x));

        while (randomNumber === z) {
            randomNumber = Math.round((Math.random() * (y - x) + x));
        }
        return randomNumber;
    }


    /**
     * Get the array of random numbers
     *
     * @param {number} size The size of an array
     * @param {number} max The upper bound
     * @param {number} min The Bottom bound
     * @param {boolean} unique Unique numbers
     * @return {array} array The array of random numbers
     */
    function randomArray(size, min, max, unique = false) {
        if (size > max - min && unique == true) {
            throw new Error('size more than difference of maximum and minimum');
        }
        const arrOfRUN = [];
        let randomNumber;

        for (let i = 0; i < size;) {
            randomNumber = randomNum(min, max);
            if (arrOfRUN.indexOf(randomNumber) !== -1 && unique == true) {
                continue;
            }
            arrOfRUN[i] = randomNumber;
            i++;
        }
        return arrOfRUN;
    }


    /**
     * Create a new array
     *
     * @param {number} size The size of the new array
     * @param {number} elem The element that need to fill the array
     * @return {array} A new array
     */
    function createArray(size, elem) {
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(elem);
        }
        return array;
    }


    /**
     * Perform an operation on two arrays
     *
     * @param {array} arr1 The array that will change
     * @param {array} arr2 The second array
     * @param {string} operation The operation that will be performed
     */
    function arrayOperations(arr1, arr2, operation) {
        switch (operation) {
            case "+":
                for (let i = 0; i < arr1.length; i++) {
                    arr1[i] += arr2[i];
                }
                break;

            case "-":
                for (let i = 0; i < arr1.length; i++) {
                    arr1[i] -= arr2[i];
                }
                break;

            case "*":
                for (let i = 0; i < arr1.length; i++) {
                    arr1[i] *= arr2[i];
                }
                break;

            case "/":
                for (let i = 0; i < arr1.length; i++) {
                    arr1[i] /= arr2[i];
                }
                break;

            default:
                throw new Error('wrong operation');
        }
    }


    /**
     * Get the last element of an array
     *
     * @param {array} array The array to search
     * @return {*}
     */
    function lastElem(array) {
        return array[array.length - 1];
    }


    /**
     * Sort the array of numbers
     *
     * @param {array} array The array to sort
     */
    function sortArray(array) {
        array.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
        });
    }


    /**
     * Sort an array of numbers
     *
     * @param {array} array The Array to sort
     */
    function bubbleSort(array) {
        let isSorted = false;
        let lastIndex = array.length - 1;
        while (!isSorted) {
            isSorted = true;

            for (let i = 0; i < lastIndex; i++) {
                let current = array[i];
                let next = array[i + 1];

                if (current > next) {
                    isSorted = false;
                    array[i] = next;
                    array[i + 1] = current;
                }
            }
            lastIndex--;
        }
    }


    /**
     * Sort an array of numbers
     *
     * @param {array} array The array to sort
     */
    function selectionSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            let lowestValueIndex = i;

            for (j = i + 1; j < array.length; j++) {
                if (array[j] < array[lowestValueIndex]) {
                    lowestValueIndex = j;
                }
            }

            if (lowestValueIndex !== i) {
                let temp = array[i];
                array[i] = array[lowestValueIndex];
                array[lowestValueIndex] = temp;
            }
        }
    }


    /**
     * Sort an array of numbers
     *
     * @param array {array} The Array to sort
     */
    function insertionSort(array) {
        for (let i = 1; i < array.length; i++) {

            let position = i;
            const temp = array[position];

            while (temp < array[position - 1] && position > 0) {
                array[position] = array[position - 1];
                position--;
            }

            array[position] = temp;
        }
    }


    /**
     * Find element index
     *
     * @param {array} array The array to search
     * @param {number} element The element to find
     * @returns {number} The element index
     */
    function binarySearch(array, element) {
        let left = 0;
        let right = array.length - 1;

        while(left <= right) {
            let mid = Math.floor((right + left) / 2);

            if (element > array[mid]) {
                left = mid + 1;
            } else if (element < array[mid]) {
                right = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    }


    /**
     * Find element index
     *
     * @param {array} array The array to search
     * @param {number} element The element to find
     * @returns {number}
     */
    function interpolationSearch(array, element) {
        let diff;
        let left = 0;
        let right = array.length - 1;

        while (array[left] < element && array[right] > element) {
            diff = left + Math.floor(((element - array[left]) * (right - left)) / (array[right] - array[left]));

            if (array[diff] < element) {
                left = diff + 1;
            } else if (array[diff] > element) {
                right = diff - 1;
            } else {
                return diff;
            }
        }

        if (array[left] === element) {

            return left;
        } else if (array[right] === element) {

            return right;
        }
        return -1;
    }


    /**
     * Get an factorial of num
     *
     * @param {number} num
     * @returns {number} The factorial of num
     */
    function factorial(num) {
        if (num < 2) return 1;
        return factorial(num - 1) * num;
    }


    /**
     * Get nth Fibonacci number
     *
     * @param {number} num The calculated fibonacci number
     * @returns {number} The fibonacci number
     */
    function fibonacci(num) {
        if (num == 1) return 0;
        if (num == 2) return 1;

        return fibonacci(num - 1) + fibonacci(num - 2);
    }


    /**
     * String compression
     *
     * @param {string} str The string to compress
     * @returns {string} The compressed string
     */
    function RLE(str) {
        let newStr = '';
        let last = str[0];
        let count = 1;

        for (let i = 1; i <= str.length; i++) {
            if (str[i] == last) {
                count++;
            } else {
                newStr += last + count;
                last = str[i];
                count = 1;
            }
        }
        return newStr;
    }


    /**
     * Convert the first letter of a word to upper case
     *
     * @param {string} str The string to convert
     * @returns {string} The converted string
     */
    function upperFirst(str) {
        const strArray = str.split('');
        strArray[0] = strArray[0].toUpperCase();

        for (let i = 0; i < str.length - 1; i++) {
            if (strArray[i] === ' ') {
                strArray[i + 1] = strArray[i + 1].toUpperCase();
            }
        }
        return strArray.join('');
    }


    /**
     * Measure function execution time
     *
     * @param {function} callback The function whose time is to be measured
     * @returns {{answer: *, time: number}|number} An object consist of execution time and callback function return
     */
    function measureTime(callback) {
        const args = [...arguments].slice(1);
        const startTime = performance.now();
        const answer = callback(...args);
        const time = performance.now() - startTime;

        if(answer !== undefined) {
            return {time, answer}
        } else {
            return time;
        }
    }

// the module exports
    const bestLibrary = {
        randomNum,
        randomArray,
        createArray,
        arrayOperations,
        lastElem,
        sortArray,
        bubbleSort,
        selectionSort,
        insertionSort,
        binarySearch,
        interpolationSearch,
        factorial,
        fibonacci,
        RLE,
        upperFirst,
        measureTime,
    };

    // define the module as AMD, commonJS or global
    if (typeof define == 'function' && define.amd) {
        define([], function () {
            return bestLibrary;
        });
    } else if (typeof exports != 'undefined') {
        exports = module.exports = bestLibrary;
    } else {
        this.bestLibrary = bestLibrary;
    }

}.call(this));