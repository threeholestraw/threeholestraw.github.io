import React from "react"
import { cn } from "@/utils/cn"

interface WorkLineProps {
    companyLogo: string
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
    return (
        <div className="w-full max-w-7xl mx-auto *:w-full *:py-4 *:px-6">
            <div className="flex flex-row gap-8 bg-gray-900 rounded-lg">
                <a id="Logo" href={href}>
                    <img
                        src={companyLogo}
                        alt={companyLogoAlt}
                        className={cn("block h-auto w-auto max-h-28 outline-[rgba(255,255,255,0.1)] hover:outline-[rgba(255,255,255,0.3)] outline-1", roundedLogo ? "rounded-full" : "")}
                    />
                </a>
                <div className="*:w-full w-full *:text-end">
                    <h2 className="text-3xl">
                        <span className="font-semibold">{jobTitle}</span> <span className="font-light" >{" - "} {companyName}</span>
                    </h2>
                    <h3 className="text-xl">
                        {location}{" - "} {startDate} {"to "} {endDate}
                    </h3>
                </div>
            </div>
            <div id="BulletPoints" className="">
                {children ?? null}
            </div>
        </div>
    )
}
