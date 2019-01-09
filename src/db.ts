import * as Datastore from "nedb"

class DataMapper {
  private db
  constructor(keyName: string) {
    this.db = new Datastore({
      filename: keyName,
      autoload: true,
      timestampData: true,
    })
  }

  public addChat(chat) {
    return new Promise((resolve, reject) => {
      this.db.insert(chat, (err, newDoc) => {
        if (err) {
          reject()
          return
        }
        resolve(newDoc)
      })
    })
  }

  public findChats() {
    return new Promise((resolve, reject) => {
      this.db.find({}, (err, docs) => {
        if (err) {
          reject()
          return
        }
        resolve(docs)
      })
    })
  }
}

export const chatDataMapper = new DataMapper("items")
