import { ChangeEvent, forwardRef } from 'react'
import Text from 'components/text'
import HStack from 'components/hStack'
import Box from 'components/box'
import CheckboxOnIcon from './CheckboxOnIcon'
import CheckboxOffIcon from './CheckboxOffIcon'
import style from './style.module.css'

interface CheckboxProps {
  id: string
  label: string
  checked: boolean
  disabled: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, checked, disabled, onChange, ...props }, ref) => {
    return (
      <Box
        width="max-content"
        aria-labelledby={id}
        role="checkbox"
        aria-checked={checked}
      >
        <HStack
          _as="label"
          htmlFor={id}
          spacing="12px"
          align="center"
          className={style.baseCheckbox}
        >
          <input
            id={id}
            type="checkbox"
            ref={ref}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            {...props}
          />
          {checked ? <CheckboxOnIcon /> : <CheckboxOffIcon />}
          {label && (
            <Text
              _as="label"
              htmlFor={id}
              align="center"
              variant="label"
              color="gray4"
              style={{ width: 'max-content' }}
            >
              {label}
            </Text>
          )}
        </HStack>
      </Box>
    )
  }
)

Checkbox.displayName = 'checkbox'

export default Checkbox
