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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Client_1 = __importDefault(require("./Client"));
const Specialist_1 = __importDefault(require("./Specialist"));
const StateService_1 = __importDefault(require("./StateService"));
let Service = class Service extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Service.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Service.prototype, "scheduleDate", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Service.prototype, "serviceDate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Client_1.default, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Client_1.default)
], Service.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Specialist_1.default, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Specialist_1.default)
], Service.prototype, "specialist", void 0);
__decorate([
    typeorm_1.ManyToOne(() => StateService_1.default, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", StateService_1.default)
], Service.prototype, "serviceState", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Service.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Service.prototype, "updated_at", void 0);
Service = __decorate([
    typeorm_1.Entity('services')
], Service);
exports.default = Service;
