import FormSignUp from '../../Molecules/FormSignUp/FormSignUp';
import ImgSignUp from '../../Molecules/ImgSignUp/ImgSignUp';
import './SignUp.scss'

const SingUp = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <FormSignUp />
            <ImgSignUp />
        </div>
    );
};

export default SingUp;
