import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OwnersService } from './owners.service';
import type { CreateOwnerDto, UpdateOwnerDto } from './owners.service';

@Controller('owners')
export class OwnersController {
  constructor(private ownersService: OwnersService) {}

  @Get()
  findAll() {
    return this.ownersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownersService.findOne(+id);
  }

  @Post()
  create(@Body() data: CreateOwnerDto) {
    return this.ownersService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateOwnerDto) {
    return this.ownersService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownersService.remove(+id);
  }
}
