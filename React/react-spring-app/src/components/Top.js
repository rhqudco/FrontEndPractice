import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';

function Top() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">[홈] </Link>
                    <Link to="/productList">[상품조회] </Link>
                    <Link to="/">[상품 등록] </Link>
                </li>
            </ul >

            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productList" element={<ProductList />} />
            </Routes>
        </div >
    );
}

export default Top;