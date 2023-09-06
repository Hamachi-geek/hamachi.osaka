import ComputerOutlined from "@mui/icons-material/ComputerOutlined"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import IconButton from "@mui/material/IconButton"
import React, { useEffect, useState } from "react"
console.log
import Spacer from "./Spacer"
import RoundedCornerBox from "./RoundedCornerBox"
import RoundedCornerList from "./RoundedCornerList"
import { EquipmentsData, EquipmentDetailData } from "../src/data/EquipmentsData"
import { Box, ListItemIcon, ListItemText, useMediaQuery} from "@mui/material"
import NextLinkButton from "./NextLinkButton"
import { CableOutlined, MusicNoteOutlined, PhoneAndroidOutlined, PointOfSaleOutlined, TabletOutlined } from "@mui/icons-material"

/** EquipmentRail へ渡すデータ */
type EquipmentsNavigationRailProps = {
    /** プラットフォームの一覧とアイコンのMap */
    categoryNameToIconMap: Map<string, JSX.Element>,
    /** メニュー選択した際に呼ばれる。引数はandroidとかwebとかプラットフォームの名前 */
    onMenuClick: (category: string) => void,
}

/** カテゴリ一覧 NavigationRail */
const EquipmentsNavigationRail: React.FC<EquipmentsNavigationRailProps> = (props) => {
    const isMobileDevice = useMediaQuery("(max-width:600px)")
    return (
        <>
            <Box>
                <List>
                    {/* Mapには Array#map がない？ */}
                    {Array.from(props.categoryNameToIconMap).map(([text, iconElement]) => (
                        <ListItem button key={text} onClick={() => props.onMenuClick(text)}>
                            {!isMobileDevice ? (
                                <>
                                    <ListItemIcon>
                                        {iconElement}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {text}
                                    </ListItemText>
                                </>
                            ) : (<IconButton>{iconElement}</IconButton>)}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
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
                        {item.use}
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
/** EquipmentsData へ渡すデータ */
type EquipmentsCardProps = {
    /** 所持品の配列 */
    equipmentsList: Array<EquipmentsData>
}

/** 所持品を表示してるところ */

    // プラットフォームのアイコンと名前の配列をつくる
   
    const nameToIconMap = new Map([
        ["Phone", <PhoneAndroidOutlined/>],
        ["Tablet", <TabletOutlined/>],
        ["PC", <ComputerOutlined/>],
        ["POS", <PointOfSaleOutlined/>],
        ["Audio", <MusicNoteOutlined/>],
        ["Peripheral", <CableOutlined/>],
    ])

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
        const equipment = equipmentsList.find(platformObj => platformObj.categoryName === categoryName)
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
                    <EquipmentsNavigationRail
                        categoryNameToIconMap={nameToIconMap}
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