import ImageLogin from '../../../assets/Img/SignIn.png';
import './ImgSignIn.scss';
import Img from '../../Atoms/Img';

const ImgSignIn = () => {
    return (
        <Img
            classContainer="hidden p-0 m-0 lg:block w-1/2"
            classImage="h-full w-[100%] object-cover bg-center"
            src={ImageLogin}
            alt="Img Sing In"
        />
    );
};

export default ImgSignIn;
