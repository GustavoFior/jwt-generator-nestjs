import { Controller, Get } from '@nestjs/common';
import { OauthService } from '../ouath.service';

@Controller()
export class OauthController {
  constructor(private readonly oauthService: OauthService) { }

  @Get()
  getToken(): Promise<string> {
    return this.oauthService.generateToken();
  }
}
