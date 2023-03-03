/**
 * Convert an object into an array with a chart-compliant interface.
 * @param {object} object - The object to convert.
 * @return {array} The converted array of {label, value} shape.
 */
const convertDatasource = (object, formatLabel) => {
    return Object.entries(object).map((item) => {
        return {
            label: formatLabel ? formatLabel(item[0]) : item[0],
            value: item[1],
        }
    })
}

export {
    convertDatasource,
}
