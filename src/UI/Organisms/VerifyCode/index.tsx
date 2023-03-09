import FormVerifyCode from '../../Molecules/FormVerifyCode'
import ImgVerifyCode from '../../Molecules/ImgVerifyCode'
import './VerifyCode.scss'

const VerifyCode = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <FormVerifyCode/>
      <ImgVerifyCode/>
    </div>
  )
}

export default VerifyCode