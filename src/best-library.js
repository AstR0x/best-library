;(function () {
    /**
     * Get random number
     *
     * @param {number} x Bottom bound
     * @param {number} y  Upper bound
     * @param {number} z A number that should not appear
     * @return {number} Random number
     * */
    function randNum(x, y, z = undefined) {
        if (arguments.length === 1) {
            return Math.round(Math.random() * x);
        }
        let randomNumber = Math.round((Math.random() * (y - x) + x));
        if (y < x) {
            throw new Error('maximum less than minimum');
        }
        while (randomNumber === z) {
            randomNumber = Math.round((Math.random() * (y - x) + x));
        }
        return randomNumber;
    }

    /**
     * Get array of random numbers
     *
     * @param {number} amount Amount of array elements
     * @param {number} max Upper bound
     * @param {number} min Bottom bound
     * @param {boolean} unique Unique numbers
     * @return {array} array Array of random numbers
     */
    function randArr(amount, min, max, unique = false) {
        if (amount > max - min && unique == true) {
            throw new Error('amount more than difference of maximum and minimum');
        }
        let arrOfRUN = [];
        let randomNumber;

        for (let i = 0; i < amount;) {
            randomNumber = randNum(min, max);
            if (arrOfRUN.indexOf(randomNumber) !== -1 && unique == true) {
                continue;
            }
            arrOfRUN[i] = randomNumber;
            i++;
        }
        return arrOfRUN;
    }

    /**
     * Find element index
     *
     * @param {number} element Element to find
     * @param {array} array Array to search
     * @returns {number}
     */
    function interpolationSearch(element, array) {
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
     * Sort array of numbers
     *
     * @param {array} array Array to sort
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
     * Sort array of numbers
     *
     * @param {array} array Array to sort
     */
    function selectionSort(array) {
        for (i = 0; i < array.length - 1; i++) {
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
     * Sort array of numbers
     *
     * @param array {array} Array to sort
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
     * Sort array of numbers
     *
     * @param {array} array Array to sort
     */
    function sortArr(array) {
        array.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
        });
    }

    /**
     * Create new array
     *
     * @param {number} amount Amount of new array
     * @param {number} elem Element that need to fill the array
     * @return {array} New array
     */
    function newArr(amount, elem) {
        let array = [];
        for (var i = 0; i < amount; i++) {
            array.push(elem);
        }
        return array;
    }

    /**
     * Get last element of array
     *
     * @param {array} array Array to search
     * @return {*}
     */
    function lastElem(array) {
        return array[array.length - 1];
    }

    /**
     * Perform an operation on two arrays
     *
     * @param {array} arr1 Array that will change
     * @param {array} arr2 Second array
     * @param {string} oper Operation that will be performed
     */
    function operArr(arr1, arr2, oper) {
        switch (oper) {
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
     * Get factorial of num
     *
     * @param {number} num
     * @returns {number} factorial of num
     */
    function factorial(num) {
        if (num < 2) return 1;
        return factorial(num - 1) * num;
    }

    /**
     * Get the nth Fibonacci number
     *
     * @param {number} num Calculated fibonacci number
     * @returns {number} Fibonacci number
     */
    function fibonacci(num) {
        if (num == 1) return 0;
        if (num == 2) return 1;

        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    /**
     * String compression
     *
     * @param {string} str String to compress
     * @returns {string} Compressed string
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
     * @param {string} str String to convert
     * @returns {string} Converted string
     */
    function upperFirst(str) {
        let strArray = str.split('');
        strArray[0] = strArray[0].toUpperCase();
        for (let i = 0; i < str.length - 1; i++) {
            if (strArray[i] === ' ') {
                strArray[i + 1] = strArray[i + 1].toUpperCase();
            }
        }
        return strArray.join('');
    }

// the module exports
    const bestLibrary = {
        randNum,
        randArr,
        sortArr,
        interpolationSearch,
        bubbleSort,
        selectionSort,
        insertionSort,
        newArr,
        lastElem,
        operArr,
        RLE,
        factorial,
        fibonacci,
        upperFirst,
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