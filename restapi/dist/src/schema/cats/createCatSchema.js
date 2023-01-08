"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatSchema = void 0;
const Joi = require("joi");
exports.createCatSchema = Joi.object({
    name: Joi.string().max(30).required(),
    age: Joi.number().positive().less(150).required(),
    breed: Joi.string().max(255).required(),
});
//# sourceMappingURL=createCatSchema.js.map