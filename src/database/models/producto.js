import { kMaxLength } from "buffer";
import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLengh: 2,
    MaxLength: 40,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    Max: 10000,
  },
  imagen: {
    type: String,
    required: true,
    validate: (valor) => {
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/.test(valor);
    },
    message: (dato) => `${dato.value} no es una URL de imagen valida`,
  },

  categoria: {
    type: String,
    required: true,
    enum: ['Infusiones', 'Batidos', 'Dulce', 'Salado']
  },

  descripcion_breve: {
    type: String,
    required: true,
    minLengh: 5,
    MaxLength: 40,
  },

  descripcion_amplia: {
    type: String,
    required: true,
    minLengh: 50,
    MaxLength: 500,
  },
});

//crear el modelo de producto

const Producto = mongoose.model('producto', productoSchema);

export default Producto;
