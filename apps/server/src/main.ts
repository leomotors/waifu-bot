import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

const PORT = 5375;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  if (!process.env.ADMIN_SECRET) {
    throw new Error(
      "ADMIN_SECRET env is not defined! Add it to .env at root level"
    );
  }

  app.enableCors();

  await app.listen(PORT);
  Logger.log(
    `Application is running on port ${PORT}
Localhost endpoint => http://localhost:${PORT}/graphql
Apollo Studio => https://studio.apollographql.com/sandbox/explorer`
  );
}

bootstrap();
