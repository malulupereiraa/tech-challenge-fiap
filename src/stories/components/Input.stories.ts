import type { Meta, StoryObj } from '@storybook/react';
import Input from "../../app/@core/components/ui/input/Input";
import { formatCurrency } from '@/app/@core/utils/masks';

const onChangeInput = (event: any) => {
  return formatCurrency(event?.target?.value);
};

const meta = {
  title: "Components_TCF/Input/Input",
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    value: '',
    type: 'currency',  // Definindo os tipos possíveis de input
    width: '250px',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
let value = "R$ 0,00"

export const currency: Story = {
  args: {
    type: 'currency',
    value: value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => { onChangeInput(event) },
  },
};


