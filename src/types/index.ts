export interface IMemo {
  id: string
  text: string
  created_at: Date
  updated_at: Date
  sheet_id: number
}

export interface ISheet {
  id: string
  created_at: Date
  updated_at: Date
}
