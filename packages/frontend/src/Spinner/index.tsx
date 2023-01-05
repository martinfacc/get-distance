import React from 'react'
import { Overlay, Spinner } from './styles.jsx'

interface SpinnerComponentProps {
  isOpen: boolean
}

const SpinnerComponent = (props: SpinnerComponentProps) => {
  const { isOpen } = props
  return (
    <>
      {isOpen && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
    </>
  )
}

export default SpinnerComponent
