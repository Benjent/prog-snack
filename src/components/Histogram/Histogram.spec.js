import { describe, expect, it } from "vitest"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Transitions from "vue2-transitions"
import { Histogram } from "@/components"

describe("Histogram.vue", () => {
    function wrapperFactory({ propsData } = {}) {
        const defaultPropsData = {
            caption: "caption",
            datasource: [
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
            ],
        }
        const localVue = createLocalVue()
        localVue.use(Transitions)
        return shallowMount(Histogram, {
            propsData: { ...defaultPropsData, ...propsData },
            localVue,
        })
    }

    it("renders caption when passed", () => {
        const wrapper = wrapperFactory()
        expect(wrapper.find(".histogram__caption").text()).toMatch("caption")
    })

    it("renders bar chart", async () => {
        const wrapper = wrapperFactory()
        expect(wrapper.find(".histogram__entry:nth-child(1) .histogram__label").text()).toMatch("3")
        expect(wrapper.find(".histogram__entry:nth-child(2) .histogram__label").text()).toMatch("2")
        expect(wrapper.find(".histogram__entry:nth-child(3) .histogram__label").text()).toMatch("1")
    })

    it("renders bar chart with ASC and threshold", async () => {
        const propsData = {
            sort: "ASC",
            threshold: 2,
        }
        const wrapper = wrapperFactory({ propsData })
        expect(wrapper.find(".histogram__entry:nth-child(1) .histogram__label").text()).toMatch("2")
    })
})
