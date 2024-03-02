const url = "http://localhost:8000";

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
