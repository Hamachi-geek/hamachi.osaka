import RoundedImage from "./RoundedImage"
import ThemeSettingMenu from "./ThemeSettingMenu"
import NavigationDrawerItem from "./NavigationDrawerItem"
import HomeIcon from "../public/icon/home.svg"
import BookIcon from "../public/icon/book.svg"
import SellIcon from "../public/icon/sell.svg"
import SearchIcon from "../public/icon/search.svg"
import BubbleChart from "../public/icon/bubble_chart.svg"

/** ナビゲーションドロワーの表示先、パス、コンポーネント */
const DRAWER_LINK = [
    {
        title: 'ホーム',
        icon: <HomeIcon />,
        path: '/'
    },
    {
        title: '記事一覧',
        icon: <BookIcon />,
        path: '/posts/page/1/'
    },
    {
        title: 'タグ一覧',
        icon: <SellIcon />,
        path: '/posts/tag/all_tags/'
    },
    {
        title: '記事検索',
        icon: <SearchIcon />,
        path: '/search/'
    },
    {
        title: 'このサイトについて',
        icon: <BubbleChart />,
        path: '/pages/about/'
    }
]

/** ナビゲーションドロワー */
export default function NavigationDrawer() {
    return (
        <div className="flex flex-col p-2 w-full">

            <div className="flex flex-row p-2 items-center">
                <RoundedImage src="/icon.png" />
                <div className="flex flex-col text-content-text-light">
                    <p className="text-content-text-light dark:text-content-text-dark text-base">
                        はまちのホムペ
                    </p>
                    <p className="text-content-text-light dark:text-content-text-dark text-sm">
                        いろいろ
                    </p>
                </div>
            </div>

            <nav>
                {
                    DRAWER_LINK.map(menu => (
                        <NavigationDrawerItem
                            key={menu.path}
                            title={menu.title}
                            icon={menu.icon}
                            path={menu.path}
                        />
                    ))
                }
            </nav>

            {/* 区切り線 */}
            <div className="border-b-2 my-2 mx-4 border-content-text-light dark:border-content-text-dark" />

            <ThemeSettingMenu />

        </div>
    )
}