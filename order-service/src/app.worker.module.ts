import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderWorkerModule } from './modules/order-worker/order-worker.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), OrderWorkerModule],
})
export class AppWorkerModule {}
