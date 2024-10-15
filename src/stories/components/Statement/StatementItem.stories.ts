import { Meta, StoryObj } from "@storybook/react";
import StatementItem from "@/app/@core/components/Statement/StatementItem";
import StatementItemPros from '@/app/@core/props/statement/statement-item';

const meta = {
  title: "Components_TCF/Statement/StatementItem",
  component: StatementItem,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Dark", value: "#EEEEEE" }],
      default: "Dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    transactionType: {
      control: 'radio',
      options: ['deposit', 'transference']
    },
    date: {
      control: 'text'
    }
  },
} satisfies Meta<StatementItemPros>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    transactionType: 'deposit',
    amount: 36.6,
    date: '2024-09-06'
  },
};
