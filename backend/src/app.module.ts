import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { OwnersModule } from './owners/owners.module';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [OwnersModule, AnimalsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
