import express from "express";
import useCtrl from "../controllers/user.controller";

const router = express.Router();

router.route("/api/users").get(useCtrl.list).post(useCtrl.create);

router
  .route("/api/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.read)
  .delete(userCtrl.remove);

router.param("userId", userCtrl.userByID);

export default router;
