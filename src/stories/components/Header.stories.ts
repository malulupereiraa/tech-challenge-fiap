import Header from "@/app/@core/components/ui/header/Header";
import { HeaderProps } from "../Header";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon.stories";



export default {
  title: "Components_TCF/Header/Header",
  component: Header,

  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],

  argTypes: {
    width: {
      control:{
        type: 'select',

      },
      options:['small', 'medium', 'large'],
      description:
        "Dimensions that determine the change of Header Component state",
    },
  },
} as Meta;

type Story = StoryObj<HeaderProps>;

export const Mobile: Story =  {
    args: {
        name: '',
        button: Object.keys(ButtonIcon),
        size: 'small',
      },
    };

   
