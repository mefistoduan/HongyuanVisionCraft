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
            keywords: string;
            image: string;
            url: string;
        } | {
            author: string;
            keywords: string;
            image: string;
            url: string;
            title: string;
            description: string;
        };
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
            keywords: string;
            image: string;
            url: string;
        } | {
            author: string;
            keywords: string;
            image: string;
            url: string;
            title: string;
            description: string;
        };
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
            keywords: string;
            image: string;
            url: string;
        } | {
            author: string;
            keywords: string;
            image: string;
            url: string;
            title: string;
            description: string;
        };
    };
    getSitemap(): {
        url: string;
        lastmod: string;
    };
    getRobots(): {
        url: string;
    };
}
