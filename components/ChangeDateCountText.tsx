"use client"
import { useEffect, useState } from "react"
import DateDiffTool from "../src/DateDiffTool"
import IconParent from "./IconParent"
import UpdateIcon from "../public/icon/update.svg"

/** DateCountText へ渡すデータ */
type DateCountTextProps = {
    /** time タグに入れるためのフォーマット。yyyy-MM-dd */
    changedtimeTagTimeFormat: string
    /** 変更日時。yyyy/MM/dd */
    changedateTimeFormat: string
    /** 変更日時。UnixTime */
    changedAtUnixTime: number
}

/** 何日前かを表示するコンポーネント。クライアント側で計算するため use client します。 */
export default function ChangeDateCountText({ changedtimeTagTimeFormat, changedateTimeFormat, changedAtUnixTime }: DateCountTextProps) {
    // 何日前かを計算する
    const [diffDate, setDiffDate] = useState(0)
    useEffect(() => {
        // クライアント側で計算する
        setDiffDate(DateDiffTool.nowDateDiff(changedAtUnixTime))
    }, [])

    return (
        <div className="flex flex-row flex-wrap items-center">
            <IconParent className="fill-content-primary-light dark:fill-content-primary-dark">
                <UpdateIcon />
            </IconParent>
            <p className="text-content-primary-light dark:text-content-primary-dark">
                <span>更新日 : </span>
                {/* time にしないと、Googleとかの検索結果に日付が出ない？ */}
                <time dateTime={changedtimeTagTimeFormat}>{changedateTimeFormat}</time>
                <span>{` | ${diffDate} 日前`}</span>
            </p>
        </div>
    )
}