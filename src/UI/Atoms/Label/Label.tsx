import { ILabel } from '../../../interfaces/ILabel/ILabel'
import './Label.scss'

const Label = (props: ILabel) => {
  return (
    <label htmlFor={props.htmlFor} className={props.labelClass}>
        {props.children}
    </label>
  )
}

export default Label