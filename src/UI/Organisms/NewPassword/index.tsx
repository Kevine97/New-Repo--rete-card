import FormNewPassword from '../../Molecules/FormNewPassword'
import ImgNewPassword from '../../Molecules/ImgNewPassword'
import './NewPassword.scss'

const NewPassword = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
        <FormNewPassword/>
        <ImgNewPassword/>
    </div>
  )
}

export default NewPassword