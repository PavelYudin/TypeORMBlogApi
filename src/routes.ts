import {AutorController} from "./controller/AutorController";
import { ArticleController } from "./controller/ArticleController";
import { CategoryController } from "./controller/CategoryController";
import { CommentController } from "./controller/CommentController";

export const Routes = [{
    method: "get",
    route: "/autors",
    controller: AutorController,
    action: "all"
},{
    method: "get",
    route: "/articles",
    controller: ArticleController,
    action: "all"
},{
    method: "get",
    route: "/categories",
    controller: CategoryController,
    action: "all"
},{
    method: "post",
    route: "/categories",
    controller: CategoryController,
    action: "save"
},{
    method: "post",
    route: "/articles",
    controller: ArticleController,
    action: "save"
},{
    method: "post",
    route: "/comments",
    controller: CommentController,
    action: "save"
},{
    method: "get",
    route: "/autors/:id",
    controller: AutorController,
    action: "one"
},
{
    method: "get",
    route: "/categories/:id",
    controller: CategoryController,
    action: "getArticles"
},
{
    method: "post",
    route: "/autors",
    controller: AutorController,
    action: "save"
}, {
    method: "get",
    route: "/articles/:id",
    controller: ArticleController,
    action: "one"
},{
    method: "get",
    route: "/articles/:id/comments",
    controller: ArticleController,
    action: "getCommentArticle"
}];