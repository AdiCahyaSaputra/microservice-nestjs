import { Module } from '@nestjs/common';
import { OrderWorkerController } from './order-worker.controller';
import { OrderWorkerService } from './order-worker.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OrderWorkerController],
  providers: [OrderWorkerService],
})
export class OrderWorkerModule {}
