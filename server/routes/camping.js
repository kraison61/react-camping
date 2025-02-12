const express = require("express");
const router = express.Router();
//Controllers
const {
  listCamping,
  readCamping,
  createCamping,
  updateCamping,
  deleteCamping,
} = require("../controllers/camping");
 const {authCheck} = require('../middlewares/auth')



//@ENDPOINT http://localhost:3000/api/camping
//@METHOD GET (list camping)
//@ACCESS Public
router.get("/camping", authCheck, listCamping);

//@ENDPOINT http://localhost:3000/api/camping/8
//@METHOD GET (read camping)
//@ACCESS Public
router.get("/camping/:id", readCamping);

//@ENDPOINT http://localhost:3000/api/camping
//@METHOD POST (post camping)
//@ACCESS Public
router.post("/camping", createCamping);

//@ENDPOINT http://localhost:3000/api/camping/8
//@METHOD PUT (edit camping)
//@ACCESS Public
router.put("/camping/:id", updateCamping);
//@ENDPOINT http://localhost:3000/api/camping/8
//@METHOD DELETE (delete camping)
//@ACCESS Public
router.delete("/camping/:id", deleteCamping);

module.exports = router;
