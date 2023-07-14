import dotenv from "dotenv";
import userValidators from "../validations/user";
import user from "../models/User"

dotenv.config()

export const create = async (req, res) => {
    try {
        const {error} = userValidators.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const data = await user.create(req.body)
        if(!data) {
            return res.status(404).json({
                message: "Create User failed"
            })
        }
        return res.status(200).json({
            message: "User created successfully",
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
        const {error} = userValidators.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const data = await user.findByIdAndUpdate(req.params.id, req.body, { new: true})
        if(!data) {
            return res.status(404).json({
                message: "Update User failed"
            })
        }
        return res.status(200).json({
            message: "User update successfully",
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
        const data = await user.find()
        if(!data || data.length === 0) {
            return res.status(404).json({
                message: "Get users fail"
            })
        }
        return res.status(200).json({
            message: "Get users successfully",
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
        const data = await user.findById(req.params.id)
        if(!data || data.length === 0) {
            return res.status(404).json({
                message: "Get user fail"
            })
        }
        return res.status(200).json({
            message: "Get user successfully",
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
        const data = await user.findByIdAndDelete(req.params.id)
        if(!data) {
            return res.status(404).json({
                message: "Delete user fail"
            })
        }
        return res.status(200).json({
            message: "Delete user successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}