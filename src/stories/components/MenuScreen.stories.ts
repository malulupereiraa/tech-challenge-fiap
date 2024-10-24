import  MenuProps  from "@/app/@core/props/menu";
import { StoryObj } from "@storybook/react";
import MenuScreenDocumentacao from "./MenuDocs/MenuScreenDocumentacao";

export default {
    title: "Components_TCF/Menu/Menu",
    component: MenuScreenDocumentacao,
    
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

export const Tab: Story =  {
    args: {
        variant: "tablet"
      },
    };
export const Scr: Story =  {
    args: {
        variant: "screen"
      },
    };