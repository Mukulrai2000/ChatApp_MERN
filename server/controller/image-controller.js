import mongoose from "mongoose";
import grid from "gridfs-stream";

const url = "http://localhost:8000";

let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json("File not found");
    }

    const imgUrl = `${url}/file/${req.file.filename}`;

    return res.status(200).json(imgUrl);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
