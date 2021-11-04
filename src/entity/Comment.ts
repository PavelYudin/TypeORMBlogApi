import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,ManyToOne,ManyToMany,JoinTable} from "typeorm";
import { Article } from "./Article";
import { Autor } from "./Autor";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    contents:string;

    @CreateDateColumn()
    createdDate: Date;

    @ManyToOne(() => Article, article => article.comments,{nullable:false})
    ID: Article;

    @ManyToOne(() => Autor, autor => autor.comments,{nullable:false})
    AutorID: Autor;
}


