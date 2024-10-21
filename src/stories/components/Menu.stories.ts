import Menu from "@/app/@core/components/ui/menu/Menu";
import  MenuProps  from "@/app/@core/props/menu";
import { StoryObj } from "@storybook/react";

export default {
    title: "Components_TCF/Menu/Menu",
    component: Menu,
    
    tags: ["autodocs"],

    argTypes: {
      variant: {
        control: "radio",
        description: "Header format",
        options: ["screen", "tablet", "mobile"],
      },
    },
  }

  type Story = StoryObj<MenuProps>;

export const Mobile: Story =  {
    args: {
        variant: "mobile"
      },
    };
export const Tablet: Story =  {
    args: {
        variant: "tablet"
      },
    };
export const Screen: Story =  {
    args: {
        variant: "screen"
      },
    };