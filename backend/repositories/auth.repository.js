export default class AuthRepository {
  constructor({ User }) {
    this.User = User;
  }

  async registerUser(data) {
    try {
      const { name, email, password } = data;

      const existingUser = await this.User.findOne({ email });
      if (existingUser) {
        return { success: false, message: "User already exists" };
      }

      const newUser = await this.User.create({ name, email, password });

      return { success: true, user: newUser };

    } catch (error) {
      console.error("Repository Error:", error);
      throw new Error("Error registering user");
    }
  }

  
  async findByEmail(email) {
    return await this.User.findOne({ email });
  }
}
