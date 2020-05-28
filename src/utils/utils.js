function getRandomNumber(max) {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min // Randomize id
}

function sortByYear(albumA, albumB) {
    if (albumA.year < albumB.year)
        return -1
    if (albumA.year > albumB.year)
        return 1
    return 0
}

function sortByOccurences(criteriumA, criteriumB) {
    if (criteriumA.occurences > criteriumB.occurences)
        return -1
    if (criteriumA.occurences < criteriumB.occurences)
        return 1
    return 0
}

export {
    getRandomNumber,
    sortByYear,
    sortByOccurences,
}
