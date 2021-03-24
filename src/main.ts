import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder().addBearerAuth()
  .setTitle('API')
  .setDescription("Nestjs Swagger")
  .setVersion("1.0.0")
  .addTag("Users")
  .addTag("Tasks")
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true
    }
  });

  await app.listen(3000);
}
bootstrap();
