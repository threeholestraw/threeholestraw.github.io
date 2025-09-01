import React, { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { motion } from "motion/react"
import { cn } from "@/utils/cn"

interface WorkLineProps {
    companyLogo?: string
    companyLogoComponent?: React.ReactNode
    companyLogoAlt: string
    jobTitle: string
    companyName: string
    startDate: string
    endDate: string
    location: string
    href: string
    roundedLogo?: boolean
}

export const WorkLine: React.FC<React.PropsWithChildren<WorkLineProps>> = ({
    companyLogo,
    companyLogoComponent,
    companyLogoAlt,
    jobTitle,
    companyName,
    startDate,
    endDate,
    location,
    href,
    roundedLogo = false,
    children
}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const handleToggle = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-row gap-8 bg-gray-900 rounded-lg py-4 px-6" onClick={handleToggle} style={{ cursor: "pointer" }}>
                <a href={href} target="_blank" onClick={(e) => e.stopPropagation()} className="h-24 p-1">
                    {companyLogoComponent ? (
                        <div className={cn("block h-full w-full object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]", roundedLogo ? "rounded-full" : "")}>
                            {companyLogoComponent}
                        </div>
                    ) : (
                        <img
                            src={companyLogo}
                            alt={companyLogoAlt}
                            className={cn("block max-h-full drop-shadow-[0_0_4px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]", roundedLogo ? "rounded-full" : "")}
                        />
                    )}
                </a>
                <div className="w-full *:text-end">
                    <h2 className="text-2xl">
                        <span className="font-semibold">{jobTitle}</span> <span className="font-light" >{" - "} {companyName}</span>
                    </h2>
                    <h3 className="text-xl">
                        {location}{" - "} {startDate} {"to "} {endDate}
                    </h3>
                    {children ? <div className="mt-2">
                        <motion.button
                            onClick={handleToggle}
                            className="float-right"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.1, ease: "easeOut" }}
                            >
                                <ChevronDownIcon className="w-6 h-6 hover:stroke-2" />
                            </motion.div>
                        </motion.button>
                    </div> : null}
                </div>
            </div>
            <motion.div
                id="BulletPoints"
                className={cn(
                    "overflow-hidden outline-1 outline-white -outline-offset-1 rounded-lg mt-2 backdrop-blur-md",
                    isExpanded ? "py-4 pr-6 pl-12" : "*:opacity-0",
                )}
                initial={false}
                animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeOut",
                    opacity: { duration: 0.2 }
                }}
            >
                {children ?? null}
            </motion.div>
        </div>
    )
}
