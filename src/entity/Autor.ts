import {Entity, PrimaryColumn, Unique,OneToMany} from "typeorm";
import {Article} from "./Article";
import { Comment } from "./Comment";

@Entity()
@Unique(["nickName"])
export class Autor {
    @PrimaryColumn("varchar", { length: 50 })
    nickName: string;

    @OneToMany(() => Article, article => article.ID)
    articles: Article[];

    @OneToMany(() => Comment, comment => comment.AutorID)
    comments: Comment[];
}


