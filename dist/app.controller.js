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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHome() {
        return {
            siteInfo: this.appService.getSiteInfo(),
            services: this.appService.getCoreServices(),
            advantages: this.appService.getTechnicalAdvantages(),
            values: this.appService.getCustomerValue(),
            contact: this.appService.getContactInfo(),
            seo: this.appService.getSeoInfo('home'),
            year: new Date().getFullYear()
        };
    }
    getAbout() {
        return {
            siteInfo: this.appService.getSiteInfo(),
            about: this.appService.getAboutUs(),
            contact: this.appService.getContactInfo(),
            seo: this.appService.getSeoInfo('about'),
            year: new Date().getFullYear()
        };
    }
    getContact() {
        return {
            siteInfo: this.appService.getSiteInfo(),
            contact: this.appService.getContactInfo(),
            seo: this.appService.getSeoInfo('contact'),
            year: new Date().getFullYear()
        };
    }
    getSitemap(res) {
        res.set('Content-Type', 'application/xml');
        return {
            url: 'https://visioncraft.qzz.io',
            lastmod: new Date().toISOString().split('T')[0]
        };
    }
    getRobots(res) {
        res.set('Content-Type', 'text/plain');
        return { url: 'https://visioncraft.qzz.io' };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('home'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHome", null);
__decorate([
    (0, common_1.Get)('about'),
    (0, common_1.Render)('about'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAbout", null);
__decorate([
    (0, common_1.Get)('contact'),
    (0, common_1.Render)('contact'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getContact", null);
__decorate([
    (0, common_1.Get)('sitemap.xml'),
    (0, common_1.Render)('sitemap'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSitemap", null);
__decorate([
    (0, common_1.Get)('robots.txt'),
    (0, common_1.Render)('robots'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRobots", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map