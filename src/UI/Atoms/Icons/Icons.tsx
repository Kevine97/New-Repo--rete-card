import { IIcons } from '../../../interfaces/IIcons/IIcons';
import './Icons.scss';

const Icons = (props: IIcons) => {
    return (
        <div className={props.classContainer} onClick={props.onClick}>
            <img src={props.src} alt={props.alt} className={props.classIcon} />
        </div>
    );
};

export default Icons;
