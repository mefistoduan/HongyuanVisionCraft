"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getSiteInfo() {
        return {
            title: 'Hongyuan VisionCraft',
            slogan: 'Smart Rendering, Local Empowerment, Precisely Presenting Every Design Detail',
            footerText: 'Hongyuan VisionCraft: Where Design Meets Infinite Possibility',
        };
    }
    getAboutUs() {
        return {
            title: 'About Us',
            content: 'Jinan Hongyuan Technology is an innovative enterprise focusing on AI architectural rendering localization services. We utilize advanced computer vision and generative AI technology to provide architects, designers, and developers with efficient and precise image generation and enhancement solutions. Adhering to the core values of "innovation, professionalism, and win-win", the company is committed to empowering the entire architectural design process through technological breakthroughs and promoting intelligent transformation in the industry.'
        };
    }
    getCoreServices() {
        return [
            {
                title: 'Prototype Design',
                description: 'Intelligently generate styled solutions based on original image understanding and text prompts, maintaining subject consistency while achieving creative divergence.'
            },
            {
                title: 'Precise Rendering',
                description: 'Accurately identify spatial layout, form relationships, and key features of design drafts to output high-fidelity rendering results.'
            },
            {
                title: 'Local Repainting',
                description: 'Modify specified areas in combination with environmental context to ensure visual coordination and physical rationality.'
            },
            {
                title: 'Seasonal Weather Simulation',
                description: 'Simulate architectural effects under different seasons, weather, and lighting conditions to enhance scheme adaptability.'
            },
            {
                title: 'Intelligent Image Expansion',
                description: 'Seamlessly expand image content to avoid quality loss and distortion caused by traditional cropping.'
            },
            {
                title: 'Smart Image Editing',
                description: 'Intelligently adjust elements, image quality, background, and materials through text prompts while maintaining overall consistency.'
            },
            {
                title: 'Line Art Extraction',
                description: 'Extract hand-drawn style line art from photos to assist design concept and expression.'
            },
            {
                title: 'Lighting Control',
                description: 'Precisely adjust light and shadow direction and intensity to enhance scene realism.'
            },
            {
                title: 'Style Training',
                description: 'Support users to upload images to train custom styles to meet personalized rendering needs.'
            }
        ];
    }
    getTechnicalAdvantages() {
        return [
            {
                title: 'Deep Semantic Understanding',
                description: 'Integrating computer vision and generative AI to accurately parse architectural design elements.'
            },
            {
                title: 'Local Deployment',
                description: 'Support local computing power empowerment to ensure data security and processing efficiency.'
            },
            {
                title: 'Full Process Empowerment',
                description: 'From concept design to final presentation, providing one-stop visualization solutions.'
            }
        ];
    }
    getCustomerValue() {
        return [
            {
                title: 'Efficiency Improvement',
                description: 'Rapidly iterate design solutions and shorten project cycles.'
            },
            {
                title: 'Cost Reduction',
                description: 'Reduce human and time investment in traditional rendering.'
            },
            {
                title: 'Enhanced Expression',
                description: 'Improve proposal persuasiveness and customer satisfaction through high-precision visualization effects.'
            }
        ];
    }
    getContactInfo() {
        return {
            email: 'hyvisioncraft@126.com',
            website: 'visioncraft.qzz.io'
        };
    }
    getSeoInfo(page) {
        const baseInfo = {
            author: 'Hongyuan VisionCraft',
            image: '/images/image10.png',
            url: 'https://visioncraft.qzz.io',
            twitterCard: 'summary_large_image',
            twitterSite: '@HongyuanVision',
            twitterCreator: '@HongyuanVision'
        };
        switch (page) {
            case 'home':
                return {
                    title: 'Hongyuan VisionCraft - AI Architectural Rendering & Visualization Services',
                    description: 'Transform architectural visualization with our AI-driven solutions. Smart rendering, local empowerment, and precise presentation of every design detail for architects, designers, and developers.',
                    keywords: 'AI rendering, architectural visualization, computer vision, generative AI, local deployment, architectural design, 3D rendering, smart image editing, prototype design, precise rendering',
                    ...baseInfo
                };
            case 'about':
                return {
                    title: 'About Us - Hongyuan VisionCraft | AI Architectural Rendering Experts',
                    description: 'Jinan Hongyuan Technology is an innovative enterprise specializing in AI architectural rendering localization services. We empower the entire architectural design process through technological breakthroughs.',
                    keywords: 'Hongyuan VisionCraft, Jinan Hongyuan Technology, AI architectural rendering, computer vision, generative AI, innovation, professionalism, win-win, deep semantic understanding',
                    ...baseInfo
                };
            case 'services':
                return {
                    title: 'Our Services - AI Architectural Visualization Solutions | Hongyuan VisionCraft',
                    description: 'Explore our comprehensive AI-driven services including prototype design, precise rendering, local repainting, seasonal weather simulation, and more for architectural visualization needs.',
                    keywords: 'AI services, architectural visualization, prototype design, precise rendering, local repainting, seasonal weather simulation, intelligent image expansion, smart image editing, line art extraction',
                    ...baseInfo
                };
            case 'contact':
                return {
                    title: 'Contact Us - Hongyuan VisionCraft | AI Rendering Solutions',
                    description: 'Get in touch with our team of AI architectural rendering experts. Contact us for innovative visualization solutions tailored to your architectural design needs.',
                    keywords: 'contact Hongyuan VisionCraft, AI architectural rendering, architectural visualization, contact us, inquiry, support, consultation',
                    ...baseInfo
                };
            default:
                return {
                    title: 'Hongyuan VisionCraft - AI Architectural Rendering Services',
                    description: 'Smart rendering, local empowerment, precisely presenting every design detail with AI-driven architectural visualization solutions.',
                    keywords: 'AI rendering, architectural visualization, computer vision, generative AI, local deployment',
                    ...baseInfo
                };
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map