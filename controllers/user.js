import UserModel from "../models/User";

export const getAllUsers = async (req, res) => {
  try {
    const [rows] = await UserModel.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const [rows] = await UserModel.query("SELECT * FROM users WHERE id = ?", [
      userId,
    ]);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const createUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    await UserModel.query("INSERT INTO users (username, email) VALUES (?, ?)", [
      username,
      email,
    ]);
    res.send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  try {
    await UserModel.query(
      "UPDATE users SET username = ?, email = ? WHERE id = ?",
      [username, email, userId]
    );
    res.send("User updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await UserModel.query("DELETE FROM users WHERE id = ?", [userId]);
    res.send("User deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
