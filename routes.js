import { Router } from "express"
import { brinquedoCreate, brinquedoIndex, brinquedoDelete, brinquedoUpdate, brinquedoOrderByPrice, brinquedoCountByBrand, brinquedoStatistics, brinquedoAdjustPrice} from "./controllers/brinquedoController.js"

const router = Router()

router.get("/brinquedos", brinquedoIndex)
      .post("/brinquedos", brinquedoCreate)
      .put("/brinquedos/:id", brinquedoUpdate)
      .delete("/brinquedos/:id", brinquedoDelete)
      .get("/brinquedos-por-preco", brinquedoOrderByPrice)
      .get("/brinquedos-conta-por-marca", brinquedoCountByBrand)
      .get("/brinquedos-estatiscas", brinquedoStatistics)
      .put("/brinquedos-ajustar-preco", brinquedoAdjustPrice)
      
export default router 