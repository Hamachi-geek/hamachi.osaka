"use client"

import Button from "../Button"
import { EquipmentsData } from "../../src/data/EquipmentsData"
import NorthEastIcon from "../../public/icon/north_east.svg"
import EquipmentsCard from "../EquipmentsCard"

/** PortfolioOtherDeckColumn へ渡すデータ */
type EquipmentsDeckColumnProps = {
    equipmentsDataListWithoutCurrentSelect: EquipmentsData[]

    /** カラムに表示するデータ */
    equipmentsData: EquipmentsData,
    /** くわしく押したとき */
    onMoreClick: (categoryName: string) => void
}

/** PortfolioOtherDeck の各カラム */
function EquipmentsDeckColumn({ equipmentsData, onMoreClick }: EquipmentsDeckColumnProps) {
    return (
        <div className="flex flex-col space-y-4 min-w-80 max-w-80">

            {/* タイトル部分 */}
            <h3 className="text-xl text-content-primary-light dark:text-content-primary-dark">
                {equipmentsData.categoryName}
            </h3>

            {/* 各アイテム */}
            {
                equipmentsData.equipmentsList.map((categoryItem) => (
                    <EquipmentsCard
                        name={categoryItem.name}
                        description={categoryItem.description}
                        image={categoryItem.image}
                        caterogyName={equipmentsData.categoryName} />
                ))
            }

            {/* くわしくボタン */}
            <div className="flex justify-center">
                <div onClick={() => onMoreClick(equipmentsData.categoryName)}>
                    <Button
                        text="くわしく"
                        variant="outlined"
                        size="small"
                        endIcon={<NorthEastIcon />} />
                </div>
            </div>

        </div>
    )
}