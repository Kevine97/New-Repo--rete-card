import { useState } from 'react';
import Logo from '../../../assets/Img/Logo.png';
import { MessageSingUp } from '../../Atoms/Message';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/ButtonSolid/ButtonSolid';
import { Link } from 'react-router-dom';
import Img from '../../Atoms/Img/Img';
import './FormSignUp.scss';
import Label from '../../Atoms/Label/Label';

const FormSignUp = () => {
    const [password, setPassword] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
    return (
        <div className="container-form">
            <Img
                classContainer="img-logo-form "
                classImage="object-cover"
                src={Logo}
                alt="Logo"
            />
            <div className="xl:w-2/3 lg:w-10/12 w-full flex flex-col margin-auto lg:mt-32">
                <h1 className="bg-[background: #1B2733] font-semibold text-[29px] mb-6">
                    {MessageSingUp.LabelTitle.msg}
                </h1>
                <form action="" className="flex flex-col gap-4 items-center">
                    <div className="w-full flex flex-col gap-4">
                        <Input
                            nameInput="firstname"
                            id="singUp_FirstName"
                            label={MessageSingUp.FirstName.msg}
                            typeIput="text"
                        />
                        <Input
                            nameInput="lastname"
                            id="singUp_LastName"
                            label={MessageSingUp.LastName.msg}
                            typeIput="text"
                        />
                        <Input
                            nameInput="email"
                            id="singUp_Email"
                            label={MessageSingUp.Emial.msg}
                            typeIput="email"
                        />
                        <Input
                            nameInput="password"
                            id="singUp_Password"
                            label={MessageSingUp.Password.msg}
                            typeIput={`${password ? 'text' : 'password'}`}
                            iconRight="See"
                            onClick={() => setPassword(!password)}
                        />
                        <Input
                            nameInput="confirm_password"
                            id="singUp_ConfirmPassword"
                            label={MessageSingUp.ConfirmPassword.msg}
                            typeIput={`${
                                confirmPassword ? 'text' : 'password'
                            }`}
                            iconRight="See"
                            onClick={() => setConfirmPassword(!confirmPassword)}
                        />
                    </div>
                    <div className="w-full">
                        <Button
                            typeButton="button"
                            colorButton="Green"
                            size="lg"
                        >
                            {MessageSingUp.btnSingUp.msg}
                        </Button>
                    </div>

                    <div className="w-full flex justify-center gap-3">
                        <Label labelClass='text-[#6B6C6F] text-[16px] font-normal'> {MessageSingUp.Account.msg}</Label>
                        <Link className='text-[#1E2935] text-[16px] font-semibold underline' to={'#'}> Sing In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormSignUp;
