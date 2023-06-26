import { Module } from '@nestjs/common';
import { AppController, AppController1 } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
  controllers: [AppController, AppController1],
  providers: [AppService, PostService],
})
export class AppModule {}
