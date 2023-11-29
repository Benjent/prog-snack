import {
    beforeEach, describe, expect, it,
} from "vitest"
import { shallowMount } from "@vue/test-utils"
import { Radio } from "@/components"

describe("Radio.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            id: "id",
            label: "label",
            value: "value",
            own: "own",
        }
        wrapper = shallowMount(Radio, { propsData })
    })

    it("set attributes when passed", () => {
        expect(wrapper.find(".radio").attributes().for).toMatch("id")
        expect(wrapper.find(".radio__input").attributes().id).toMatch("id")
        expect(wrapper.find(".radio__input").element.checked).toBe(false)
    })

    it("emits value on click", async () => {
        await wrapper.find(".radio").trigger("click")
        expect(wrapper.emitted().input[0]).toEqual(["own"])
        await wrapper.find(".radio__input").trigger("click")
        expect(wrapper.emitted().input[1]).toEqual(["own"])
    })
})
