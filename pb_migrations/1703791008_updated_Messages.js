/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yvuxfinpnfjoq56")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrzkplpl",
    "name": "subject",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yvuxfinpnfjoq56")

  // remove
  collection.schema.removeField("nrzkplpl")

  return dao.saveCollection(collection)
})
