import { Controller, Get, Render, Res } from '@nestjs/common';
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
      seo: this.appService.getSeoInfo('home'),
      year: new Date().getFullYear()
    };
  }

  @Get('about')
  @Render('about')
  getAbout() {
    return {
      siteInfo: this.appService.getSiteInfo(),
      about: this.appService.getAboutUs(),
      contact: this.appService.getContactInfo(),
      seo: this.appService.getSeoInfo('about'),
      year: new Date().getFullYear()
    };
  }

  @Get('contact')
  @Render('contact')
  getContact() {
    return {
      siteInfo: this.appService.getSiteInfo(),
      contact: this.appService.getContactInfo(),
      seo: this.appService.getSeoInfo('contact'),
      year: new Date().getFullYear()
    };
  }

  @Get('sitemap.xml')
  @Render('sitemap')
  getSitemap(@Res() res) {
    // 设置正确的Content-Type
    res.set('Content-Type', 'application/xml');
    return {
      url: 'https://visioncraft.qzz.io',
      lastmod: new Date().toISOString().split('T')[0]
    };
  }

  @Get('robots.txt')
  @Render('robots')
  getRobots(@Res() res) {
    // 设置正确的Content-Type
    res.set('Content-Type', 'text/plain');
    return { url: 'https://visioncraft.qzz.io' };
  }
}
