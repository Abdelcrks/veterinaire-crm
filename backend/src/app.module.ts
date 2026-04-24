import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { OwnersModule } from './owners/owners.module';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [OwnersModule, AnimalsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
