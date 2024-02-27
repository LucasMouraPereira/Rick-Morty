export type projectProps = {
  id: string
  name: string
  color: string
  commentCount: number
  isShared: boolean
  isFavorite: boolean
  url: string
  isInboxProject: boolean
  isTeamInbox: boolean
  order: number
  viewStyle: string
}
export type projectListProps = Array<projectProps>
