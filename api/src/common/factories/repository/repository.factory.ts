import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

export class RepositoryFactory<K, T = void, J = void> {
  @Inject(PrismaService)
  protected readonly prismaService: PrismaService;

  constructor(public model: string) {}

  createMany(data: T[]) {
    return this.prismaService[this.model].createMany({
      data,
      skipDuplicates: true,
    });
  }

  create(data: T): Promise<K> {
    return this.prismaService[this.model].create({
      data: {
        ...data,
      },
    });
  }

  upsert({ id, ...data }: T & { id?: string }): Promise<K> {
    return this.prismaService[this.model].upsert({
      create: { ...data },
      update: { ...data },
      where: { id },
    });
  }

  update({ id, ...data }: J & { id: number }): Promise<K | null> {
    return this.prismaService[this.model].update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  count(where: any): Promise<number> {
    return this.prismaService[this.model].count({ where });
  }

  delete(id: number): Promise<K | null> {
    return this.prismaService[this.model].delete({
      where: {
        id,
      },
    });
  }

  deleteMany() {
    return this.prismaService[this.model].deleteMany();
  }
}
