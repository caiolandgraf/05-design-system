import { User } from 'phosphor-react'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  delayMs?: number,
  src: string,
  alt?: string
}

export const Avatar = forwardRef<ElementRef<typeof AvatarImage>, AvatarProps>(
  ({ delayMs = 600, ...props }, ref) => {
    return (
      <AvatarContainer>
        <AvatarImage ref={ref} {...props} />
        
        <AvatarFallback delayMs={delayMs}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    )
  }
)

Avatar.displayName = "Avatar"

