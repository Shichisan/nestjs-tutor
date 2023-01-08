"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const posts_service_1 = require("../posts/posts.service");
const authors_service_1 = require("./authors.service");
const graphql_2 = require("../graphql");
let AuthorsResolver = class AuthorsResolver {
    constructor(authorsService, postsService) {
        this.authorsService = authorsService;
        this.postsService = postsService;
    }
    async getAuthor(id) {
        return this.authorsService.findOneById(id);
    }
    async getPosts(author) {
        return this.postsService.findAll({ authorId: author.id });
    }
    async upvotePost(postId) {
        this.postsService.upvoteById({ id: postId });
    }
};
__decorate([
    (0, graphql_1.Query)('author'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorsResolver.prototype, "getAuthor", null);
__decorate([
    (0, graphql_1.ResolveField)('posts'),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.Author]),
    __metadata("design:returntype", Promise)
], AuthorsResolver.prototype, "getPosts", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, graphql_1.Args)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorsResolver.prototype, "upvotePost", null);
AuthorsResolver = __decorate([
    (0, graphql_1.Resolver)('Author'),
    __metadata("design:paramtypes", [authors_service_1.AuthorsService,
        posts_service_1.PostsService])
], AuthorsResolver);
exports.AuthorsResolver = AuthorsResolver;
//# sourceMappingURL=authors.resolver.js.map