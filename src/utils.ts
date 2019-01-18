import * as dayjs from "dayjs"

// format date
// ex. 2018/01/01 12:00
export const formatYMDHms = (d: Date) => {
  return dayjs(d).format("YYYY/MM/DD HH:mm:ss")
}

// format date
// ex. 2018/01/01
export const formatYMD = (d: Date) => {
  return dayjs(d).format("YYYY/MM/DD")
}

// return sort compare function
export const sortOption = (key, order = "asc") => {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === "desc" ? comparison * -1 : comparison
  }
}
