import { Router } from "express";
import { crearProductos, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

// como creo las rutas
router.route('/productos').get(listarProductos).post(crearProductos)
router.route('/productos/:id').get(obtenerProducto)

export default router;