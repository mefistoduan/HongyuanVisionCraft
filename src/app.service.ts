import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 网站基本信息
  getSiteInfo() {
    return {
      title: 'Hongyuan VisionCraft',
      slogan: 'Smart Rendering, Local Empowerment, Precisely Presenting Every Design Detail',
      footerText: 'Hongyuan VisionCraft: Where Design Meets Infinite Possibility',
    };
  }

  // 公司简介
  getAboutUs() {
    return {
      title: 'About Us',
      content: 'Jinan Hongyuan Technology is an innovative enterprise focusing on AI architectural rendering localization services. We utilize advanced computer vision and generative AI technology to provide architects, designers, and developers with efficient and precise image generation and enhancement solutions. Adhering to the core values of "innovation, professionalism, and win-win", the company is committed to empowering the entire architectural design process through technological breakthroughs and promoting intelligent transformation in the industry.'
    };
  }

  // 核心服务
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

  // 技术优势
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

  // 客户价值
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

  // 联系信息
  getContactInfo() {
    return {
      email: 'hyvisioncraft@126.com',
      website: 'visioncraft.qzz.io'
    };
  }

  // SEO信息
  getSeoInfo(page: string) {
    const baseInfo = {
      author: 'Hongyuan VisionCraft',
      keywords: 'AI rendering, architectural visualization, computer vision, generative AI, local deployment',
      image: '/images/logo.png',
      url: 'https://visioncraft.qzz.io'
    };

    switch (page) {
      case 'home':
        return {
          title: 'Hongyuan VisionCraft - AI Architectural Rendering Services',
          description: 'Smart rendering, local empowerment, precisely presenting every design detail. We provide AI-driven architectural visualization solutions.',
          ...baseInfo
        };
      case 'about':
        return {
          title: 'About Us - Hongyuan VisionCraft',
          description: 'Learn about our innovative enterprise focusing on AI architectural rendering localization services.',
          ...baseInfo
        };
      case 'services':
        return {
          title: 'Our Services - Hongyuan VisionCraft',
          description: 'Explore our AI-driven services including prototype design, precise rendering, and more for architectural visualization.',
          ...baseInfo
        };
      case 'contact':
        return {
          title: 'Contact Us - Hongyuan VisionCraft',
          description: 'Get in touch with us for AI architectural rendering solutions and services.',
          ...baseInfo
        };
      default:
        return baseInfo;
    }
  }
}
