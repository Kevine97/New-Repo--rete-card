import { IButtonSolid as ButtonProps } from '../../../interfaces/IButton/IButtonSolid';
import './ButtonSolid.scss'

const Button = ({ colorButton, typeButton, size, children, handleClick }: ButtonProps) => {
    const getColorButton = (): string => {
        let color;
        switch (colorButton) {
            case 'Blue':
                color = 'bg-[#4A90E2]';
                break;
            case 'Green':
                color = 'bg-[#91D4B9]';
                break;
            case 'Outlined':
                color = 'bg-[#FCFCFC]';
                break;
        }
        return color;
    };

    return (
        <button
            type={typeButton}
            className={` ${getColorButton()} all-btn ${size ? 'w-full': ''}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;