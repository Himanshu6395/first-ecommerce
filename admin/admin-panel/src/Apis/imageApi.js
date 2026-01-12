import axios from "axios";
import { API_ENDPOINTS } from "../api/axiosInstance.js";

export const getPresignedUrl = async (img, userId) => {
  try {
    const res = await axios.get(
      `${API_ENDPOINTS.ADMIN}/get-presigned-url`,
     {
      params: {
        fileName: img.name,
        fileType: img.type,
        fileSize: img.size,
        userId: userId,
      }
    }
    );

    return res.data; 
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    throw error;
  }
};

export const uplaodImageToS3 = async (uploadUrl, file) => {
  console.log("➡️ PUT start:", file);
  console.log("➡️ PUT start.....:", uploadUrl);

  const res = await fetch(uploadUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type,
    },
  });

  console.log("⬅️ PUT done. Status:", res.status);

  if (!res.ok) {
    const t = await res.text();
    console.error(" S3 error body:", t);
    throw new Error("S3 upload failed");
  }
};

