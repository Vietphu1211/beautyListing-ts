import { Button } from '@/components/ui/button'
import React from 'react'
import { IconType } from 'react-icons'

interface CustomButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
  variant?: "outline" | "default" | "destructive"|"secondary"|"ghost" | "link"
}

const CustomButton:React.FC<CustomButtonProps> = ({
    children,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
    variant
}) => {
  return (
    <Button
    variant={variant}
    disabled={disabled}
    onClick={onClick}
    className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white' : 'bg-primary'}
        ${outline ? 'border-black' : 'bg-primary'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `} 
    >
    {Icon && (
      <Icon 
        size={24}
        className="absolute left-4 top-3"
      />
    )}
    {children}
    </Button>
  )
}

export default CustomButton