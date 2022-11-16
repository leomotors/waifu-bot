import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!process.env.ADMIN_SECRET) {
    throw new Error(
      "ADMIN_SECRET env is not defined! Add it to .env at root level"
    );
  }

  const PORT = 5375;
  await app.listen(PORT);
  Logger.log(
    `Server is running on port ${PORT} http://localhost:${PORT}/graphql`
  );
}

bootstrap();
