export declare class WebcastOpenManagementService {
  /** 查询租户流量套餐的购买及使用情况（套餐管理页面） */
  public GetAppTrafficList(
    req: GetAppTrafficListRequest
  ): Promise<GetAppTrafficListResponse>
}

export interface GetAppTrafficListRequest {
  /** 过滤条件 */
  Filter?: AppTrafficListFilter
  /** Offset，刚开始不传或者传0，翻页使用 页码*每页数量 */
  Offset?: number
  /** 每页的大小 */
  Size?: number
}

/** 套餐管理页面 */
export interface AppTrafficListFilter {
  AppID?: string
  AppName?: string
}

export interface GetAppTrafficListResponse {
  Infos: Array<AppTrafficInfo>
  TotalCount: string
}

export interface AppTrafficInfo {
  /** 租户ID */
  AppID: string
  /** 中文应用名称 */
  AppNameChinese: string
  /** 英文应用名称 */
  AppNameEnglish: string
  /** 允许配置的主播总数量 */
  AnchorLimit: string
  /** 允许消耗的直播总时长 */
  LiveDurationLimit: string
  /** 已使用的主播总数量 */
  AnchorSpent: string
  /** 已消耗的直播总时长 */
  LiveDurationSpent: string
  /** 操作人 */
  Operator: string
  /** 收费规则 */
  CampaignType: AppCampaignType
  /** 折扣数（收费规则为折扣时，这里的值才有用） */
  RateValue: number
}

export enum AppCampaignType {
  /** 正常收费 */
  Normal = 1,
  /** 免费 */
  Free = 2,
  /** 折扣 */
  Rate = 3
}
