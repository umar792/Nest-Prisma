import { Module } from '@nestjs/common';
import { PrismService } from './prisma.service';

@Module({
  providers: [PrismService],
  exports: [PrismService],
})
export class PrismaModule {}
