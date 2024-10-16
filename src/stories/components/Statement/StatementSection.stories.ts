import { Meta, StoryObj } from "@storybook/react";
import StatementSection from '@/app/@core/components/Statement/StatementSection';
import StatementSectionProps from '@/app/@core/props/statement/statement-section';

const meta = {
  title: "Components_TCF/Statement/StatementSection",
  component: StatementSection,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Dark", value: "#EEEEEE" }],
      default: "Dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    month: {
      control: "select",
      options: [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "novembro",
        "dezembro"
      ]
    }
  },
} satisfies Meta<StatementSectionProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    month: "março",
    items: [
      {
        transactionType: "deposit",
        date: "2024-01-01",
        amount: 36.6
      },
      {
        transactionType: "deposit",
        date: "2024-01-02",
        amount: 48.3
      },
      {
        transactionType: "deposit",
        date: "2024-01-03",
        amount: 150
      }
    ]
  },
};
