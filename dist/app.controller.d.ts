import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHome(): {
        siteInfo: {
            title: string;
            slogan: string;
            footerText: string;
        };
        services: {
            title: string;
            description: string;
        }[];
        advantages: {
            title: string;
            description: string;
        }[];
        values: {
            title: string;
            description: string;
        }[];
        contact: {
            email: string;
            website: string;
        };
        seo: {
            author: string;
            image: string;
            url: string;
            twitterCard: string;
            twitterSite: string;
            twitterCreator: string;
            title: string;
            description: string;
            keywords: string;
        };
        year: number;
    };
    getAbout(): {
        siteInfo: {
            title: string;
            slogan: string;
            footerText: string;
        };
        about: {
            title: string;
            content: string;
        };
        contact: {
            email: string;
            website: string;
        };
        seo: {
            author: string;
            image: string;
            url: string;
            twitterCard: string;
            twitterSite: string;
            twitterCreator: string;
            title: string;
            description: string;
            keywords: string;
        };
        year: number;
    };
    getContact(): {
        siteInfo: {
            title: string;
            slogan: string;
            footerText: string;
        };
        contact: {
            email: string;
            website: string;
        };
        seo: {
            author: string;
            image: string;
            url: string;
            twitterCard: string;
            twitterSite: string;
            twitterCreator: string;
            title: string;
            description: string;
            keywords: string;
        };
        year: number;
    };
    getSitemap(res: any): {
        url: string;
        lastmod: string;
    };
    getRobots(res: any): {
        url: string;
    };
}
