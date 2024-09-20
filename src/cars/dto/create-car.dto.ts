// create-car.dto.ts
import { IsString, IsNumber, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsNumber()
    price: number;

    @IsString()
    date: string;

    @IsUrl()
    imageUrl: string;
}
