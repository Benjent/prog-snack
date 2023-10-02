import { sort } from "./array"

describe("array utils", () => {
    it("sort", () => {
        // TODO update utils behavior so that it preserves the input array order
        const input = [{ year: 1976 }, { year: 1969 }, { year: 1977 }]
        sort(input, "year")
        const expected = [{ year: 1969 }, { year: 1976 }, { year: 1977 }]
        expect(input).toEqual(expected)
    })
})
