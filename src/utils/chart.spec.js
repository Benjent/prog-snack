import { describe, expect, it } from "vitest"
import { convertDatasource } from "./chart"

describe("chart utils", () => {
    it("convertDatasource", () => {
        const input = { a: 1, b: 2, c: 3 }
        const converted = convertDatasource(input)
        const expected = [
            { label: "a", value: 1 },
            { label: "b", value: 2 },
            { label: "c", value: 3 },
        ]
        expect(converted).toEqual(expected)

        const convertedWithFormattedLabel = convertDatasource(input, (label) => `Entry ${label}`)
        const expectedWithFormattedLabel = [
            { label: "Entry a", value: 1 },
            { label: "Entry b", value: 2 },
            { label: "Entry c", value: 3 },
        ]
        expect(convertedWithFormattedLabel).toEqual(expectedWithFormattedLabel)
    })
})
