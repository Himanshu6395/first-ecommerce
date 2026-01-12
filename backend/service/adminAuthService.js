import bcrypt from "bcryptjs";
import genrateToken from "../utils/generateToken.js";
import {PutObjectCommand} from "@aws-sdk/client-s3"
import {getSignedUrl}  from "@aws-sdk/s3-request-presigner"
export default class AuthService {
  constructor(authRepository,S3_BUCKET, s3Client) {
    this.repo = authRepository;
     this.S3_BUCKET = S3_BUCKET;
       this.s3Client = s3Client;
       
  console.log("🟢 AuthService INIT");
  console.log("🪣 S3_BUCKET:", this.S3_BUCKET);
  console.log("🔑 s3Client exists:", !!this.s3Client);
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
    };``
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

  async addCategory(name) {
     console.log("Service: Adding category with name:", name);
    const result = await this.repo.addCategory({ name });
    return result;    
  }

 async addSubCategory(data) {
  try {
    const { name, category, isActive } = data;

    console.log(
      "Service: Adding sub-category",
      { name, category, isActive }
    );

    const result = await this.repo.addSubCategory({
      name,
      category,
      isActive
    });

    return result;
  } catch (error) {
    console.error("Service Error:", error);
    throw error;
  }
}


  async getCategories() {
    // Fetch categories from repository
    const categories = await this.repo.getCategories();
    return categories;
  }

  async getSubCategoriesByCategory(categoryId) {
    const subCategories = await this.repo.getSubCategoriesByCategory(categoryId);
    return subCategories;
  }
  
  async addProduct(data){
    try{
      const result=await this.repo.addProduct(data)
      return result
    }
    catch(error){
      console.error("Service Error:", error);
      throw error;
    }
  }

  async getPreSignUploadUrl(fileName, fileType) {
  try {
     const safeFileName = fileName.replace(/\s+/g, "_");

  const filePath = `Product/${Date.now()}_${safeFileName}`;


    const command = new PutObjectCommand({
      Bucket: this.S3_BUCKET,
      Key: filePath,
      ContentType: fileType,
    });

    const uploadUrl = await getSignedUrl(
      this.s3Client,
      command,
      { expiresIn: 300 }
    );

    return { filePath, uploadUrl };
  } catch (error) {
    console.error("getPreSignUploadUrl error:", error);
    throw error;
  }
}


fileSave = async (
   userId,
  fileName,
  fileSize,   
  fileType,   
  filePath
) => {
  try {
    const file = await this.repo.saveFile(userId, {
      fileName: fileName, 
      filesize: fileSize,       
      fileType: fileType,    
      s3BucketKey: filePath,
      uploadStatus: "UPLOADING",
    });

    return file;

  } catch (error) {
    console.error("AuthService fileSave error:", error);
    throw error;
  }
};

}
