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
      description:
        "Dimensions that determine the change of Header Component state",
    },
    variant: {
      control: "radio",
      description: "Header format",
      options: ["screen", "tablet", "mobile"],
    },
  },
} as Meta;

type Story = StoryObj<HeaderProps>;

export const Mobile: Story =  {
    args: {
        name: '',
        button: Object.keys(ButtonIcon),
        width: 360,
        variant: "mobile"
      },
    };

    export const Tablet: Story = {
      args: {
          name: 'Joana da Silva Oliveira',
          button: {},
          width: 720,
          variant: "tablet"
        },
      };

   export const Screen: Story = {
      args: {
          name: 'Joana da Silva Oliveira',
          button: {},
          width: 1920,
          variant: "screen"
        },
      };
