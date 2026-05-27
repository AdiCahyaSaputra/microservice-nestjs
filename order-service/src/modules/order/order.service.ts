import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create.dto';
import { ClientProxy } from '@nestjs/microservices';
import { EVENT_CONSTANT } from 'src/common/constant/event.constant';
import { ResponseHelper } from 'src/common/helper/response.helper';

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('KITCHEN_SERVICE') private readonly kitchenService: ClientProxy,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const order = await this.prisma.order.create({
      data: createOrderDto,
    });

    this.kitchenService.emit(EVENT_CONSTANT.KITCHEN_ORDER_CREATED, order);

    return ResponseHelper.success({ data: order });
  }
}
