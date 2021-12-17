import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const DAYS_TO_EXPIRE = 365;

@Injectable()
export class OauthService {
  constructor(private readonly jwtService: JwtService) { }

  async generateToken(): Promise<string> {
    const payload = { exp: Math.floor(Date.now() / 1000) + ((DAYS_TO_EXPIRE * 60) * 60) };
    const accessToken = await this.jwtService.signAsync(payload);
    console.log(accessToken);
    return accessToken;
  }
}
