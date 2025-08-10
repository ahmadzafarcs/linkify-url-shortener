const router = require("express").Router();
const {
  getAllURls,
  redirectURL,
  shortUrl,
  deleteUrl,
} = require("../controller/url.controller");

router.route("/url").post(shortUrl);
router.route("/urls").get(getAllURls);
router.route("/:urlId").get(redirectURL);
router.route("/:urlId").delete(deleteUrl);

module.exports = router;
