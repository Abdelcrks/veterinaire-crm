import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import type { CreateAnimalDto, UpdateAnimalDto } from './animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(+id);
  }

  @Post()
  create(@Body() data: CreateAnimalDto) {
    return this.animalsService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateAnimalDto) {
    return this.animalsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalsService.remove(+id);
  }
}
