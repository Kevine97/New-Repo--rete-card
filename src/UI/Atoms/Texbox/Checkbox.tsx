import { ICheckbox } from '../../../interfaces/ICheckbox/ICheckbox';

const Checkbox = ({ nameTexbox, id }: ICheckbox) => {
    return (
        <div className='flex gap-4 items-center'>
            <input id={id} type="checkbox" className='w-4 h-4 text-blue-600 bg-[#D5E5FF] border-[#4A90E2] rounded focus:bg-[#D5E5FF'/>
            <label className='text-[#6B6C6F]  text-[16px] font-normal' htmlFor={id}>{nameTexbox}</label>
        </div>
    );
};

export default Checkbox;
