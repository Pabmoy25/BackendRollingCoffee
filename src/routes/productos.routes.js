import { Router } from "express";
import { crearProductos, listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

// como creo las rutas
router.route('/productos').get(listarProductos).post(crearProductos)

export default router;