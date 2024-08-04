"use client"

import NextLinkButton from "./NextLinkButton"
import XIcon from "../public/icon/x_logo.svg"

/** XShareButton へ渡すデータ */
type XShareButtonProps = {
    /** 記事タイトル */
    title: string
    /** 記事のURL */
    url: string
}

/** Xシェアボタン */
export function XShare({ title, url }: XShareButtonProps) {
    // 共有URL
    const href = `http://x.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`

    return (
        <NextLinkButton
            variant="text"
            href={href}
            startIcon={<XIcon />}
            text="Xで共有" />
    )
}