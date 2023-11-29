import {
    beforeEach, describe, expect, it,
} from "vitest"
import { shallowMount } from "@vue/test-utils"
import { List } from "@/components"

describe("List.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            values: ["1", "2", "3"],
            type: "flattened",
        }
        wrapper = shallowMount(List, { propsData })
    })

    it("renders list when passed", () => {
        expect(wrapper.find(".list__item:nth-child(2)").text()).toMatch("2,")
    })
})
