import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Top from './Top';
import Home from './Home';

const AxiosSpring = () => {
    // state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/hello');
        console.log(response.data);
        setData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <Top></Top>
        </div>
    );
};

export default AxiosSpring;