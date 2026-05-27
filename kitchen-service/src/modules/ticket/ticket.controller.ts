import { Controller } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { EVENT_CONSTANT } from 'src/common/constant/event.constant';
import type { OrderCreated } from './type/order-created.type';

@Controller()
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  /**
   * Learning Notes:
   * Event Pattern is being used to listen to the event from the order service.
   */
  @EventPattern(EVENT_CONSTANT.KITCHEN_ORDER_CREATED)
  async handleOrderCreated(@Payload() order: OrderCreated) {
    return this.ticketService.handleOrderCreated(order);
  }
}
