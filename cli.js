const db = require("./db.json")

const newMemos = db.memos.map(memo => {
  if (memo.id >= "01D0TW335MJ7B74VJZTGE6EYXT") {
    memo.sheet_id = 2
  }
  if (memo.id >= "01D0XDJ8RKM9BHSKGH41YBYRHA") {
    memo.sheet_id = 3
  }
  return memo
})

console.log(JSON.stringify(newMemos))
