import React from "react";
import { Button } from "react-bootstrap";

interface CounterProps {
    value: number
}

export const Counter = (props: CounterProps)=>{
    return (
        <>
        <h1 className="display-1 leftside lead">
            {props.value.toLocaleString()}
        </h1>
        </>
    )
}