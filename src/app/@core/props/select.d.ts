interface SelectProps<T> {
    options: T[];
    optinSelected: string,
    labelKey: keyof T; // Define a chave que será usada para exibir o label
    valueKey: keyof T; // Define a chave que será usada como valor
    onChange: (selectedValue: T[keyof T]) => void;
    value: T[keyof T]; // Valor atualmente selecionado
    width?: string;
    height?: string;
}