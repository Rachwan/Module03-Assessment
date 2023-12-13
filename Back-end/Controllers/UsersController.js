import User from "../models/user";

// Create new user
export const createUser = async (req, res) => {
  const { Name, Email, Password} = req.body;

  try {
    const newUser = await User.create({
      Name,
      Email,
      Password,
    });
    return res
      .status(200)
      .json({ message: "user created successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "user couldn't be created" });
  }
};

// Update user

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const { Name, Email } = req.body;
    await User.update(
      { Name, Email, Password},
      {
        where: { id },
      }
    );
    return res.status(200).json({ message: "user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Trouble updating user info" });
  }
};

// Delete user

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.destroy({ where: { id } });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: " could not delete user" });
  }
};
