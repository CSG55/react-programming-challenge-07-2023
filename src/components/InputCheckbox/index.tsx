import classNames from "classnames"
import {useRef} from "react"
import { InputCheckboxComponent } from "./types"



export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

// Bug #1 - The input component was never being rendered and therefore was not selectable.
// Since the intention is to style the input component, we can simply move the classname to the <input/>
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <input
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}

      />

    </div>
  )
}
