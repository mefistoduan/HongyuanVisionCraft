export declare class AppService {
    getSiteInfo(): {
        title: string;
        slogan: string;
        footerText: string;
    };
    getAboutUs(): {
        title: string;
        content: string;
    };
    getCoreServices(): {
        title: string;
        description: string;
    }[];
    getTechnicalAdvantages(): {
        title: string;
        description: string;
    }[];
    getCustomerValue(): {
        title: string;
        description: string;
    }[];
    getContactInfo(): {
        email: string;
        website: string;
    };
    getSeoInfo(page: string): {
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
}
