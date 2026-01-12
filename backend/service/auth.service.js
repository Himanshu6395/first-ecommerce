import bcrypt from "bcryptjs";
import genrateToken from "../utils/generateToken.js";

export default class AuthService {
  constructor(authRepository) {
    this.repo = authRepository;
  }

  async register(name, email, password) {
    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Save user
    const result = await this.repo.registerUser({
      name,
      email,
      password: hashPassword
    });

    // Agar user already exist karta hai
    if (!result.success) {
      return result; // no token
    }

    // Token generate with user
    const token = genrateToken(result.user);

    // Token add karke return karo
    return { 
      ...result,
      token 
    };
  }


  async login(email, password){
    // check user exist
    const user=await  this.repo.findByEmail(email);
    if(!user){
      return({success:false,message:"user not found"})
    }
    //compare password
    const validpassword=await bcrypt.compare(password,user.password);
    if(!validpassword){
      return({success:false,message:"invalid Password"})

    }
    const token=genrateToken(user._id)
    return {
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token,
    };
  }
}
