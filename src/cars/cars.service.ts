import { Injectable } from '@nestjs/common';

import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CarsService {
    constructor(private prisma: PrismaService) { }

    create(createCarDto: CreateCarDto) {
        try {
            return this.prisma.car.create({
                data: {
                    title: createCarDto.title,
                    description: createCarDto.description,
                    price: createCarDto.price,
                    date: new Date(createCarDto.date),
                    imageUrl: createCarDto.imageUrl
                }
            });
        } catch (error) {
            throw new HttpException('Error creating car', HttpStatus.BAD_REQUEST);
        }
    }


    findAll(page: number = 1, limit: number = 10, search?: string) {
        limit = Number(limit);
        const skip = (page - 1) * limit;
        const where = search ? { title: { contains: search } } : {};
        

        return this.prisma.car.findMany({
            skip,
            take: limit,
            where,
        });
    }

    findOne(id: number) {
        return this.prisma.car.findUnique({ where: { id } }).then((car) => {
            if (car && car.date) {
                const formattedDate = new Date(car.date).toISOString().split('T')[0];
                return { ...car, date: formattedDate };
            }
            return car;
        });
    }

    update(id: number, updateCarDto: UpdateCarDto) {
        try {
            
            return this.prisma.car.update({
                where: { id }, data: {
                    title: updateCarDto.title,
                    description: updateCarDto.description,
                    price: updateCarDto.price,
                    date: new Date(updateCarDto.date),
                    imageUrl: updateCarDto.imageUrl
                } 
            });
        } catch (error) {
            throw new HttpException('Error update car', HttpStatus.BAD_REQUEST);
        }
    }

    remove(id: number) {
        return this.prisma.car.delete({ where: { id } });
    }
}
