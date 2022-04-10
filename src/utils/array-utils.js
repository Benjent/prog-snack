function sort(array, property, orderBy = "ASC") {
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
    sort,
}
