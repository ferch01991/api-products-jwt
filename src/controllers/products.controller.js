import { response } from "express"

export const createProduct = (req, res) => {
    res.json("Crear los productos")
}
export const getProducts = (req, res) => {
    res.json("Todos los productos")
}
export const getProductById = (req, res) => {}
export const updateProductById = (req, res) => {}
export const deleteProductById = (req, res) => {}