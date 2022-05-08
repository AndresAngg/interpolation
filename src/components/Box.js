import React from "react";
import { Container } from '@mui/material/'

const Box = (props) => {
    return (
        <div>
            <Container fixed>
                {props.children}
            </Container>
        </div>
    )
}
export default Box