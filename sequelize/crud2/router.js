import express from "express";
import clients from "./src/controllers/clientController.js";
const router = express.Router();

router.get("/users", clients.findAll);
router.post("/users", clients.addClient);
router.get("/users/:id", clients.findClient);
router.put("/users/:id", clients.updateClient);
router.delete("/users/:id", clients.deleteClient);

export { router as default };
