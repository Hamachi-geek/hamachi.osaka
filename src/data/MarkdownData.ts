/** Markdownを解析した結果を入れるデータクラスみたいなのを作りたかった */
type MarkdownData = {
    /** タイトル */
    title: string
    /** 作成日 */
    createdAt: string
    /** 作成日、UnixTime版 */
    createdAtUnixTime: number
    /** 更新日 */
    changedAt: string
    /** 作成日、UnixTime版 */
    changedAtUnixTime: number
    /** タグ */
    tags: string[]
    /** 見出し。100 文字まで */
    description: string
    /** Markdown */
    markdown: string
    /** URLの一部 */
    link: string
    /** ファイル名 */
    fileName: string
    /** マークダウンの時点での文字数 */
    textCount: number
}

export default MarkdownData