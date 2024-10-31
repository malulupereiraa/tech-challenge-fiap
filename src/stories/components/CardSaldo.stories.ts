// CardSaldo.stories.tsx

import React from 'react';
import { StoryObj } from "@storybook/react";
import CardSaldoComponent from '@/app/@core/components/ui/CardSaldo/CardSaldo';
import { CardSaldoProps } from '@/app/@core/props/cardSaldo';

export default {
    title: 'Components_TCF/CardSaldo',
    component: CardSaldoComponent,
    argTypes: {
        name: {
            control: 'text',
            description: 'Nome do usuário',
            defaultValue: 'Usuário',
        },
        balance: {
            control: 'number',
            description: 'Saldo do usuário',
            defaultValue: 1000,
        },
        showBalance: {
            control: 'boolean',
            description: 'Exibir saldo',
            defaultValue: true,
        },
    },
};

type Story = StoryObj<CardSaldoProps>;

export const Base: Story = {
    args: {
        name: 'João',
        balance: 2500,
        showBalance: false,
    },
};

