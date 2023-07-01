import { Metadata } from "next";
import ContentFolderManager from "../../../src/ContentFolderManager";
import EnvironmentTool from "../../../src/EnvironmentTool";
import { GitHubHistoryButton, TwitterShareButton } from "../../../components/BlogDetailButton"
import TagChipGroup from "../../../components/TagChipGroup"
import RoundedCornerBox from "../../../components/RoundedCorner"
import { TocList, TocListLayout } from "../../../components/TocList"
import MenuIcon from "../../../public/icon/material-menu.svg"
import DateCountText from "../../../components/DateCountText"
// 部分的に修正した css
import "../../../styles/css/content.css"

/** 動的ルーティング */
type PageProps = {
    params: { blog: string }
}

/** head に値を入れる */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const markdownData = await ContentFolderManager.getBlogItem(params.blog)
    const ogpTitle = `${markdownData.title} - ${EnvironmentTool.SITE_NAME}`
    const ogpUrl = `${EnvironmentTool.BASE_URL}${markdownData.link}`

    return {
        title: ogpTitle,
        alternates: {
            canonical: ogpUrl
        },
        openGraph: {
            title: ogpTitle,
            url: ogpUrl
        }
    }
}

/** 記事本文 */
export default async function BlogDetailPage({ params }: PageProps) {
    // サーバー側でロードする
    const markdownData = await ContentFolderManager.getBlogItem(params.blog)

    const ogpTitle = `${markdownData.title} - たくさんの自由帳`
    const ogpUrl = `${EnvironmentTool.BASE_URL}${markdownData.link}`
    const dateTimeFormat = markdownData.createdAt.replace(/\//g, '-')

    /** 文字数 */
    const textCountText = (
        <div className="flex flex-row flex-wrap items-center">
            <MenuIcon className="w-5 h-5" />
            <p className="text-content-primary-light">
                {`文字数(だいたい) : ${markdownData.textCount}`}
            </p>
        </div>
    )

    /* 共有、GitHub履歴 */
    const shareOrHistoryButton = (
        <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <GitHubHistoryButton fileName={markdownData.fileName} />
            <TwitterShareButton url={ogpUrl} title={ogpTitle} />
        </div>
    )

    return (
        <div className="flex flex-col space-y-4">
            
            <h1 className="text-content-primary-light text-3xl">
                {markdownData.title}
            </h1>
            <div>
                <DateCountText
                    timeTagTimeFormat={dateTimeFormat}
                    dateTimeFormat={markdownData.createdAt}
                    createdAtUnixTime={markdownData.createdAtUnixTime} />
                {textCountText}
            </div>

            <TagChipGroup tagList={markdownData.tags} />
            {shareOrHistoryButton}

            {/* 画面の幅が広いときだけ目次を表示させる */}
            <TocListLayout secondary={<TocList tocDataList={markdownData.tocDataList} />}>
                <RoundedCornerBox rounded="large">
                    <div className="p-4">
                        <div
                            className="content_div"
                            dangerouslySetInnerHTML={{ __html: markdownData.html }} />
                    </div>
                </RoundedCornerBox>
            </TocListLayout>
        </div>
    )
}

/**
 * ここで生成するページを列挙して返す。（実際にはパスの一部）
 * 
 * /posts/<ここ> ←ここの部分の名前を渡して生成すべきページを全部列挙して返してる
 * 
 * これも上記同様クライアント側では呼ばれない。
 */
export async function generateStaticParams() {
    const fileNameList = await ContentFolderManager.getBlogNameList()
    // この場合はキーが blog になるけどこれはファイル名によって変わる（[page].tsxなら page がキーになる）
    return fileNameList.map((name) => ({ blog: name }))
}