import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    const data = [
        {
            title: 'Mustang GT',
            description: 'Nuevo Mustang GT premium 2024 con performance package.',
            price: 260000,
            date: '2024-06-01',
            imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF/?text=Mustang+GT',
        },
        {
            title: 'Mustang Mach-E',
            description: 'Mustang Mach-E 2023 eléctrico.',
            price: 300000,
            date: '2024-06-02',
            imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF/?text=Mach-E',
        },
        {
            title: 'Mustang Shelby',
            description: 'Mustang Shelby GT500, pura potencia.',
            price: 500000,
            date: '2024-06-03',
            imageUrl: 'https://via.placeholder.com/150/FFFF00/000000/?text=Shelby',
        },
        {
            title: 'Ford Focus',
            description: 'Ford Focus 2023, compacto y eficiente.',
            price: 150000,
            date: '2024-06-04',
            imageUrl: 'https://via.placeholder.com/150/00FF00/000000/?text=Focus',
        },
        {
            title: 'Ford Fiesta',
            description: 'Ford Fiesta 2023, ágil y divertido.',
            price: 120000,
            date: '2024-06-05',
            imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF/?text=Fiesta',
        },
        {
            title: 'Ford Explorer',
            description: 'SUV Ford Explorer, espacio y confort.',
            price: 350000,
            date: '2024-06-06',
            imageUrl: 'https://via.placeholder.com/150/00FFFF/000000/?text=Explorer',
        },
        {
            title: 'Ford Bronco',
            description: 'Ford Bronco, aventura sobre ruedas.',
            price: 400000,
            date: '2024-06-07',
            imageUrl: 'https://via.placeholder.com/150/800080/FFFFFF/?text=Bronco',
        },
        {
            title: 'Ford Edge',
            description: 'Ford Edge, elegancia y rendimiento.',
            price: 280000,
            date: '2024-06-08',
            imageUrl: 'https://via.placeholder.com/150/008000/FFFFFF/?text=Edge',
        },
        {
            title: 'Ford F-150',
            description: 'La mejor camioneta, Ford F-150.',
            price: 400000,
            date: '2024-06-09',
            imageUrl: 'https://via.placeholder.com/150/FFA500/FFFFFF/?text=F-150',
        },
        {
            title: 'Ford Ranger',
            description: 'Ford Ranger, fuerza y durabilidad.',
            price: 300000,
            date: '2024-06-10',
            imageUrl: 'https://via.placeholder.com/150/FFC0CB/000000/?text=Ranger',
        },
    ]
    await prisma.car.createMany({
        data: data.map((c: any) => { return { ...c, date: new Date(c.date) }}) ,
    });
    console.log('Seeded 10 cars successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
