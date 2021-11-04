import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Comment } from "../entity/Comment";

export class CommentController {

    private userRepository = getRepository(Comment);

    async save(request: Request, response: Response, next: NextFunction) {
        const comment = new Comment();
        comment.contents=request.body.contents;
        comment.ID=request.body.ID;
        comment.AutorID=request.body.autor;
        console.log(comment)
        return this.userRepository.save(comment);
    }
}
