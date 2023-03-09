import Logo from '../../../assets/Img/Logo.png';
import { MessageLogin } from '../../Atoms/Message';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/ButtonSolid/ButtonSolid';
import Img from '../../Atoms/Img/Img';
import './FormSignIn.scss';
import Checkbox from '../../Atoms/Texbox/Checkbox';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const InputSignIn = () => {
    const [password, setPassword] = useState<boolean>(false);

    const handleLogin = async (e:any) =>{
        e.preventDefault();
        console.log('Haciendo Loggin');
        
    }

    return (
        <div className="container-form">
            <Img
                classContainer="img-logo-form "
                classImage="object-cover"
                src={Logo}
                alt="Logo"
            />

            <div className="lg:w-10/12 w-full flex flex-col margin-auto">
                <h1 className="bg-[background: #1B2733] font-semibold text-[28px] mb-6">
                    {MessageLogin.LabelTitle.msg}
                </h1>
                <form className="flex flex-col gap-8 items-center" onSubmit={handleLogin}>
                    <div className="flex flex-col gap-8 w-full">
                        <Input
                            nameInput="email"
                            id="login_username_email"
                            label={MessageLogin.LabelEmail.msg}
                            typeIput="email"
                            iconLeft="Email"
                        />
                        <Input
                            nameInput="password"
                            id="login_password"
                            label={MessageLogin.LabelPassword.msg}
                            typeIput={password ? 'text' : 'password'}
                            iconLeft="Key"
                            iconRight="See"
                            onClick={() => setPassword(!password)}
                        />
                    </div>
                    <div className="container-button-form">
                        <Button
                            typeButton="button"
                            colorButton="Green"
                            size="lg"
                            handleClick={() =>
                                console.log('Hello World! Green')
                            }
                        >
                            {MessageLogin.btnSingUp.msg}
                        </Button>

                        <Button
                            typeButton="submit"
                            colorButton="Blue"
                            size="lg"
                        >
                            {MessageLogin.btnSingIn.msg}
                        </Button>
                    </div>
                    <div className="container-recovery-pass">
                        <Checkbox
                            id="rememberAccount"
                            nameTexbox={MessageLogin.LabelRememberAccount.msg}
                        />
                        <Link
                            to={'#'}
                            className="text-[#1E2935] text-[16px] font-normal underline"
                        >
                            {' '}
                            {MessageLogin.LabelRecoveryPass.msg}{' '}
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InputSignIn;
