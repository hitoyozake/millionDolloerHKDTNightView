import {MyButton} from "./counter"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
    title: "MyButton",
    component: MyButton,

    argTypes:{}
} as ComponentMeta<typeof MyButton>

const Template: ComponentStory<typeof MyButton> = (args=> <MyButton />)//(args=> <MyButton {...args} />)

export const MyButtonPage = Template.bind({})

MyButtonPage.args = {}
