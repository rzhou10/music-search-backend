import { connection } from "../utils/mySqlConnection";

export const login = async (req, res) => {
  try {
    if (!req.body.username) {
      throw new Error('Username was not provided');
    }
    if (!req.body.password) {
      throw new Error('Password was not provided');
    }

    connection.connect();

    const result = connection.query(``)
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

export const signUp = async (req, res) => {
  try {
    if (!req.body.username) {
      throw new Error('Username was not provided');
    }
    if (!req.body.password) {
      throw new Error('Password was not provided');
    }

    return res.status(200);
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}