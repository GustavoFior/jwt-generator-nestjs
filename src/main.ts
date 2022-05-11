import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const documentBuilder = new DocumentBuilder();
  documentBuilder.setTitle("setTitle NAME")
    .setDescription("config.get('description')")
    .setVersion("config.get('version')")
    .addTag("ENV")
    .addBearerAuth({
      name: 'Authorization',
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header'
    }, 'Authorization');
  const swaggerDocument = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup('swagger', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
