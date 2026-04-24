import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Species } from '../../generated/prisma/enums';

export type CreateAnimalDto = {
  firstName: string;
  age: number;
  height: number;
  weight: number;
  species: Species;
  ownerId: number;
};

export type UpdateAnimalDto = {
  firstName?: string;
  age?: number;
  height?: number;
  weight?: number;
  species?: Species;
  ownerId?: number;
};

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.animal.findMany({
      include: { owner: true },
    });
  }

  findOne(id: number) {
    return this.prisma.animal.findUnique({
      where: { id },
      include: { owner: true },
    });
  }

  create(data: CreateAnimalDto) {
    return this.prisma.animal.create({ data });
  }

  update(id: number, data: UpdateAnimalDto) {
    return this.prisma.animal.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.animal.delete({ where: { id } });
  }
}
