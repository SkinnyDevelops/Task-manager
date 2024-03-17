import User from '../../../../commons/persistence/models/Auth/User.js';

export default class UserRepository {
  async createUser(properties, options = {}) {
    let user;

    try {
      user = await User.create(properties, options);
    } catch (e) {
      console.error('[Repository][User] user creation error ');
      throw new Error(e);
    }

    return user.toJSON();
  }
}
