import { Metadata } from "next";
import JsonFolderManager from "../src/JsonFolderManager";
import ProfileCard from "../components/ProfileCard";
import EnvironmentTool from "../src/EnvironmentTool";
import LinkCard from "../components/LinkCard";
import MutualLinkCard from "../components/MutualLinkCard";
import EquipmentsCard from "../components/EquipmentsCard";
import MakingAppCard from "../components/MakingAppCard";

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
    const [randomMessageList, makingAppList, equipmentsList, mutualLinkList, linkList] = await Promise.all([
        // ランダムメッセージ
        JsonFolderManager.getRandomMessageList(),
        // 作ったアプリ
        JsonFolderManager.getMakingAppMap(),
        // 所持品
        JsonFolderManager.getEquipmentsMap(),
        // 相互リンク集
        JsonFolderManager.getMutualLinkList(),
        // リンク集
        JsonFolderManager.getLinkList()
    ])

    return (
        <div className="flex flex-col space-y-5">
            <ProfileCard randomMessageList={randomMessageList} />
            <LinkCard linkList={linkList} />
            <MutualLinkCard mutualLinkList={mutualLinkList} />
            <EquipmentsCard equipmentsList={equipmentsList}/>
            <MakingAppCard makingAppList={makingAppList} />
        </div>
    )
}