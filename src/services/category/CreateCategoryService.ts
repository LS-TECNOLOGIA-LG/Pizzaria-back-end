import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (!name) {
      throw new Error("Name invalid");
    }

    const isExist = await prismaClient.category.findFirst({
      where: {
        name: name,
      },
    });

    if (isExist) {
      throw new Error("This category already exists");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        name: true,
        id: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
