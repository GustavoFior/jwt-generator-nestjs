import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OauthController } from './service/controller/oauth.controller';
import { OauthService } from './service/ouath.service';


@Module({
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
  controllers: [OauthController],
  providers: [OauthService],
})
export class OauthModule { }
