import axios from "axios"
export const getAllProduct = async (req, res) => {
    try {
        const {data} = await axios.get("http://localhost:3000/products")
        console.log(data)
        // fetch API o day
        if(data && data.length) {
            return res.status(200).json({
                message: "Lay danh sach san pham thanh cong!",
                data
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

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const datas = products.filter(item => item.id != id)
        // fetch API o day
        if(datas) {
            return res.status(200).json({
                message: "Xoas san pham thanh cong!",
                datas
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