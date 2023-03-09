import { Iinput as InputProps } from '../../../interfaces/IInput/Iinput';
import Email from '../../../assets/Img/email.png';
import Key from '../../../assets/Img/Key.png';
import See from '../../../assets/Img/See.png';
import Label from '../Label';
import Icons from '../Icons';
import './Input.scss';

const Input = (props: InputProps) => {

    const getIcon = (
        icon: string | undefined,
        icons: { [key: string]: string }
    ): string | undefined => {
        if (icon === undefined) return;
        return icons[icon];
    };

    const icons = {
        Email,
        Key,
        See,
    };

    const icon_Left = (): string | undefined => {
        return getIcon(props.iconLeft, icons);
    };

    const icon_Right = (): string | undefined => {
        return getIcon(props.iconRight, icons);
    };

    return (
        <div>
            {props.label && (
                <Label htmlFor={props.id} labelClass="label-input">
                    {props.label}{' '}
                </Label>
            )}

            <div className="input-container">
                {props.iconLeft && (
                    <Icons
                        classContainer="icon-left"
                        src={icon_Left()}
                        alt={props.iconLeft}
                        classIcon="mx-4"
                    />
                )}

                <input
                    id={props.id}
                    placeholder={props.placeholder}
                    type={props.typeIput}
                    name={props.nameInput}
                    className={`input ${props.iconLeft ? 'pl-[5rem]' : 'pl-8'}`}
                    autoComplete="off"
                    onChange={props.onChange}
                    data-testid = {props.data_testid}
                    value={props.value}
                />
                {props.iconRight && (
                    <Icons
                        classContainer="icon-right hover:cursor-pointer"
                        src={icon_Right()}
                        alt={props.iconRight}
                        classIcon="mx-4"
                        onClick={props.onClick}
                    />
                )}
            </div>
        </div>
    );
};

export default Input;
