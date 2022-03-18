import React from 'react';
import { Link } from 'react-router-dom';
import './RightBar.css';
import styled from 'styled-components';

import ReactPaginate from 'react-paginate';
import { PaginatedList } from 'react-paginated-list';
import NewsCard from '../NewsCard/NewsCard.js'

const ControlContainer = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: blue;
`;

function RightBar(props) {

    return (
        <div className='right'>
            <p className='right__title'>Recommended for you</p>
            <div className='right__pages'>
                <PaginatedList
                    list = {props.news}
                    itemsPerPage={4}
                    renderList={(list) => (
                        <>
                            {list.map((item) => {
                                return (
                                    <NewsCard
                                        card = {item}
                                    />
                                );
                            })}
                        </>
                    )}
                    nextClass = {'>'}
                    prevClass = {'<'}
                    ControlContainer = {ControlContainer}
                />
            </div>
        </div>
        
    );
}

export default RightBar;