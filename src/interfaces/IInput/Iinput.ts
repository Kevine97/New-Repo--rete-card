export interface Iinput {
    id?: string;
    nameInput: string
    placeholder?: string;
    iconLeft?: 'Email' | 'Key' | 'See';
    iconRight?: 'Email' | 'Key' | 'See';
    label?: string;
    data_testid?: string;
    typeIput: 'text' | 'checkbox' | 'email' | 'password' | 'number';
    value?: string;
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
}
