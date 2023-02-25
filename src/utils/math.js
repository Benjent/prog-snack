/**
 * Get a random integer.
 * @param {max} array - The maximum possible integer.
 * @return {number} A random integer.
 */
const getRandomNumber = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min
}

export {
    getRandomNumber,
}
