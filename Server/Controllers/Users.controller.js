const { createUser, getUsers, updateUser } = require("../Models/User.model");

const cloudinary = require("cloudinary").v2;

async function uploadToCloudinary(file, folder = "VishalSoni", quality) {
  try {
    if (!file) {
      throw new Error("No file uploaded!"); // Debugging step
    }

    const options = { folder };
    options.resource_type = "auto";
    if (quality) {
      options.quality = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
}

// const addUser = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       password,
//       role = "member",
//       // join_date = new Date(),
//     } = req.body;

//     createUser(name, email, phone, password, (err, result) => {
//       if (err) return res.status(500).json({ error: err.message });
//       res
//         .status(201)
//         .json({
//           message: "User added!",
//           userId: result.insertId,
//           user: result,
//         });
//     });
//   } catch (error) {
//     console.error("Error in addUser:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

const addUser = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      role = "member",
      // join_date = new Date(),
    } = req.body;

    const result = await createUser(name, email, phone, password);

    res.status(201).json({
      message: "User added!",
      userId: result.insertId,
      user: result,
    });
  } catch (error) {
    console.error("Error in addUser:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAllUser = (req, res) => {
  getUsers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    // console.log(results);
    res.json(results);
  });
};

const updateUserById = (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    password,
    phone,
    join_date = new Date(),
    role = "member",
  } = req.body;

  updateUser(
    id,
    name,
    email,
    password,
    phone,
    join_date,
    role,
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "User updated!" });
    }
  );
};

module.exports = {
  addUser,
  getAllUser,
  updateUserById,
};
