import Img from '../../Atoms/Img';
import ImageSingUp from '../../../assets/Img/SignUp.png';
import './ImgSignUp.scss'

const ImgSignUp = () => {
    return (
        <Img
            classContainer="hidden p-0 m-0 lg:block w-1/2"
            classImage="h-full w-[100%] object-cover bg-center"
            src={ImageSingUp}
            alt="Img Sing Up"
        />
    );
};

export default ImgSignUp;
