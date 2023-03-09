import './Img.scss';
import { IImage } from '../../../interfaces/IImage/IImage';

const Img = (props: IImage) => {
    return (
        <div className={props.classContainer}>
            <img src={props.src} alt={props.alt} className={props.classImage} />
        </div>
    );
};

export default Img;
