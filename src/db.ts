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

  public addItem(item) {
    return new Promise((resolve, reject) => {
      this.db.insert(item, (err, newDoc) => {
        if (err) {
          reject()
          return
        }
        resolve(newDoc)
      })
    })
  }

  public findItems() {
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

export const itemDataMapper = new DataMapper("items")
