import {getRepository,getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Category} from "../entity/Category";
export class CategoryController {

    private userRepository = getRepository(Category);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async getArticles(request: Request, response: Response, next: NextFunction) {
        const categoryName=request.params.id;
        const category=await getConnection().manager.findOne(Category,{"name":categoryName});
        if(!category)  throw Error("no category");
        const articles=await getConnection().createQueryBuilder()
             .relation("category","articles")
            .of(category)
            .loadMany();
        return articles;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }
}