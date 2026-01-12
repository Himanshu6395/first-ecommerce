import AuthService from "../service/adminAuthService.js";

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

 async addCategory(req, res) {
  
    try {
      console.log("Controller: addCategory called", req.body);
      const { name } = req.body;

      const result = await this.authService.addCategory(name);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

 async addSubCategory(req, res) {
  try {
    console.log("Controller: addSubCategory called", req.body);

    const { name, category, isActive } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        message: "SubCategory name and category are required"
      });
    }

    const result = await this.authService.addSubCategory({
      name,
      category,
      isActive
    });

    return res.status(201).json(result);
  } catch (error) {
    console.error("Controller Error:", error);
    return res.status(500).json({ message: error.message });
  }
}

 async getCategories(req, res) {
    try {
      const result = await this.authService.getCategories();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    } 
  }

 async getSubCategoriesByCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const result = await this.authService.getSubCategoriesByCategory(categoryId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async addProduct(req, res) {
    try {
      const productData = req.body;
      const result = await this.authService.addProduct(productData);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } 

  async getPreSignUploadUrl(req,res){
    const{userId,fileName,fileType,fileSize}= req.query;;
    console.log("dskms...................",userId,fileName,fileType,fileSize)
    try{
      const { filePath, uploadUrl }=await this.authService.getPreSignUploadUrl(fileName, fileType);
      await this.authService.fileSave(userId, fileName, fileSize,fileType, filePath)
      res.status(200).json({key:filePath,uploadUrl})
    }
    catch(error){
        console.log("file.controller getPreSignUploadUrl", error)
       res.status(400).json({ error: error.message });
    }
  }


  


}

export default AuthController;
