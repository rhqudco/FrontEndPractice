import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetailView from './ProductDetailView';
import ProductInsert from './ProductInsert';
import ProductList from './ProductList';
import ProductUpdate from './ProductUpdate';


function Top() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">[홈] </Link>
                    <Link to="/productList">[상품조회] </Link>
                    <Link to="/productInsert">[상품 등록] </Link>
                </li>
            </ul >

            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productList" element={<ProductList />} />
                <Route path="/productDetailView/:prdNo" element={<ProductDetailView />} />
                <Route path="/productInsert" element={<ProductInsert />} />
                <Route path="/productUpdate/:prdNo" element={<ProductUpdate />} />
            </Routes>
        </div >
    );
}

export default Top;