import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderReadyToDeliver } from './type/order-ready-to-deliver.type';
import { OrderStatus } from 'generated/prisma/client';

@Injectable()
export class OrderWorkerService {
  constructor(private readonly prisma: PrismaService) {}

  async markOrderReady({ orderId }: OrderReadyToDeliver) {
    await this.prisma.order.update({
      where: { id: orderId },
      data: { status: OrderStatus.READY },
    });

    console.log('Order worker: Order marked as ready', orderId);
  }
}
