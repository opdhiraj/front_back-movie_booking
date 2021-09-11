const {
  signUp,
  login,
  logout,
  getCouponCode,
  bookShow,
} = require("../controllers/user.controller");
const userRouter = require("express").Router();
userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.post("/logout", logout);

userRouter.post("/bookings", bookShow);
userRouter.get("/coupons", getCouponCode);

module.exports = userRouter;
