import UserRepository from '../repo/userRepository.js';

class CreateUser {
  constructor({ idQuery, properties }) {
    this.idQuery = idQuery;
    this.properties = properties;
  }

  async execute() {
    try {
      const repo = new UserRepository();
      const user = await repo.createUser(
        this.properties,
      );

      return {
        result: user,
        status: 201,
        message: 'user created',
        idQuery: this.idQuery,
      };
    } catch (e) {
      return {
        status: 500,
        message: 'Error while creating user',
        idQuery: this.idQuery,
      };
    }
  }
}

export default CreateUser;
