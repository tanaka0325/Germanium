export interface IMemo {
  id: string
  text: string
  created_at: Date
  updated_at: Date
  sheet_id: number
  favorite: boolean
}

export interface ISheet {
  id: string
  created_at: Date
  updated_at: Date
  memos?: IMemo[]
}

export interface IModal {
  is_open: boolean
  message?: string
}
