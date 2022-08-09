import { Pagination } from 'antd';
import React from 'react';

export default function MoviePagination(props) {
    const changePage=(page,pageSize)=>{
       props.setPageInfo({pageNumber:page, pageSize:pageSize})
    }
    return (
        <Pagination current={props.pageInfo.pageNumber} pageSize={props.pageInfo.pageSize} total={props.totalMovies} className="movie-pagination" onChange={changePage}/>
    );
}
