import {Counter} from "./counter"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
    title: "FormatedCounter",
    component: Counter,

    argTypes:{}
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args=> <Counter {...args}/>)//(args=> <MyButton {...args} />)

export const MyCounter = Template.bind({})

MyCounter.args = {value:1200.0}
