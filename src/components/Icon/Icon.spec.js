import { beforeEach, describe, expect, it } from "vitest"
import { shallowMount } from "@vue/test-utils"
import { Icon } from "@/components"

describe("Icon.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            name: "palette",
        }
        wrapper = shallowMount(Icon, { propsData })
    })

    it("renders icon name when passed", () => {
        expect(wrapper.find(".icon").text()).toMatch("palette")
    })
})
