import { hash } from "bcryptjs";
import prismaClient from "../../prisma";
import { isValidPassword, validateEmail } from "../validations/validations";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ email, name, password }: UserRequest) {
    if (!email) {
      throw new Error("Invalid email");
    }

    if (!validateEmail(email)) {
      throw new Error("Invalid email");
    }

    if (!password) {
      throw new Error("Por favor insira uma senha.");
    }

    if (!isValidPassword(password)) {
      throw new Error("A senha não atende aos requisitos.");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Usuário já existe");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return user;
  }
}
export { CreateUserService };
