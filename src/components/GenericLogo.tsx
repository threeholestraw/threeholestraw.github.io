import type { FC } from "react"

interface GenericLogoProps {
    className?: string
    alt?: string
}

export const GenericLogo: FC<GenericLogoProps> = ({ className = "", alt = "generic avatar" }) => {
    return (
        <img
            src="/genericavatar.png"
            alt={alt}
            className={className}
        />
    )
}