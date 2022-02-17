import React from 'react';
const LabelComponent = (props: {label: string}): JSX.Element=>{
    return (
        <label>{props.label}</label>
    )
}

export default LabelComponent;