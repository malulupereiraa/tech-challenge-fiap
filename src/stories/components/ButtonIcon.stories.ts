import { StoryObj} from '@storybook/react';
import MenuButton from '@/app/@core/components/ui/menu/MenuButton';
import { ButtonIconProps } from '@/app/@core/props/button-icon';
import { fn } from "@storybook/test";


export default {
    title: "Components_TCF/Header/MenuButton",
    component: MenuButton,
    parameters: {
        layout: "centered",
      },
      tags: ["autodocs"],
      argTypes: {
      },
      args: { onClick: fn() },
    };

    type Story = StoryObj<ButtonIconProps>;

    export const ButtonIcon: Story = {
      args: {
        icon: true,
      },
    };
