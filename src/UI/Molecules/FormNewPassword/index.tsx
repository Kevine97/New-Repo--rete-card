import Input from '../../Atoms/Input';
import Button from '../../Atoms/ButtonSolid/ButtonSolid';
import Img from '../../Atoms/Img/Img';
import Logo from '../../../assets/Img/Logo.png';
import './FormNewPassword.scss';
import { MessageSetPassword } from '../../Atoms/Message';
import { useState } from 'react';
import ImgModal from '../../../assets/Img/Shape.png';
import Modal from '../../Atoms/Modal';

const FormNewPassword = () => {
    const [newPasswprd, setNewPassword] = useState<Object>({
        password: '',
        confirmPassword: '',
    });
    const [modal, setModal] = useState<boolean>(false);
    const [password, setPassword] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

    const hanldeSubmit = (e: any): void => {
        e.preventDefault();

        if (Object.values(newPasswprd).includes('')) {
            return;
        }
        setModal(true);
    };

    const handleInput = (e: any): void => {
        setNewPassword({
            ...newPasswprd,
            [e.target.name]: e.target.value,
        });
    };
    console.log('TEST');
    
    return (
        <div className="container-form">
            {modal && (
                <Modal
                    title={MessageSetPassword.LabelModal.msg}
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
                <h1 className="bg-[background: #1B2733] font-semibold text-[29px]">
                    {MessageSetPassword.LabelTitle.msg}
                </h1>
                <form onSubmit={hanldeSubmit} className="flex flex-col gap-8">
                    <Input
                        nameInput="password"
                        id="password"
                        label={MessageSetPassword.LabelInputPass.msg}
                        placeholder={MessageSetPassword.Placeholder.msg}
                        typeIput={`${password ? 'text' : 'password'}`}
                        iconLeft="Key"
                        iconRight="See"
                        onChange={handleInput}
                        onClick={() => setPassword(!password)}
                        data_testid='password'
                    />
                    <Input
                        nameInput="confirmPassword"
                        id="confirm_Password"
                        label={MessageSetPassword.LabelInputConfirmPass.msg}
                        placeholder={MessageSetPassword.Placeholder.msg}
                        typeIput={`${confirmPassword ? 'text' : 'password'}`}
                        iconLeft="Key"
                        iconRight="See"
                        onChange={handleInput}
                        onClick={() => setConfirmPassword(!confirmPassword)}
                        data_testid='confirmPassword'
                    />

                    <Button colorButton="Blue" size="lg" typeButton="submit">
                        {MessageSetPassword.btnLabel.msg}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default FormNewPassword;
