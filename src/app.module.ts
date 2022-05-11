import { Module } from '@nestjs/common';
import { IoasysModule } from './ioasys/ioasys.module';
import { OauthModule } from './oauth/oauth.module';

@Module({
  imports: [OauthModule, IoasysModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
