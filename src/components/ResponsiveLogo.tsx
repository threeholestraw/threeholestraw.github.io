import React from 'react'

interface ResponsiveLogoProps {
    className?: string
    alt?: string
}

export const DynamicGlobalXLogo: React.FC<ResponsiveLogoProps> = ({
    className = '',
    alt = 'Global X Logo'
}) => {
    return (
        <div className={className}>
            {/* Geometric logo for small screens */}
            <img
                src="/globalx.svg"
                alt={alt}
                className="block lg:hidden h-[88px] w-auto"
            />
            {/* Text logo for large screens */}
            <img
                src="/globalx_text_only.svg"
                alt={alt}
                className="hidden lg:block h-[88px] w-auto"
            />
        </div>
    )
}

export const DynamicPalonaAILogo: React.FC<ResponsiveLogoProps> = ({
    className = "",
    alt = "Palona AI Logo"
}) => {
    return (
        <div className={className}>
            {/* Geometric logo for small screens */}
            <img
                src="/palona-ai-mini.svg"
                alt={alt}
                className="block lg:hidden h-[88px] w-auto"
            />
            {/* Text logo for large screens */}
            <img
                src="/palona-ai.svg"
                alt={alt}
                className="hidden lg:block h-[88px] w-auto"
            />
        </div>
    )
}
