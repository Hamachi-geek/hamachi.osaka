import ComputerOutlined from "@mui/icons-material/ComputerOutlined"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import IconButton from "@mui/material/IconButton"
import React, { useEffect, useState } from "react"
import Spacer from "./Spacer"
import RoundedCornerBox from "./RoundedCorner"
import { EquipmentsData, EquipmentDetailData } from "../src/data/EquipmentsData"
import { Box, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
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
const EquipmentsList: React.FC<EquipmentsListProps> = (props) => {
    const theme = useTheme()

    return (
        <List sx={{ marginLeft: 2, marginRight: 2, width: '100%' }}>
            {
                props.list.map(item => (
                    <Box sx={{ paddingBottom: 1 }}>
                        <RoundedCornerBox key={item.name} colorCode={theme.palette.background.default}>
                            <Box sx={{ padding: 2 }}>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" style={{ fontWeight: "bold"}} >
                                    用途:{item.use}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Spacer value={1} />
                                <NextLinkButton variant="text" href={item.details} text="詳細" />
                            </Box>
                        </RoundedCornerBox>
                    </Box>
                ))
            }
        </List>
    )
}

/** EquipmentsData へ渡すデータ */
type EquipmentsCardProps = {
    /** 所持品の配列 */
    equipmentsList: Array<EquipmentsData>
}

/** 所持品を表示してるところ */
const EquipmentsCard: React.FC<EquipmentsCardProps> = (props) => {
    const equipmentsList = props.equipmentsList

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
        <RoundedCornerBox value={3}>
            <Box sx={{ padding: 1 }}>
                <Typography variant="h5" sx={{ padding: 1, marginLeft: 1 }} color="primary">
                    所持品
                </Typography>
                <div style={{ display: 'flex' }}>
                <EquipmentsNavigationRail
                        categoryNameToIconMap={nameToIconMap}
                        onMenuClick={categoryName => changeEquipmentsListPlatform(categoryName)}
                    />
                    <EquipmentsList list={equipList} />
                </div>
            </Box>
        </RoundedCornerBox>
    )
}

export default EquipmentsCard