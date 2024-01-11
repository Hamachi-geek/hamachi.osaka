import { Metadata } from "next"
import { Suspense } from "react"
import GoogleAnalytics from "../src/GoogleAnalytics"
import localFont from "next/font/local"
import NavigationDrawer from "../components/NavigationDrawer"
import ResponsiveLayout from "../components/ResponsiveLayout"
// コードブロックのCSS
import "highlight.js/styles/vs2015.css"
// グローバルCSS
import "../styles/css/global.css"

/** フォントを読み込む */
const koruriFont = localFont({
    // CSS 変数として使う
    variable: '--line-seed',
    src: [
        { path: '../styles/css/fonts/LINESeedJP_TTF_Rg.eot' },
        { path: '../styles/css/fonts/LINESeedJP_A_TTF_Rg.ttf' },
        { path: '../styles/css/fonts/LINESeedJP_OTF_Rg.woff' },
    ]
})

export const metadata: Metadata = {
    manifest: '/manifest.json'
}

/** 共通レイアウト部分 */
export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html className={koruriFont.variable}>
            <body className="font-body bg-background-light dark:bg-background-dark">

                {/* レスポンシブデザイン。画面の幅が大きいときにドロワーが表示される */}
                <ResponsiveLayout
                    navigationDrawer={<NavigationDrawer />}
                    title={<h1 className="text-content-primary-light dark:text-content-primary-dark text-2xl">はまちのホムペ</h1>}
                >
                    {children}
                </ResponsiveLayout>

                {/* GoogleAnalytics */}
                <Suspense fallback={null}>
                    <GoogleAnalytics />
                </Suspense>
            </body>
        </html>
    )
}
