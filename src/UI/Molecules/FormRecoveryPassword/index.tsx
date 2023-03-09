import { Link } from 'react-router-dom';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/ButtonSolid/ButtonSolid';
import Img from '../../Atoms/Img/Img';
import Logo from '../../../assets/Img/Logo.png';
import './FormRecoveryPassword.scss';
import { MessageRecoveryPassword } from '../../Atoms/Message';
import { useState } from 'react';
import ImgModal from '../../../assets/Img/IconEmail.png';
import Modal from '../../Atoms/Modal';

const FormRecoveryPassword = () => {
    const [passwordRecovery, setpasswordRecovery] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);

    const hanldeSubmit = (e: any): void => {
        e.preventDefault();
        if ([passwordRecovery].includes('')) {
            return;
        }
        setModal(true);
    };

    return (
        <div className="container-form">
            {modal && (
                <Modal
                    title={MessageRecoveryPassword.LabelModal.msg}
                    src={ImgModal}
                    alt="Img modal"
                    handleClick={() => setModal(false)}
                />
            )}

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
                    {MessageRecoveryPassword.LabelGoBack.msg}
                </Link>
                <h1 className="bg-[background: #1B2733] font-semibold text-[29px]">
                    {MessageRecoveryPassword.LabelTitle.msg}
                </h1>
                <form onSubmit={hanldeSubmit} className="flex flex-col gap-8">
                    <Input
                        nameInput="username"
                        id="username_Email"
                        label={MessageRecoveryPassword.LabelInput.msg}
                        typeIput="text"
                        iconLeft="Email"
                        onChange={(e) => setpasswordRecovery(e.target.value)}
                        data_testid='username'
                    />
                    <Button colorButton="Blue" size="lg" typeButton="submit">
                        {MessageRecoveryPassword.btnLabel.msg}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default FormRecoveryPassword;
