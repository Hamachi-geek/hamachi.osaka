import { EquipmentDetailData } from "../../src/data/EquipmentsData"
import NextLinkButton from "../NextLinkButton"

/** カテゴリに含まれる一覧の各アイテム。画像付きのやつ */
export function EquipmentsItem({ name, description, details, purpose, image}: EquipmentDetailData) {
    return (
        <div className="flex flex-row p-3 space-x-4 rounded-3xl bg-background-light dark:bg-background-dark">

            {/* 画像 */}
            <div className="flex basis-2/5 items-center">
                <img
                    className=" w-full object-cover aspect-square border-[1px] rounded-3xl border-content-primary-light dark:border-content-primary-dark"
                    src={image}
                />
            </div>

            <div className="basis-3/5 flex flex-col space-y-4 overflow-hidden">

                {/* 名前と説明 */}
                <div className="grow">
                    <h3 className="truncate text-content-primary-light dark:text-content-primary-dark text-2xl">
                        {name}
                    </h3>
                    <p className="text-content-text-light dark:text-content-text-dark">
                        {purpose}
                    </p>
                    <p className="text-content-text-light dark:text-content-text-dark">
                        {description}
                    </p>
                </div>

                {/* ボタンたち。幅が広ければ横並び、デフォは縦並び。横と縦両方で右寄せする。 */}
                <div className="flex flex-col lg:flex-row justify-normal lg:justify-end items-end lg:items-center">

                    {
                        // github はあれば表示
                        details && <NextLinkButton
                            text="詳細"
                            variant="outlined"
                            href={details} />
                    }
                </div>
            </div>
        </div>
    )
}