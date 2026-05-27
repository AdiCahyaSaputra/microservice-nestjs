import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL as string],
          queue: 'order_queue',
          queueOptions: {
            durable: process.env.NODE_ENV === 'production',
          },
        },
      },
      {
        name: 'DELIVERY_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL as string],
          queue: 'delivery_queue',
          queueOptions: {
            durable: process.env.NODE_ENV === 'production',
          },
        },
      },
    ]),
  ],
  controllers: [TicketController],
  providers: [TicketService, PrismaService],
})
export class TicketModule {}
