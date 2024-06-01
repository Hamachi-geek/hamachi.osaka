import { ReactNode, useMemo } from "react"
import PhoneIcon from "../public/icon/phone.svg"
import TabletIcon from "../public/icon/tablet.svg"
import ComputerIcon from "../public/icon/computer.svg"
import AudioIcon from "../public/icon/audio.svg"
import POSIcon from "../public/icon/pos.svg"
import IconParent from "../IconParent"

/** カテゴリとアイコンの対応表の型 */
type IconDictionary = {
    /** カテゴリ名 */
    categoryName: string
    /** アイコン */
    iconElement: ReactNode
}

/** カテゴリ名に対応したアイコン一覧 */
const CATEGORY_NAME_ICON_DICTIONARY: IconDictionary[] = [
    { categoryName: "phone", iconElement: <PhoneIcon /> },
    { categoryName: "tablet", iconElement: <TabletIcon /> },
    { categoryName: "Computer", iconElement: <ComputerIcon /> },
    { categoryName: "audio", iconElement: <AudioIcon /> },
    { categoryName: "pos", iconElement: <POSIcon /> }
]

/** CategoryNameIconDictionary へ渡すデータ */
type CategoryNameIconDictionaryProps = {
    /** カテゴリ名 */
    categoryName: string
}

/** カテゴリ名に対応したアイコンを表示するやつ */
export default function CategoryNameIconDictionary({ categoryName }: CategoryNameIconDictionaryProps) {

    // アイコン
    const iconElement = useMemo(
        () => CATEGORY_NAME_ICON_DICTIONARY.find((entry) => entry.categoryName === categoryName)?.iconElement,
        [categoryName]
    )

    return (
        <>
            {
                iconElement && <IconParent>
                    {iconElement}
                </IconParent>
            }
        </>
    )
}