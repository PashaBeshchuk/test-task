import { randomDelay } from "../utils/helpers.js";
import __dirname from "../../__dirname.js";

export const sendResponse = async (req, res) => {
  try {
    const delay = randomDelay();
    const requestIndex = req.body.index || 0;

    await new Promise((resolve) => setTimeout(resolve, delay));

    res.status(200).json({ index: requestIndex });
  } catch (error) {
    console.error("Error in controller:", error.message);
    res.status(500).json({ error: error.message });
  }
};
