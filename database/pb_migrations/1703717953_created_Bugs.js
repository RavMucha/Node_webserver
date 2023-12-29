/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "c9kzko7gu8b2pxj",
    "created": "2023-12-27 22:59:13.975Z",
    "updated": "2023-12-27 22:59:13.975Z",
    "name": "Bugs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "syqmem2x",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "j5obdegf",
        "name": "report",
        "type": "editor",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c9kzko7gu8b2pxj");

  return dao.deleteCollection(collection);
})
