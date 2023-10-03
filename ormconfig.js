const orm = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    //   "host": "localhost",
    //   "port": 5432,
    //   "username": "postgres",
    //   "password": "postgres",
    //   "database": "simula_drive",
    "ssl": { "rejectUnauthorized": false },
    "entities": [
        `./${process.env.FOLDER_ENTITIES_ORM}/*/models/*.${process.env.FILE_EXTENSION}`
    ],
    "migrations": [
        `./${process.env.FOLDER_MIGRATIONS_ORM}/*.${process.env.FILE_EXTENSION}`
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}

if (process.env.ENVIRONMENT == 'development')
    delete orm.ssl;

module.exports = orm;
//"url" : "postgres://username:password@host:port/database"