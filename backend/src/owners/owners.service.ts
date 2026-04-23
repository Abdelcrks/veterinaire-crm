import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Civility } from '../../generated/prisma/enums';

export type CreateOwnerDto = {
  civility: Civility;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type UpdateOwnerDto = {
  civility?: Civility;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

@Injectable()
export class OwnersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.owner.findMany({
      include: { animals: true },
    });
  }

  findOne(id: number) {
    return this.prisma.owner.findUnique({
      where: { id },
      include: { animals: true },
    });
  }

  create(data: CreateOwnerDto) {
    return this.prisma.owner.create({ data });
  }

  update(id: number, data: UpdateOwnerDto) {
    return this.prisma.owner.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.owner.delete({ where: { id } });
  }
}
