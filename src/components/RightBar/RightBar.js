import React from 'react';
import { Link } from 'react-router-dom';
import './RightBar.css';
import styled from 'styled-components';

import ReactPaginate from 'react-paginate';
import { PaginatedList } from 'react-paginated-list';
import NewsCard from '../NewsCard/NewsCard.js'

const ControlContainer = styled.ul`
    display: flex;
    flex-direction: row;
    margin: auto;
    border: 0;
    font-family: Montserrat-Bold 
`;

export const ControlItem = styled.li`
  list-style-type: none;
  font-family: Montserrat-Bold    
  padding: 10px;
  border: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #018BAF;  
  cursor: pointer;
  display: flex;
  transition: 0.3s ease all;
  &.active {
    color: #F57616;
    text-decoration: underline;
  }
`;

const PaginatedListContainer = styled.div`
  background: green;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 5px;
  width: 100%;
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
                    ControlItem = {ControlItem}
                />
            </div>
        </div>
        
    );
}

export default RightBar;