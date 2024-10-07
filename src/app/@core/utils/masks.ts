export const formatCurrency = (value: string) => {
    const numberValue = parseFloat(value.replace(/[^\d]/g, '')).toString();
    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(parseFloat(numberValue) / 100);
    return formattedValue;
};