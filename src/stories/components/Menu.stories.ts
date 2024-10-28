import AsideMenu from "@/app/@core/components/ui/menu/AsideMenu";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components_TCF/Menu/Menu",
  component: AsideMenu,

  tags: ["autodocs"],

  argTypes: {
    pathname: {
      control: "select",
      description: "Current pathname",
      options: ["/", "/transferencias", "/investimentos", "/outros"],
    },
  },
};

type Story = StoryObj<typeof AsideMenu>;

export const Default: Story = {};