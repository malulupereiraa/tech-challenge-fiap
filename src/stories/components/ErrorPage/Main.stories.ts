import Custom404 from "@/app/not-found";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components_TCF/ErrorPage/ErrorPage",
  component: Custom404,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Light", value: "#FFFFFF" }],
      default: "Light",
    },
  },
  tags: ["autodocs"],
  //   argTypes: {
  //     vantagens: {
  //       description: 'Lista de vantagens oferecidas pelo banco',
  //       control: { type: 'object' },
  //     },
  //   },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultErrorPage: Story = {
};
