import React, { Component } from 'react';
import Nav from '../Nav';

function Header(props) {
    return (
        <div>
            <h1>Anthony Her</h1>
            <Nav currentPage={props.currentPage} handlePageChange={props.handlePageChange}></Nav>
        </div>
    );
}

export default Header