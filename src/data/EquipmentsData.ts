/** content/json/making.app で使う作ったアプリの詳細データ */
export type EquipmentDetailData = {
    /**デバイス名 */
    name: string,
    /**用途 */
    purpose: string,
    /**ひとこと */
    description: string,
    /**詳細 */
    details: string,

    image?: string
}

/** 各プラットフォームのアプリ配列を入れるデータ */
export type EquipmentsData = {
    /** カテゴリー。PhoneとかPOSとか */
    categoryName: string,
    /** 所持品配列 */
    equipmentsList: Array<EquipmentDetailData>
}