import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CommentController } from './controllers/comment.controller';
import { AppService } from './services/app.service';
import { CommentService } from './services/comment.service';
import { SearchController } from './controllers/search.controller';
import { UsersController } from './controllers/users.controller';
import { FirebaseStrategy } from './strategy/FirebaseStrategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  controllers: [
    AppController,
    CommentController,
    SearchController,
    UsersController,
  ],
  providers: [AppService, CommentService, FirebaseStrategy],
})
export class AppModule {}
