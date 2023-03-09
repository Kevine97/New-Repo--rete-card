export interface IButtonSolid {
    typeButton: 'button' | 'submit';
    colorButton: 'Blue' | 'Green' | 'Outlined';
    size?: 'lg';
    handleClick?: (e: any) => void;
    children: React.ReactNode;
}
