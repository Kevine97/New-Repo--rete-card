import { IModal } from '../../../interfaces/IModal/IModal';
import Close from '../../../assets/Img/Cloes.png'
import './Modal.scss';

const Modal = (props: IModal) => {
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center z-10">
            <div className="bg-white w-[60%] h-[30%] lg:w-[600px] lg:h-[300px] flex flex-col justify-center items-center gap-8 relative shadow-md">
                <img onClick={props.handleClick} src={Close} className='absolute right-5 top-5 font-poppins text-[#6B6C6F] text-2xl cursor-pointer w-5'/>
                <img src={props.src} alt={props.alt} className=' w-24 lg:max-w-full'/>
                <h1 className="text-[#6B6C6F] text-[16px] md:text-[21px] font-normal whitespace-pre-wrap text-center">
                    {props.title}
                </h1>   
            </div>
        </div>
    );
};

export default Modal;
