// prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [PrismaService],
    exports: [PrismaService], // Exportar el PrismaService para usarlo en otros módulos
})
export class PrismaModule { }
