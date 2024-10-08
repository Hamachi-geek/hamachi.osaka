/**
 * ブログ一覧で使うデータクラス
 * 
 * TypeScript、TypeとInterface どっちがいいのかわからん
 */
type BlogItem = {
    /** タイトル */
    title: string
    /** URL */
    link: string
    /** 投稿日 */
    createdAt: string
    /** 更新日 */
    changedAt: string
    /** チラ見せ。 */
    description: string
    /** タグ */
    tags: string[]
}

export default BlogItem