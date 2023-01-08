import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // アプリケーション作成中に起きたエラーを吐き出しサーバ自体が落ちないようにするフラグ: abortOnError
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // メソッドハンドラによって受け取られるべきでない、プロパティをフィルタリングできる
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
