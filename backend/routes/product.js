import * as controllers from "../controllers"
import  express from "express";
const router = express.Router();

router.get('/', controllers.getProList);
router.post('/', controllers.createProduct);
router.put('/', controllers.updateProduct);
module.exports = router;