import InputSignIn from '../../Molecules/FormSignIn/FormSignIn';
import ImgSignIn from '../../Molecules/ImgSignIn/ImgSignIn';
import './SignIn.scss';

const SignIn = () => {
    
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <InputSignIn />
            <ImgSignIn />
        </div>
    );
};

export default SignIn;
