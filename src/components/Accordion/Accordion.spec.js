import { shallowMount } from "@vue/test-utils"
import { Accordion, Icon } from "@/components"

describe("Accordion.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            title: "title",
        }
        wrapper = shallowMount(Accordion, { propsData })
    })

    it("renders title when passed", () => {
        expect(wrapper.find(".accordion__title").text()).toMatch("title")
    })

    it("toggles arrow icon", async () => {
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_more")
        await wrapper.find(".accordion__title").trigger("click")
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_less")
        await wrapper.find(".accordion__title").trigger("click")
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_more")
    })
})
