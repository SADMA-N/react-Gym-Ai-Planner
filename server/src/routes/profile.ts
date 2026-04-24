import { Router, type Request, type Response } from "express"; // using to generate our endpoints
import { profile } from "node:console";

export const profileRouter = Router();

profileRouter.post("/", (req: Request, res: Response) => {
  try {
    const { userId, ...profileData } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    console.log("Received profile data:", { userId, ...profileData });

    const {
      goal,
      experience,
      daysPerWeek,
      sessionLength,
      equipment,
      injuries,
      preferredSplit,
    } = profileData;

    if (
      !goal ||
      !experience ||
      !daysPerWeek ||
      !sessionLength ||
      !equipment ||
      !preferredSplit
    ) {
      return res.status(400).json({ error: "Missing required profile fields" });
    }
  } catch (error) {
    console.error("Error occurred while processing profile data:", error);
    res.status(500).json({ error: "Failed to save profile data" });
  }
});
