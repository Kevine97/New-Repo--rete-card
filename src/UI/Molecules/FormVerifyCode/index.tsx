import { Link } from 'react-router-dom';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/ButtonSolid/ButtonSolid';
import Img from '../../Atoms/Img/Img';
import Logo from '../../../assets/Img/Logo.png';
import './FormVerifyCode.scss';
import { MessageCode} from '../../Atoms/Message';

const FormVerifyCode = () => {
    return (
        <div className="container-form">
            <Img
                classContainer="img-logo-form "
                classImage="object-cover"
                src={Logo}
                alt="Logo"
            />

            <div className="container-children">
                <Link
                    className="text-[#7E7E7E] text-[16px] font-normal"
                    to={'#'}
                >
                    {MessageCode.LabelGoBack.msg}
                </Link>
                <h1 className="bg-[background: #1B2733] font-semibold text-[29px]">
                    {MessageCode.LabelTitle.msg}
                </h1>
                <form className="flex flex-col gap-8">
                    <Input
                        nameInput="code"
                        id="verify_code"
                        label={MessageCode.LabelInput.msg}
                        typeIput="text"
                        data_testid='verify_code'
                    />
                    <Button colorButton="Blue" size="lg" typeButton="submit">
                        {MessageCode.btnLabel.msg}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default FormVerifyCode;
