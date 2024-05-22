import { Metadata } from "next";
import JsonFolderManager from "../src/JsonFolderManager";
import ProfileCard from "../components/ProfileCard";
import EnvironmentTool from "../src/EnvironmentTool";
import LinkCard from "../components/LinkCard";
import EquipmentsCard from "../components/EquipmentsCard";
import PortfolioCard from "../components/portfolio/PortfolioCard";

/** <head> に入れる値 */
export const metadata: Metadata = {
    title: `トップページ - ${EnvironmentTool.SITE_NAME}`,
    // Google Search Console の所有権確認
    verification: {
        google: EnvironmentTool.GOOGLE_SEARCH_CONSOLE
    }
}

/** 最初に表示されるページ */
export default async function Home() {
    // データを async/await を使って取得する
    // なんとなく並列にしてみた
    const [randomMessageList, equipmentsList, portfolioData, linkList] = await Promise.all([
        // ランダムメッセージ
        JsonFolderManager.getRandomMessageList(),
        // 所持品
        JsonFolderManager.getEquipmentsMap(),
        // 作ったアプリ
        JsonFolderManager.getPortfolioList(),
        // リンク集
        JsonFolderManager.getLinkList()
    ])

    return (
        <div className="flex flex-col space-y-5">
            <ProfileCard randomMessageList={randomMessageList} />
            <LinkCard linkList={linkList} />
            <EquipmentsCard equipmentsList={equipmentsList}/>
            <PortfolioCard portfolioDataList={portfolioData} />
        </div>
    )
}