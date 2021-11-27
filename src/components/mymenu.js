import React from "react";
import styled from "styled-components";

const Menu = styled.div`
    background: green;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
`
const MenuItem = styled.div`
    color: white;
`

const Mymenu = () => {
    return (
        <>
            <Menu>
                <MenuItem>nihao</MenuItem>
            </Menu>
        </>
    )
}

export default Mymenu
