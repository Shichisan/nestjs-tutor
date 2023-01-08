"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const apollo_1 = require("@nestjs/apollo");
const apollo_server_core_1 = require("apollo-server-core");
const path_1 = require("path");
const authors_resolver_1 = require("./authors/authors.resolver");
const authors_service_1 = require("./authors/authors.service");
const posts_service_1 = require("./posts/posts.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                typePaths: ['./**/*.graphql'],
                definitions: {
                    path: (0, path_1.join)(process.cwd(), 'src/graphql.ts'),
                    outputAs: 'class',
                },
                debug: true,
                playground: false,
                plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, authors_resolver_1.AuthorsResolver, authors_service_1.AuthorsService, posts_service_1.PostsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map