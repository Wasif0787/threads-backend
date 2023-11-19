import express from "express";
import { followUnFollowUser, getSearchedUser, getSuggestedUser, getUserFollowers, getUserFollowing, getUserProfile, loginUser, logoutUser, signupUser, updateProfile } from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";
const router = express.Router();

router.get("/profile/:query",getUserProfile)
router.get("/:username/followers",protectRoute,getUserFollowers)
router.get("/:username/following",protectRoute,getUserFollowing)
router.get("/suggested",protectRoute,getSuggestedUser)
router.get("/search/:query",protectRoute,getSearchedUser)
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id",protectRoute,followUnFollowUser);
router.put("/update/:id",protectRoute,updateProfile);

export default router;
