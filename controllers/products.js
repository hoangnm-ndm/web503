import {products} from "../models/Product"
export const getAllProduct = async (req, res) => {
    try {
        // fetch API o day
        if(products && products.length) {
            return res.status(200).json({
                message: "Lay danh sach san pham thanh cong!",
                datas: products
            })
        }
    
        return res.status(404).json({
            message: "Khong tim thay san pham nao!"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}

export const getDetailProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = products.find(item => item.id === id)
        // fetch API o day
        if(product) {
            return res.status(200).json({
                message: "Lay san pham thanh cong!",
                datas: product
            })
        }
    
        return res.status(404).json({
            message: "Khong tim thay san pham!"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}