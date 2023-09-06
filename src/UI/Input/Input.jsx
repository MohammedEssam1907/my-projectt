import React, { useImperativeHandle, useRef } from 'react';
import Classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });

    return <>
        <div className={`${Classes.control} ${ props.isValid === false ? Classes.invalid : '' }`} >
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={inputRef} type={props.type} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
        </div>
    </>;
});

export default Input;

