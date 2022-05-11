import { Module } from '@nestjs/common';
import { IoasysController } from './services/controller/ioasys.controller';
import { IoasysService } from './services/ioasys.service';

@Module({
  controllers: [IoasysController],
  providers: [IoasysService],
})
export class IoasysModule { }
