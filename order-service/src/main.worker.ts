import { NestFactory } from '@nestjs/core';
import { AppWorkerModule } from './app.worker.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppWorkerModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL as string],
        queue: 'order_queue',
        queueOptions: {
          durable: process.env.NODE_ENV === 'production',
        },
      },
    },
  );

  await app.listen();

  console.log('🛒 Order worker is listening on order_queue');
}
void bootstrap();
