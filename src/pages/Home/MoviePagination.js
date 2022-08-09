import { Pagination } from 'antd';
import React from 'react';

export default function MoviePagination() {
    return (
        <Pagination defaultCurrent={1} total={30} className="movie-pagination"/>
    );
}
