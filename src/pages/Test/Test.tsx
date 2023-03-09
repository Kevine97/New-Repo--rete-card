import './Test.scss';
import { useCustomSelector, useCustomDispatch } from '../../hooks/redux';
import { setAccessToken } from '../../redux/slices/Test';

const Test = () => {
    const { auth } = useCustomSelector((state) => state);
    const dispath = useCustomDispatch();

    console.log('auth => ', auth);
    const handleLogin = () => {
        dispath(setAccessToken('ty43876fgdsvhgerfuygrfv234e'));
    };

    return (
        <>
            <p className="text-3xl uppercase bg-green-500">Test</p>
            <button onClick={handleLogin}>Test Button</button>
            <h1>
                setAccessToken ={'>'} {auth.accessToken}
            </h1>
        </>
    );
};

export default Test;
