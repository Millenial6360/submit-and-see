import React from 'react'
import Result from "./Result" ;

export default function Resultlist(props) {
    return (
        <div>
            <h2>You have Entered</h2>
            {props.list.map((item, index) => {
                return <Result count={index+1} item={item} key={index} />
            })}
        </div>
    )
}
