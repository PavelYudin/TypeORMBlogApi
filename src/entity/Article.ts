import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,ManyToOne,ManyToMany,JoinTable,OneToMany} from "typeorm";
import {Autor} from "./Autor";
import {Category} from "./Category";
import { Comment } from "./Comment";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 100 ,nullable:false})
    title:string;

    @Column("text")
    contents:string;

    @CreateDateColumn()
    createdDate: Date;

    @ManyToOne(() => Autor, user => user.articles,{nullable:false})
    ID: Autor;

    @ManyToMany(type => Category,category => category.articles, {cascade: true})
    @JoinTable()
    categories: Category[];

    addCategories(category:Category){
        if(this.categories==null){
            this.categories=new Array<Category>();
        }
        this.categories.push(category);
    }

    @OneToMany(() => Comment, comment => comment.ID)
    comments: Comment[];
}


