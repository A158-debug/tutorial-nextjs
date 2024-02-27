const Reviews_Id = ({ params }: {
    params: {
        reviews_id: string,
        product_id: string
    }
}) => {
    return (
        <>
        <div>Reviews_Id : {params.reviews_id}</div>
        <div>Product_Id : {params.product_id}</div>
        </>
    )
}

export default Reviews_Id