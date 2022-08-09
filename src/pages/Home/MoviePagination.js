<<<<<<< HEAD
import { Pagination } from 'antd';
import React from 'react';

export default function MoviePagination() {
    return (
        <Pagination defaultCurrent={1} total={30}/>
    );
}



=======
import { Pagination } from "antd";
import React from "react";

export default function MoviePagination(props) {
  const changePage = (page, pageSize) => {
    props.setPageInfo({ pageNumber: page, pageSize: pageSize });
  };
  return (
    <Pagination
      current={props.pageInfo.pageNumber}
      pageSize={props.pageInfo.pageSize}
      total={props.totalMovies}
      className="movie-pagination"
      onChange={changePage}
    />
  );
}
>>>>>>> ccb085996238d2637c4d2256e7ab303ca5e6a7c9
