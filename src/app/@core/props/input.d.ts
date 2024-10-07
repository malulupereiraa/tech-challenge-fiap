interface CustomInputProps {
    value: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'currency' | 'text';  // Definindo os tipos possíveis de input
    width?: string | number | undefined;
}