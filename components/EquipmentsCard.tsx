"use client"

import { ReactNode, useEffect, useState } from "react"
import Spacer from "./Spacer"
import RoundedCornerBox from "./RoundedCornerBox"
import RoundedCornerList from "./RoundedCornerList"
import { EquipmentsData, EquipmentDetailData } from "../src/data/EquipmentsData"
import NextLinkButton from "./NextLinkButton"
import IconParent from "./IconParent"
import PhoneIcon from "../public/icon/phone.svg"
import TabletIcon from "../public/icon/tablet.svg"
import ComputerIcon from "../public/icon/computer.svg"
import AudioIcon from "../public/icon/audio.svg"
import POSIcon from "../public/icon/pos.svg"

/** 名前とアイコンの型 */
type CategoryData = {
    /** プラットフォーム名。android とか */
    name: string
    /** アイコン */
    icon: ReactNode
}

/** MakingAppNavigationRail へ渡すデータ */
type EquipmentsNavigationRailProps = {
    /** プラットフォームの一覧とアイコンのMap */
    categoryNameToIconMap: CategoryData[],
    /** メニュー選択した際に呼ばれる。引数はandroidとかwebとかプラットフォームの名前 */
    onMenuClick: (platform: string) => void,
}

/** カテゴリ一覧 NavigationRail */
function EquipmentsNavigation ({ categoryNameToIconMap, onMenuClick }: EquipmentsNavigationRailProps) {
    return (
        <div className="flex flex-col space-y-3">
            {
                categoryNameToIconMap.map(({ name, icon }) => (
                    <div
                        className="flex flex-row items-center cursor-pointer p-2 rounded-xl hover:bg-hover-light dark:hover:bg-hover-dark"
                        key={name}
                        onClick={() => onMenuClick(name)}
                    >
                        <div className="sm:mr-2">
                            <IconParent>
                                {icon}
                            </IconParent>
                        </div>
                        <p className="text-content-text-light dark:text-content-text-dark hidden sm:block">{name}</p>
                    </div>
                ))
            }
        </div>
    )
}

/** EquipmentsList へ渡すデータ */
type EquipmentsListProps = {
    /** 所持品配列 */
    list: EquipmentDetailData[]
}

/** 所持品を表示する */
    function EquipmentsList({ list }: EquipmentsListProps) {
    return (
        <RoundedCornerList
            list={list}
            content={(className, item) => (
                <div
                    className={`p-3 bg-background-light dark:bg-background-dark ${className}`}
                    key={item.details}
                >
                    <h3 className="text-content-primary-light dark:text-content-primary-dark text-2xl">
                        {item.name}
                    </h3>
                    <p className="text-content-text-light dark:text-content-text-dark">
                        {item.purpose}
                    </p>
                    <Spacer space="small" />
                    <div className="flex flex-row">
                        <NextLinkButton
                            variant="text"
                            href={item.details}
                            text="詳細"
                        />
                    </div>
                </div>
            )}
        />
    )
}

const CATEGORY_NAME_TO_ICON_LIST: CategoryData[] = [
    { name: "Phone", icon: <PhoneIcon /> },
    { name: "Tablet", icon: <TabletIcon /> },
    { name: "PC", icon: <ComputerIcon /> },
    { name: "POS", icon: <POSIcon /> },
    { name: "Audio", icon: <AudioIcon /> }
]


/** EquipmentsData へ渡すデータ */
type EquipmentsCardProps = {
    /** 所持品の配列 */
    equipmentsList: Array<EquipmentsData>
}

/** 所持品を表示してるところ */

    // JetpackComposeの remember { mutableStateOf(arrayOf()) } みたいな
    // 表示する所持品
    export default function EquipmentsCard({ equipmentsList }: EquipmentsCardProps) {

    const [equipList, setEquipmentsList] = useState<EquipmentDetailData[]>([])

     /**
     * 所持品リストを切り替える
     * 
     * 
     * @param categoryName POSとか
     */
     const changeEquipmentsListPlatform = (categoryName: string) => {
        const equipment = equipmentsList.find(categoryObj => categoryObj.categoryName === categoryName)
        if (equipment) {
            setEquipmentsList(equipment.equipmentsList)
        }
    }

    /**
     * 初期値を入れる
     * 
     * JetpackComposeの LaunchedEffect みたいなやつ
     */
    useEffect(() => {
        changeEquipmentsListPlatform("Phone")
    }, [])

    return (
        <RoundedCornerBox rounded="large">
            <div className="p-3">
                <h2 className="text-2xl text-content-primary-light dark:text-content-primary-dark">
                    所持品
                </h2>
                <div className="flex flex-row py-2">
                    <EquipmentsNavigation
                        categoryNameToIconMap={CATEGORY_NAME_TO_ICON_LIST}
                        onMenuClick={categoryName => changeEquipmentsListPlatform(categoryName)}
                    />
                    <div className="flex flex-col grow px-2">
                        <EquipmentsList list={equipList} />
                    </div>
                </div>
            </div>
        </RoundedCornerBox>
    )
}