import { WorkLine } from "./WorkLine"
import { DynamicGlobalXLogo, DynamicPalonaAILogo } from "./ResponsiveLogo"

import Nautical from '/nautical-logo.webp'
import { GenericLogo } from "./GenericLogo"

export const WorkList = () => {
    return (
        <>
            <WorkLine
                companyName='Nautical Commerce'
                companyLogo={Nautical}
                roundedLogo
                companyLogoAlt='nautical commerce logo'
                jobTitle='Fullstack Developer'
                startDate='May 2025'
                endDate='August 2025'
                location='Toronto, ON'
                href='https://www.nauticalcommerce.com'
            >
                <ul className="list-disc leading-7">
                    <li>Developed and improved an out-of-the-box web-hosted storefront solution, enabling clients to customize and deploy online marketplaces instantly.</li>
                    <li>Migrated storefront framework to Remix from NextJS, improving code modularity and long-term maintainability while enabling more efficient marketplace customizations with cleaner boundaries and shared layouts.</li>
                    <li>Spearheaded development of in-house client-facing data API service and data visualization page for marketplace owners. Architected BigQuery cloud-based data pipeline to aggregate marketplace customer data and serve the API service.</li>
                </ul>
            </WorkLine><WorkLine
                companyName='Palona AI'
                companyLogoComponent={<DynamicPalonaAILogo className="max-h-full max-w-full" />}
                companyLogoAlt='Palona AI logo'
                jobTitle='Frontend Developer'
                startDate='October 2024'
                endDate='January 2025'
                location='Menlo Park, CA'
                href='https://www.palona.ai'
            >
                <ul className="list-disc leading-7">
                    <li>Designed, authored, and solely maintained a customizable React component connecting clients' customers to AI customer service agents for 2 e-commerce companies.</li>
                    <li>Established automatic GitHub Actions CI/CD pipeline alongside manual publishing protocols to adapt and create features, satiating client feedback.</li>
                    <li>Architected multiple template API proxies for clients in multiple web frameworks, including in NextJS, ExpressJS, and AWS Lambda, limiting client integration time and garnering positive feedback. Proxy templates included rate limiting, error handling, CORS, and IAM Policy implementation.</li>
                </ul>
            </WorkLine>
            <WorkLine
                companyName='Global X Canada'
                companyLogoComponent={<DynamicGlobalXLogo className="max-h-full max-w-full" />}
                companyLogoAlt='Global X Logo'
                jobTitle='Quantitative Analyst'
                startDate='January 2024'
                endDate='April 2024'
                location='Toronto, ON'
                href='https://www.globalx.ca'
            >
                <ul className="list-disc leading-7">
                    <li>Constructed a historical ETF performance graphing tool in Python to visualize tracking error over time for index tracking ETFs to help evaluate physical index funds.</li>
                    <li>Backtested historical portfolio ex-post active risk and realized return difference; conducted statistical analysis to test the normality of the metric, helping determine its efficacy in monitoring Global X’s repertoire of index tracking ETFs.</li>
                    <li>Spearheaded a comprehensive investigation of the Canadian Covered Call ETF ecosystem through automating competitor data collection and analyzing competitor call writing strategies; consolidated changes in holdings with matching historical trades.</li>
                    <li>Constructed an automatic data scraping pipeline collecting daily holdings data from competitor sites in a Microsoft Azure SQL database, collecting from over 40 funds from various competitor ETF vendors.</li>
                </ul>
            </WorkLine>
            <WorkLine
                companyName='Independent'
                companyLogoComponent={<GenericLogo className="h-full w-full" />}
                companyLogoAlt='Generic Avatar'
                jobTitle='Olympiad Math Course Director / Instructor'
                startDate='July 2020'
                endDate='Present'
                location='Toronto, ON'
                href='https://sites.google.com/view/ayj-mathematics-competition/about-us'
            >
                <ul className="list-disc leading-7">
                    <li>Designed, authored, and instructed International level Olympiad Math courses for 50+ students across 4 years; 80% of students achieved Honour Roll level performance in their respective contests (top 5%).</li>
                    <li>Directed and Authored intramural contests for 2 high schools in the GTA; contests increased math society participation rate by up to 480% within target schools since contest founding date.</li>
                </ul>
                <a
                    href="https://sites.google.com/view/ayj-mathematics-competition/about-us?authuser=0"
                    className="font-bold hover:text-lightpastelblue"
                >
                    Link to my Past Contests
                </a>
            </WorkLine>
        </>
    )
}
