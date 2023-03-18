import Vue from "vue"
import { criteriumLabels, categoryLabels, languageLabels } from "../db/criteria"
import { regionLabels } from "../db/regions"

Vue.filter("criterium", (value) => {
    if (!criteriumLabels[value] && !languageLabels[value]) {
        console.error(`Unable to find criterium with value: ${value}`)
    }
    return criteriumLabels[value] || languageLabels[value]
})

Vue.filter("criteriumCategory", (value) => {
    if (!categoryLabels[value]) {
        console.error(`Unable to find criteria category with value: ${value}`)
    }
    return categoryLabels[value]
})

Vue.filter("region", (value) => {
    if (!regionLabels[value]) {
        console.error(`Unable to find region with value: ${value}`)
    }
    return regionLabels[value]
})
