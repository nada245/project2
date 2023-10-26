import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:9000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    const deleteProduct = (productid) => {
        console.log(productid)
    }
    return (
        <>
            <h1>Products Page</h1>
            <Link to={"/products/add"} className='btn btn-success mt-3'>Add New Products</Link>

            <table className="table table-striped mt-5 ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>OPERATION</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm' onClick={() => { deleteProduct(product.id) }}>Delete</button>
                                    <Link to={`products/${product.id}`} className='btn btn-info btn-sm'>View</Link>
                                    <button className='btn btn-primary btn-sm'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </>
    )
}

export default Products