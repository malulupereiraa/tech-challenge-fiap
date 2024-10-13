import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SelectProps } from "../../app/@core/props/select";
import SelectComponent from "../../app/@core/components/ui/select/Select";

interface Transacoes {
  label: string;
  value: string;
}

export default {
  title: "Components_TCF/Select/Select",
  component: SelectComponent,
  argTypes: {
    width: '',
    height: '',
    optionSelected: '',
    labelKey: '',
    valueKey: ''
  },
  args: {
    onchange: fn()
  },
};

type Story = StoryObj<SelectProps<Transacoes>>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    optionSelected: 'Select an option',
    labelKey: 'label',
    valueKey: 'value',
    value: '1',
    width: '200px',
    height: '40px',
  },
};
