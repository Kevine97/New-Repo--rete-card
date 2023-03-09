import FormRecoveryPassword from '../../Molecules/FormRecoveryPassword';
import ImgRecoveryPassword from '../../Molecules/ImgRecoveryPassword';
import './RecoveryPassword.scss';

const RecoveryPassword = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <FormRecoveryPassword />
            <ImgRecoveryPassword />
        </div>
    );
};

export default RecoveryPassword;
