import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IoasysService } from '../ioasys.service';

@ApiTags('ioasys')
@Controller('ioasys')
export class IoasysController {
  constructor(private readonly ioasysService: IoasysService) { }

  @Get()
  getLikes(): Promise<number> {
    return this.ioasysService.getLikes();
  }
}
