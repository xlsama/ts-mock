export interface User {
  name: string
  age?: number
  gender: '男' | '女'
  hobby: string[]
}

/** 套餐管理页面 */
export interface AppTrafficListFilter {
  AppID?: string
  AppName?: string
}

export interface GetAppTrafficListRequest {
  /** 过滤条件 */
  Filter?: AppTrafficListFilter
  /** Offset，刚开始不传或者传0，翻页使用 页码*每页数量 */
  Offset?: number
  /** 每页的大小 */
  Size?: number
}
