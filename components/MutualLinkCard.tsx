import Link from "next/link"
import MutualLinkData from "../src/data/MutualLinkData"
import RoundedCornerBox from "./RoundedCornerBox"
import RoundedCornerList from "./RoundedCornerList"
import IconParent from "./IconParent"
import OpenInBrowserIcon from "../public/icon/open_in_browser.svg"

/** LinkCard へ渡すデータ */
type MutualLinkCardProps = {
    /** リンクのデータの配列 */
    mutuallinkList:  MutualLinkData[]
}

/** リンク集を表示する部分 */
export default function MutualLinkCard({ mutuallinkList }: MutualLinkCardProps) {
    return (
        <RoundedCornerBox rounded="large">
            <div className="flex flex-col p-3 space-y-2">

                <h2 className="text-content-primary-light dark:text-content-primary-dark text-2xl">
                    相互リンク
                </h2>

                <RoundedCornerList
                    list={mutuallinkList}
                    content={(className, mutuallinkData) => (
                        <div
                            className={`${className} bg-background-light dark:bg-background-dark`}
                            key={mutuallinkData.href}
                        >
                            <Link
                                className="no-underline text-inherit"
                                href={mutuallinkData.href}
                            >
                                <div className="flex flex-row p-3 items-center">
                                    <div className="flex flex-col grow">
                                        <p className="text-content-text-light dark:text-content-text-dark text-base">{mutuallinkData.name}</p>
                                        <p className="text-content-text-light dark:text-content-text-dark text-sm">{mutuallinkData.description}</p>
                                    </div>
                                    <IconParent>
                                        <OpenInBrowserIcon />
                                    </IconParent>
                                </div>
                            </Link>
                        </div>
                    )}
                />
            </div>
        </RoundedCornerBox>
    )
}