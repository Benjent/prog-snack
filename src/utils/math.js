const getRandomNumber = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min // Randomize id
}

export {
    getRandomNumber,
}
