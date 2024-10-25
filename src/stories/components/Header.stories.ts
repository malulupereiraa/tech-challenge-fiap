import Header from "@/app/@core/components/ui/header/Header";
import { HeaderProps } from "../Header";
import { Meta, StoryObj } from "@storybook/react";


export default {
  title: "Components_TCF/Header/Header",
  component: Header,

  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],

} as Meta;

type Story = StoryObj<HeaderProps>;

export const CurrentHeader: Story =  {
    args: {
        name: 'Joana da Silva Oliveira',
      },
    };

   
