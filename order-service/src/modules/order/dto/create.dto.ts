import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  customerName: string;

  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  item: string;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  quantity: number;
}
