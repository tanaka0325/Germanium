export interface IMemo {
  id: number
  text: string
  created_at: Date
  updated_at: Date
  sheet_id: number
}

export interface ISheet {
  id: number
  title: string
  created_at: Date
  updated_at: Date
}
