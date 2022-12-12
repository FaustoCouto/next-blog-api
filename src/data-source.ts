import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./modules/post/infra/typeorm/entity/post"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "next-blog-db",
    synchronize: true,
    logging: false,
    entities: [Post],
})

AppDataSource.initialize()
    .then(() => {
        //
    })
    .catch((error) => console.log(error))
