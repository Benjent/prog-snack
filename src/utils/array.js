/**
 * Suffle an array.
 * @param {array} array - The array to shuffle.
 * @return {string} The shuffled array.
 */
const shuffle = (array) => {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = array.length
    let randomIndex

    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}

/**
 * Sort an array by property.
 * @param {array} array - The array to sort.
 * @param {string} property - The property to sort the array by.
 * @param {string} orderBy - The order to sort the array by.
 */
const sort = (array, property, orderBy = "ASC") => {
    if (orderBy === "DESC") {
        array.sort((a, b) => {
            if (a[property] > b[property]) { return -1 }
            if (a[property] < b[property]) { return 1 }
            return 0
        })
    } else {
        array.sort((a, b) => {
            if (a[property] < b[property]) { return -1 }
            if (a[property] > b[property]) { return 1 }
            return 0
        })
    }
}

export {
    shuffle,
    sort,
}
