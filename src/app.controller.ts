import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  getHome() {
    return {
      siteInfo: this.appService.getSiteInfo(),
      services: this.appService.getCoreServices(),
      advantages: this.appService.getTechnicalAdvantages(),
      values: this.appService.getCustomerValue(),
      contact: this.appService.getContactInfo(),
      seo: this.appService.getSeoInfo('home')
    };
  }

  @Get('about')
  @Render('about')
  getAbout() {
    return {
      siteInfo: this.appService.getSiteInfo(),
      about: this.appService.getAboutUs(),
      contact: this.appService.getContactInfo(),
      seo: this.appService.getSeoInfo('about')
    };
  }

  @Get('contact')
  @Render('contact')
  getContact() {
    return {
      siteInfo: this.appService.getSiteInfo(),
      contact: this.appService.getContactInfo(),
      seo: this.appService.getSeoInfo('contact')
    };
  }

  @Get('sitemap.xml')
  @Render('sitemap')
  getSitemap() {
    // 确保返回XML内容类型
    return {
      url: 'https://visioncraft.qzz.io',
      lastmod: new Date().toISOString().split('T')[0]
    };
  }

  @Get('robots.txt')
  @Render('robots')
  getRobots() {
    return { url: 'https://visioncraft.qzz.io' };
  }
}
