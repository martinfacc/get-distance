import React from 'react'
import Spinner from './index'

interface SpinnerContextProps {
  children: React.ReactNode
}

interface SpinnerContextType {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface UseSpinnerType {
  isOpen: boolean
  open: () => void
  close: () => void
}

const SpinnerContext = React.createContext({} as SpinnerContextType)

export const SpinnerContextProvider = (props: SpinnerContextProps) => {
  const { children } = props
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <SpinnerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      <Spinner isOpen={isOpen} />
    </SpinnerContext.Provider>
  )
}

export const useSpinner = (): UseSpinnerType => {
  const { isOpen, setIsOpen } = React.useContext(SpinnerContext)

  const open = React.useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const close = React.useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return { isOpen, open, close }
}

export default SpinnerContext
