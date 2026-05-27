import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClientProxy } from '@nestjs/microservices';
import { OrderCreated } from './type/order-created.type';
import { TicketStatus } from 'generated/prisma/client';
import { EVENT_CONSTANT } from 'src/common/constant/event.constant';

@Injectable()
export class TicketService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('ORDER_SERVICE') private readonly orderService: ClientProxy,
    @Inject('DELIVERY_SERVICE') private readonly deliveryService: ClientProxy,
  ) {}

  async handleOrderCreated(order: OrderCreated) {
    const ticket = await this.prisma.ticket.create({
      data: {
        orderId: order.id,
        customerName: order.customerName,
        item: order.item,
        status: TicketStatus.RECEIVED,
      },
    });

    // Simulate cooking time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await this.prisma.ticket.update({
      where: { id: ticket.id },
      data: { status: TicketStatus.COMPLETED },
    });

    this.orderService.emit(EVENT_CONSTANT.ORDER_READY_TO_DELIVER, {
      orderId: order.id,
    });

    this.deliveryService.emit(EVENT_CONSTANT.DELIVERY_ORDER_READY, {
      orderId: order.id,
      customerName: order.customerName,
      item: order.item,
    });

    console.log('Kitchen: Order ready for delivery', order.id);
  }
}
