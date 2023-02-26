import { shallowMount } from "@vue/test-utils"
import { Check } from "@/components"

describe("Check.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            id: "id",
            label: "label",
            value: false,
        }
        wrapper = shallowMount(Check, { propsData })
    })

    it("set attributes when passed", () => {
        expect(wrapper.find(".check").attributes().for).toMatch("id")
        expect(wrapper.find(".check__input").attributes().id).toMatch("id")
        expect(wrapper.find(".check__input").element.checked).toBe(false)
    })

    it("emits value on click", async () => {
        await wrapper.find(".check").trigger("click")
        expect(wrapper.emitted().input[0]).toEqual([true])
        await wrapper.find(".check__input").trigger("click")
        expect(wrapper.emitted().input[1]).toEqual([true])
    })
})
