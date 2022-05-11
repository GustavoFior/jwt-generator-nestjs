import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OauthService } from '../ouath.service';

@ApiTags('oauth')
@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) { }

  @Get()
  getToken(): Promise<string> {
    return this.oauthService.generateToken();
  }
}
