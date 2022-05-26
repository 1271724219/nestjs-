import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
// export class AppModule { }
export class AppModule implements NestModule {
configure(consumer: MiddlewareConsumer) {
  consumer//访问cats下的接口之前打印log
    .apply(LoggerMiddleware)
    .forRoutes('cats');
}
}