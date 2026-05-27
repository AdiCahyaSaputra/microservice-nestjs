-- CreateEnum
CREATE TYPE "DispatchStatus" AS ENUM ('DISPATCHED', 'IN_TRANSIT', 'DELIVERED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Dispatch" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "customerName" VARCHAR(100) NOT NULL,
    "item" VARCHAR(200) NOT NULL,
    "status" "DispatchStatus" NOT NULL DEFAULT 'DISPATCHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dispatch_pkey" PRIMARY KEY ("id")
);
