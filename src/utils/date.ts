import * as dayjs from "dayjs"

// ex. 2018/01/01 12:00
export const formatYMDHms = (d: Date) => {
  return dayjs(d).format("YYYY/MM/DD HH:mm:ss")
}
