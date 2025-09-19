import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // 配置模板引擎
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  
  // 配置静态文件服务
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  // 让系统自动分配可用端口，如果有环境变量则使用环境变量中的端口
  const server = await app.listen(process.env.PORT ?? 0);
  const address = server.address();
  const port = typeof address === 'string' ? address : address?.port;
  console.log(`Application is running on port: ${port}`);
}
bootstrap();
