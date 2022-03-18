import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

function ProductListItem(props) {
    return (
        <div>
            <tr>
                <td><Link to={"/productDetailView/" + props.prd.prdNo}>{props.prd.prdNo}</Link></td>
                <td>{props.prd.prdName}</td>
                <td>{props.prd.prdPrice}</td>
                <td>{props.prd.prdCompany}</td>
                <td>{props.prd.prdStock}</td>
            </tr>
        </div>
    );
}

export default ProductListItem;