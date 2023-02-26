import { shallowMount } from "@vue/test-utils"
import { Accordion, Icon } from "@/components"

describe("Accordion.vue", () => {
    it("renders title when passed", () => {
        const propsData = {
            title: "title",
        }
        const wrapper = shallowMount(Accordion, { propsData })
        expect(wrapper.find(".accordion__title").text()).toMatch("title")
    })

    it("toggles arrow icon", async () => {
        const propsData = {
            title: "title",
        }
        const wrapper = shallowMount(Accordion, { propsData })
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_more")
        await wrapper.find(".accordion__title").trigger("click")
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_less")
        await wrapper.find(".accordion__title").trigger("click")
        expect(wrapper.findComponent(Icon).props().name).toMatch("expand_more")
    })
})
