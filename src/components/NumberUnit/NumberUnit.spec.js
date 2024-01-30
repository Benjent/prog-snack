import { describe, expect, it } from "vitest"
import { shallowMount } from "@vue/test-utils"
import { NumberUnit } from "@/components"

describe("NumberUnit.vue", () => {
    it("renders number with its unit when passed", () => {
        const propsData = {
            number: 66,
            unit: "things",
        }
        const wrapper = shallowMount(NumberUnit, { propsData })
        expect(wrapper.find(".numberUnit__number").text()).toMatch("66")
        expect(wrapper.find(".numberUnit__unit").text()).toMatch("things")
    })
})
