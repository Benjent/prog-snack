import { criteriumLabels, categoryLabels } from "../db/criteria"
import { regionLabels } from "../db/regions"

export default {
    criterium(value) {
        if (!criteriumLabels[value]) {
            console.error(`Unable to find criterium with value: ${value}`)
        }
        return criteriumLabels[value]
    },
    criteriumCategory(value) {
        if (!categoryLabels[value]) {
            console.error(`Unable to find criteria category with value: ${value}`)
        }
        return categoryLabels[value]
    },
    region(value) {
        if (!regionLabels[value]) {
            console.error(`Unable to find region with value: ${value}`)
        }
        return regionLabels[value]
    },
}
