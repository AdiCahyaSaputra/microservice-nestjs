export enum OrderStatus {
  PENDING = 'PENDING',
  PREPARING = 'PREPARING',
  READY = 'READY',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export type OrderCreated = {
  id: string;
  customerName: string;
  item: string;
  status: OrderStatus;
  quantity: number;
  createdAt: string;
  updatedAt: string;
};
