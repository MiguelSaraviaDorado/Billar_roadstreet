//IMPORT
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app    = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Billar RoadStreet')
  .setDescription('API Para los diferentes registros')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
