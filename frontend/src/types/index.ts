export interface AuthUser {
  id: number
  username: string
  role: string
  nickname: string
  avatarUrl: string | null
  readerLevel?: number | null
}

export interface LoginPayload {
  username: string
  password: string
}

export interface CreatePostPayload {
  title: string
  content: string
  categoryId?: number | null
  keywords?: string[]
  scheduledAt?: string | null
}

export interface UpdatePostPayload {
  title: string
  content: string
  categoryId?: number | null
  keywords?: string[]
  scheduledAt?: string | null
}

export interface PostSummary {
  id: number
  title: string
  excerpt: string
  previewContent: string
  authorId: number
  authorName: string
  authorAvatar: string | null
  status: string
  categoryId: number | null
  categoryPath: string
  keywords: KeywordItem[]
  viewCount: number
  scheduledAt: string | null
  revision: boolean
  parentPostId: number | null
  hasRevision: boolean
  createdAt: string
}

export interface PostDetail {
  id: number
  title: string
  content: string
  authorId: number
  authorName: string
  authorAvatar: string | null
  status: string
  rejectionReason: string | null
  categoryId: number | null
  categoryPath: string
  categoryBreadcrumb: BreadcrumbItem[]
  keywords: KeywordItem[]
  viewCount: number
  scheduledAt: string | null
  revision: boolean
  parentPostId: number | null
  hasRevision: boolean
  createdAt: string
  updatedAt: string | null
}

export interface BreadcrumbItem {
  id: number
  name: string
  slug: string
}

export interface KeywordItem {
  id: number
  name: string
  usageCount: number
  lastUsedAt: string | null
  archived: boolean
  createdAt: string
}

export interface PageResponse<T> {
  items: T[]
  total: number
  page: number
  size: number
}

export interface ApiError {
  code: string
  message: string
  traceId: string
}

export interface TokenResponse {
  tokenType: string
  accessToken: string
  expiresIn: number
  refreshToken: string
}

export interface Category {
  id: number
  name: string
  slug: string
  parentId: number | null
  parentName: string | null
  enabled: boolean
  sortOrder: number
  postCount: number
  createdAt: string
  updatedAt: string
  children: Category[]
}

export interface Keyword {
  id: number
  name: string
  usageCount: number
  lastUsedAt: string | null
  archived: boolean
  createdAt: string
}

export interface KeywordCloud {
  id: number
  name: string
  usageCount: number
  heatScore: number
  lastUsedAt: string | null
}

export interface CreateCategoryPayload {
  name: string
  slug?: string
  parentId?: number | null
  sortOrder?: number
}

export interface UpdateCategoryPayload {
  name: string
  slug?: string
  parentId?: number | null
  enabled?: boolean
  sortOrder?: number
}

export interface BatchUpdateCategoryPayload {
  postIds: number[]
  categoryId: number
}

export interface BatchAddKeywordsPayload {
  postIds: number[]
  keywords: string[]
}

export interface AuthorDTO {
  id: number
  username: string
  nickname: string
  avatarUrl: string | null
  bio: string | null
  enabled: boolean
  role: string
  createdAt: string
  postCount: number
  lastLoginAt: string | null
}

export interface AuthorPublicDTO {
  id: number
  nickname: string
  username: string
  avatarUrl: string | null
  bio: string | null
  postCount: number
}

export interface AuthorStatsDTO {
  totalPublished: number
  totalDraft: number
  totalViews: number
  avgViews: number
  topPosts: PostSummary[]
}

export interface CreateAuthorPayload {
  username: string
  password: string
  nickname?: string
  avatarUrl?: string
  bio?: string
}

export interface UpdateAuthorPayload {
  nickname?: string
  avatarUrl?: string
  bio?: string
}

export interface UpdateProfilePayload {
  nickname?: string
  avatarUrl?: string
  bio?: string
}

export interface ChangePasswordPayload {
  currentPassword: string
  newPassword: string
}

export interface ReviewActionPayload {
  action: string
  reason?: string
}

export interface BatchReviewPayload {
  postIds: number[]
  action: string
  reason?: string
}

export interface AdminStatsDTO {
  totalPosts: number
  pendingPosts: number
  totalAuthors: number
  monthlyNewPosts: number
  totalViews: number
  scheduledPosts: number
  pendingRevisions: number
  authorRanking: AuthorRankItem[]
}

export interface AuthorRankItem {
  id: number
  nickname: string
  avatarUrl: string | null
  postCount: number
  totalViews: number
}

export interface RevisionDiffDTO {
  revisionId: number
  parentPostId: number
  parentTitle: string
  revisionTitle: string
  parentContent: string
  revisionContent: string
  parentCategoryId: number | null
  revisionCategoryId: number | null
  parentCategoryPath: string
  revisionCategoryPath: string
  parentKeywords: string
  revisionKeywords: string
  status: string
  authorName: string
}

export interface ScheduledTaskDTO {
  postId: number
  title: string
  authorId: number
  authorName: string
  scheduledAt: string
  isRevision: boolean
  parentPostId: number | null
  status: string
}

export interface ImageDTO {
  id: number
  filename: string
  originalName: string | null
  url: string
  authorId: number
  contentType: string
  fileSize: number
  width: number | null
  height: number | null
  createdAt: string
  referencedPosts: PostSummary[] | null
}

export interface CaptchaDTO {
  key: string
  svgDataUrl: string
}

export interface RegisterReaderPayload {
  username: string
  password: string
  captchaKey: string
  captchaCode: string
  nickname?: string
  securityQuestion?: string
  securityAnswer?: string
}

export interface ReaderProfileDTO {
  id: number
  username: string
  nickname: string
  avatarUrl: string | null
  bio: string | null
  role: string
  readerLevel: number
  readerExp: number
  showFootprint: boolean
  streakDays: number
  readCount: number
  favoriteCount: number
  commentCount: number
  subscriptionCount: number
  maxCommentLength: number
  commentIntervalSeconds: number
}

export interface ReaderPublicProfileDTO {
  id: number
  username: string
  nickname: string
  avatarUrl: string | null
  bio: string | null
  readerLevel: number
  streakDays: number
  readCount: number
  favoriteCount: number
  commentCount: number
  subscriptionCount: number
}

export interface UpdateReaderProfilePayload {
  nickname?: string
  avatarUrl?: string
  bio?: string
  showFootprint?: boolean
}

export interface ReadHistoryItem {
  id: number
  userId: number
  postId: number
  readAt: string
}

export interface FavoriteItem {
  id: number
  userId: number
  postId: number
  createdAt: string
}

export interface SubscriptionItem {
  id: number
  readerId: number
  authorId: number
  createdAt: string
}

export interface SecurityQuestionDTO {
  username: string
  securityQuestion: string
}

export interface ResetPasswordPayload {
  username: string
  securityAnswer: string
  newPassword: string
}
