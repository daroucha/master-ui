import prefix from '@/utils/prefix'
import {
  IRImage,
  IRImageArea,
  IRInput,
  StyledImageRadio,
} from './styled-image-radio'
import { useId } from 'react'
import Image from '../BaseImage/base-image'

interface PropsImageRadio {
  alt: string
  checked?: boolean
  disabled?: boolean
  name: string
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { id: string; value: string },
  ) => void
  src: string
  value: string
}

function ImageRadio({
  alt,
  checked,
  disabled,
  name,
  onChange,
  src,
  value,
}: PropsImageRadio) {
  const imageRadioId = prefix + useId()

  return (
    <StyledImageRadio $disabled={disabled}>
      <IRInput
        checked={checked}
        disabled={disabled}
        id={imageRadioId}
        name={name}
        onChange={(event) => {
          if (!disabled && onChange) {
            onChange(event, { id: imageRadioId, value: event.target.value })
          }
        }}
        type="radio"
        value={value}
      />

      <IRImage htmlFor={imageRadioId}>
        <IRImageArea>
          <Image src={src} alt={alt} />
        </IRImageArea>
      </IRImage>
    </StyledImageRadio>
  )
}

export type { PropsImageRadio }
export default ImageRadio
