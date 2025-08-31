import { FC, useEffect, useState } from "react";

interface TypeEffectProps {
    words: string[]
    className?: string
}

export const TypeEffect: FC<TypeEffectProps> = ({ words, className }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const update = () => {
            setText(current =>
                isDeleting
                    ? currentWord.substring(0, current.length - 1)
                    : currentWord.substring(0, current.length + 1)
            );
            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setWordIndex((index) => (index + 1) % words.length);
            }
        };
        const timer = setTimeout(update, isDeleting ? 70 : 100);
        return () => clearTimeout(timer);
    }, [wordIndex, isDeleting, text]);

    return (
        <>
            <span className={className}>{text}</span>
            {text === words[wordIndex] ?
                <BlinkingCursor /> :
                <span className="font-inter text-normal">|</span>
            }
        </>
    )
}

export const BlinkingCursor: FC<{ className?: string }> = ({ className }) => {
    return (
        <>
            <span style={{
                animation: 'blink 1s steps(1, end) infinite'
            }} className={className ?? "font-inter text-normal"}>|</span><style>
                {`
                @keyframes blink {
                    0%, 100% { opacity: 1 }
                    50% { opacity: 0 }
                }
                `}
            </style>
        </>
    )
}

// export const StaticTypeEffect: FC<TypeEffectProps> = ({ words }) => {

// }
