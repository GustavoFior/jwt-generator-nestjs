import { Module } from '@nestjs/common';
import { OauthModule } from './oauth/oauth.module';

@Module({
  imports: [OauthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
