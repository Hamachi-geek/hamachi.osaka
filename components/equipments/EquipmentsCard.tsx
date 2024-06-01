"use client" // onClick 、useState のため

import { useMemo, useState } from "react"
import { EquipmentsData } from "../../src/data/EquipmentsData"
import RoundedCornerBox from "../RoundedCornerBox"
import { EquipmentsItem } from "./EquipmentsItem"
import EquipmentsTab from "./EquipmentsTab"
import EquipmentsDeck from "./EquipmentsDeck"

/** EquipmentsCard へ渡すデータ */
type EquipmentsCardProps = {
    /** ポートフォリオ一覧 */
    equipmentsDataList: EquipmentsData[]
}

/**
 * 作品集
 * と言っているが、JSON の形式さえあっていれば別に作品集以外でも使えるので、汎用性はありそう。
 * JSON の形式はこれに沿ってやればいいと思う→{@link EquipmentsData}
 */
export default function EquipmentsCard({ equipmentsDataList }: EquipmentsCardProps ) {

    // 今選択中のタブ
    // 初期値は最初のカテゴリで
    const [currentTabName, setCurrentTabName] = useState<string>(equipmentsDataList[0].categoryName)

    /** タブ一覧。useMemo するほど重くないけど一応。  */
    const tabLabelList = useMemo(
        () => equipmentsDataList.map((data) => data.categoryName),
        [equipmentsDataList]
    )

    /** 選択中のタブに対応するアイテム一覧。 */
    const equipItemList = useMemo(
        () => equipmentsDataList.find((categoryData) => categoryData.categoryName === currentTabName)?.categoryName ?? [],
        [equipmentsDataList, currentTabName]
    )

    return (
        <RoundedCornerBox rounded="large">
            <div className="p-4 space-y-4 flex flex-col">

                {/* タイトル */}
                <h2 className="text-2xl text-content-primary-light dark:text-content-primary-dark">
                    所持品
                </h2>

                {/* タブ */}
                <div className="flex flex-row flex-nowrap overflow-x-scroll items-center [scrollbar-width:none]">
                    {
                        tabLabelList.map((label) => (
                            <EquipmentsTab
                                key={label}
                                label={label}
                                isSelected={label === currentTabName}
                                onClick={() => setCurrentTabName(label)}
                            />
                        ))
                    }
                </div>

                {/* カテゴリの所持品一覧 */}
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    {
                        equipItemList.map((detailData) => (
                            <EquipmentDetailData
                                name={detailData.name}
                                purpose={detailData.purpose}
                                description={detailData.description}                           
                                link={detailData.link}                      
                                image={detailData.image}
                            />
                        ))
                    }
                </div>

            </div>
        </RoundedCornerBox>
    )
}