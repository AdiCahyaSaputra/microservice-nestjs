-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('RECEIVED', 'PREPARING', 'COMPLETED');

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "customerName" VARCHAR(100) NOT NULL,
    "item" VARCHAR(200) NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'RECEIVED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
