import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KITCHEN_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL as string],
          queue: 'kitchen_queue',
          queueOptions: {
            durable: process.env.NODE_ENV === 'production',
          },
        },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, PrismaService],
})
export class OrderModule {}
