import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderWorkerService } from './order-worker.service';
import { EVENT_CONSTANT } from 'src/common/constant/event.constant';
import type { OrderReadyToDeliver } from './type/order-ready-to-deliver.type';

@Controller()
export class OrderWorkerController {
  constructor(private readonly orderWorkerService: OrderWorkerService) {}

  @EventPattern(EVENT_CONSTANT.ORDER_READY_TO_DELIVER)
  async handleOrderReady(@Payload() payload: OrderReadyToDeliver) {
    return this.orderWorkerService.markOrderReady(payload);
  }
}
