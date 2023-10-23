import Heading from "./Heading.vue"

export default {
    component: Heading,
}

const Template = ({ level }) => ({
    render() {
        return <Heading level={level}>{level ? `This is a level ${level} heading.` : "This is a slot."}</Heading>
    },
})

export const Default = Template.bind({})
Default.args = {
}

export const Level2 = Template.bind({})
Level2.args = {
    level: 2,
}

export const Level3 = Template.bind({})
Level3.args = {
    level: 3,
}
