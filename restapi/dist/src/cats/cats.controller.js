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
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const create_cat_dto_1 = require("./dto/create-cat.dto");
const cats_service_1 = require("./cats.service");
const http_exception_filter_1 = require("../http-exception/http-exception.filter");
const validation_pipe_1 = require("../validation/validation.pipe");
const parse_int_pipe_1 = require("../parse-int/parse-int.pipe");
const roles_guard_1 = require("../roles/roles.guard");
const roles_decorator_1 = require("../roles/roles.decorator");
let CatsController = class CatsController {
    constructor(service) {
        this.service = service;
    }
    async create(createCatDto) {
        try {
            this.service.create(createCatDto);
        }
        catch (_) {
            throw new common_1.ForbiddenException();
        }
    }
    async findAll() {
        try {
            const allCats = await this.service.findAll();
            if (allCats.length === 0) {
                throw new common_1.NotFoundException();
            }
            return allCats;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error,
            });
        }
    }
    findOne(id) {
        console.log({ id });
        return `This action requested by id: ${id}`;
    }
    update(id, updateCatDto) {
        return `This action updates a #${id} cat`;
    }
    remove(id) {
        return `This actions removes a #${id} cat`;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    __param(0, (0, common_1.Body)(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new parse_int_pipe_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], CatsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_cat_dto_1.UpdateCatDto]),
    __metadata("design:returntype", String)
], CatsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CatsController.prototype, "remove", null);
CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map