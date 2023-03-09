import './Button.scss';
import { IButtonProps } from '../../../interfaces/IButton/IButton';

const Button = (props: IButtonProps) => {
    return (
        <>
            <button className={props.buttonClass} id={props.buttonId}>
                {props.iconLeft && props.iconLeft}
                <div className="button-content">{props.buttonContent}</div>
            </button>
        </>
    );
};

export default Button;
