import { Metadata } from "next";

type Props ={
    params:{
        product_id: string
    }
}

export const generateMetaData = ({params}:Props):Metadata => {

    return {
        title:`Product ${params.product_id}`,
    }
}

const Product_Id = ({params}: Props) => {
    return (
        <div>Product_Id : {params.product_id}</div>
    )
}

export default Product_Id