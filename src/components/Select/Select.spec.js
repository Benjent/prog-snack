import { beforeEach, describe, expect, it } from "vitest"
import { shallowMount } from "@vue/test-utils"
import { Select, Icon } from "@/components"

describe("Select.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            options: [1, 2, 3],
        }
        wrapper = shallowMount(Select, { propsData })
    })

    it("renders current value", () => {
        expect(wrapper.find(".select__input__value").text()).toMatch("All")
    })

    it("selects an option", async () => {
        await wrapper.find(".select__input").trigger("click")
        await wrapper.find(".select__option:nth-child(3)").trigger("click")
        expect(wrapper.emitted().input[0]).toEqual([2])
    })

    it("toggles arrow icon", async () => {
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_more")
        await wrapper.find(".select__input").trigger("click")
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_less")
        await wrapper.find(".select__input").trigger("click")
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_more")
    })
})
