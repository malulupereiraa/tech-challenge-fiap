import { Meta, StoryObj } from "@storybook/react";
import Statement from "@/app/@core/components/Statement";
import StatementProps from '@/app/@core/props/statement/statement';

const meta = {
  title: "Components_TCF/Statement/Statement",
  component: Statement,
  parameters: {
    // layout: "centered",
    backgrounds: {
      values: [{ name: "Dark", value: "#EEEEEE" }],
      default: "Dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<StatementProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    transactions: [
      {
        transactionType: "deposit",
        date: "2024-01-03",
        amount: 36.6
      },
      {
        transactionType: "deposit",
        date: "2024-01-12",
        amount: -12.6
      },
      {
        transactionType: "transference",
        date: "2024-03-03",
        amount: 42.9
      }
    ]
  }
};
