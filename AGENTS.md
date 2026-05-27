## Project Overview

This is my personal learning project to explore how microservice in nestjs works using prisma as ORM and rabbitmq as message broker.

Currently, only have 3 services:

- Order Service
- Kitchen Service
- Delivery Service

## Setup commands

- Install deps: `pnpm install`
- Start dev server: `pnpm start:dev`
- Build and error check from lint: `pnpm build`

## Code style

- TypeScript strict mode
- NestJS standard conventions
- Prisma models placed inside the `/prisma/models`

## Commit Message

- Always use [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) when writing commit message
