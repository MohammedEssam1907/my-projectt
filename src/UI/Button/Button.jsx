import React from 'react'
import Classes from './Button.module.css'
export default function Button(props) {
  return <>
    <button type={props.type || 'button'} className={`${Classes.button} ${props.className}`} onClick={props.onClick} disabled={props.disabled} > {props.children} </button>
  </>
}
