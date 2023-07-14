import dotenv from "dotenv";
import Product from "../models/product";
import productValidators from "../validations/product";

dotenv.config()

export const create = async (req, res) => {
    try {
        const {error} = productValidators.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const data = await Product.create(req.body)
        if(!data) {
            return res.status(404).json({
                message: "Create Product failed"
            })
        }
        return res.status(200).json({
            message: "Product created successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const update = async (req, res) => {
    try {
        const {error} = productValidators.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true})
        if(!data) {
            return res.status(404).json({
                message: "Update Product failed"
            })
        }
        return res.status(200).json({
            message: "Product update successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const data = await Product.find()
        if(!data || data.length === 0) {
            return res.status(404).json({
                message: "Get products fail"
            })
        }
        return res.status(200).json({
            message: "Get products successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getDetail = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id)
        if(!data || data.length === 0) {
            return res.status(404).json({
                message: "Get product fail"
            })
        }
        return res.status(200).json({
            message: "Get product successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const remove = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        if(!data) {
            return res.status(404).json({
                message: "Delete product fail"
            })
        }
        return res.status(200).json({
            message: "Delete product successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}