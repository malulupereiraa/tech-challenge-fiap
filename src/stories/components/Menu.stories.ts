import AsideMenu from "@/app/@core/components/ui/menu/AsideMenu";
import Menu from "@/app/@core/components/ui/menu/Menu";
import  MenuProps  from "@/app/@core/props/menu";
import { StoryObj } from "@storybook/react";

export default {
    title: "Components_TCF/Menu/Menu",
    component: AsideMenu,
    
    tags: ["autodocs"],

    argTypes: {
      pathname:{
        control:"select",
        description: "Current pathname",
        options: ["/", "/transferencias","/investimentos", "/outros-serviços"]
      },
    },
  }

  type Story = StoryObj<MenuProps>;

export const Default: Story =  {}
    