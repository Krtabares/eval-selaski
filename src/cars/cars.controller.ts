import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags('cars')
@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }


    @ApiOperation({ summary: 'Create a new car' })
    @ApiResponse({ status: 201, description: 'Car created successfully.' })
    @Post()
    create(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los carros con paginación y búsqueda opcional' })
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'Número de página para la paginación', example: 1 })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Cantidad de carros por página', example: 10 })
    @ApiQuery({ name: 'search', required: false, type: String, description: 'Término de búsqueda para filtrar carros por título', example: 'Toyota' })
    findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('search') search?: string
    ) {
        return this.carsService.findAll(page, limit, search);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.carsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
        return this.carsService.update(+id, updateCarDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.carsService.remove(+id);
    }
}
