const db = require("./db.json")

const newMemos = db.memos.map(memo => {
  memo.updated_at = memo.updasted_at
})

console.log(JSON.stringify(newMemos))
