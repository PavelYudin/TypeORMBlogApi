import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Article} from "../entity/Article";
import { Category } from "../entity/Category";

export class ArticleController {

    private userRepository = getRepository(Article);
    private userRepository2=getRepository(Category);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const promiseCategories=request.body.categories.map(category=>{
            return this.userRepository2.find({where:{name:category}});
        });
        const arrCategories=await Promise.all(promiseCategories)        
        const article = new Article();
        article.title = request.body.title;
        article.contents = request.body.contents;
        article.ID=request.body.nickName;
        arrCategories.forEach(arr=>{
            article.addCategories(arr[0])
        });       
        return this.userRepository.save(article);
    }

    async getCommentArticle(request: Request, response: Response, next: NextFunction) {
        const articleId=request.params.id;
        let comments = await (await this.userRepository.findOne(articleId,{relations:["comments"]})).comments;
        return comments;

    }

}