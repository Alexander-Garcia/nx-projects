import { prisma } from '@projects/prisma';

class UserService {
  static async getAllUsers() {
    return await prisma.user.findMany();
  }
}

export default UserService;
