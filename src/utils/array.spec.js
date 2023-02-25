import { sort } from "./array"

describe("array utils", () => {
    it("sort", () => {
        const input = [{ year: 1976 }, { year: 1969 }, { year: 1977 }]
        sort(input, "year")
        const expected = [{ year: 1969 }, { year: 1976 }, { year: 1977 }]
        expect(input).toEqual(expected)
    })
})
