import AuthService from "../service/auth.service.js";

class AuthController {
  constructor(service) {
    this.authService = service;
  }

  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const result = await this.authService.register(name, email, password);
      return res.status(200).json(result);

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

 async login(req,res){
   try{
    const{email,password}=req.body;
    const response=await this.authService.login(email,password);
    if (!response.success) {
        return res.status(400).json(response);
      }

      return res.status(200).json(response);

    } catch (error) {
      console.log("Controller Error:", error);
      return res.status(500).json({ success: false, message: "Login failed" });
    }
 }


}

export default AuthController;
