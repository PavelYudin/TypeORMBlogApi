import {Entity, PrimaryGeneratedColumn, Column,ManyToMany} from "typeorm";
import { Article } from "./Article";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 50 ,nullable:false})
    name:string;

    @ManyToMany(type => Article, article => article.categories)
    articles: Article[];
}
 

