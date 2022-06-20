export const saveTransaction = async (req, res) => {
  try {
    let data = [];

    req.body.map((dt) => {
      dt = JSON.stringify(dt);
      data.push(dt.replace(/[{}]/g, "").replace(/[""]/g, ""));
    });

    return res.status(200).json({ message: "Uploaded successfully", data });
  } catch (ex) {
    return res
      .status(400)
      .send({ message: "Failed uploading", err: ex.message });
  }
};
