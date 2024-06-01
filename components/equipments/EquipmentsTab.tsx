"use client"

import IconParent from "../IconParent"
import CategoryNameIconDictionary from "./CategoryNameIconDictionary"

/** EquipmentsTab へ渡すデータ */
type EquipmentsTabProps = {
    /** ラベル */
    label: string
    /** 選択中かどうか */
    isSelected: boolean
    /** 押したとき */
    onClick: () => void
}

/** ポートフォリオカードのタブの部分 */
export default function EquipmentsTab({ label, isSelected, onClick }: EquipmentsTabProps) {
    return (
        <div className="flex flex-col mb-2">

            <div
                className="flex flex-row px-4 py-1 space-x-2 cursor-pointer select-none text-nowrap text-content-primary-light dark:text-content-primary-dark"
                onClick={onClick}
            >
                {/* アイコン */}
                <IconParent>
                    <CategoryNameIconDictionary categoryName={label} />
                </IconParent>

                {/* ラベル */}
                <p>{label}</p>
            </div>

            {
                isSelected && <div className="h-1 rounded-t-lg bg-content-primary-light dark:bg-primary-dark" />
            }
        </div>
    )
}
