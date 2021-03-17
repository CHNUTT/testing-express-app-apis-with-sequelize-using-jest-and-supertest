const { User, Item } = require('../models');

const errorMsg = { USER_NOT_FOUND: 'User not found!' };

const createError = (code, msg) => {
  const error = new Error(msg);
  error.statusCode = code;
  return error;
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id },
      include: [{ model: Item }],
    });
    if (!user) throw createError(404, errorMsg.USER_NOT_FOUND);

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await User.createUser(req.body);
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updatedUser] = await User.update(req.body, {
      where: { id: id },
    });

    if (!updatedUser) throw createError(404, errorMsg.USER_NOT_FOUND);

    return res.status(201).json({ user: updatedUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.destroy({
      where: { id: id },
    });

    if (!deletedUser) throw createError(404, errorMsg.USER_NOT_FOUND);

    res.status(200).send({ user: deletedUser });
  } catch (error) {}
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
