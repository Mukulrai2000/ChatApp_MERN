import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb://${USERNAME}:${PASSWORD}@ac-4z8c7tp-shard-00-00.wunnb7v.mongodb.net:27017,ac-4z8c7tp-shard-00-01.wunnb7v.mongodb.net:27017,ac-4z8c7tp-shard-00-02.wunnb7v.mongodb.net:27017/?ssl=true&replicaSet=atlas-ugfny9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=chattyapp`,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];
    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
