import React from 'react';
import {Progress} from 'reactstrap';

export function Goal(props) {
  return (
    <div className="pt-2">

      <b>{props.category}</b> <span style={{}}> ${props.spent} spent of ${props.max} </span>
      <Progress animated color={props.spent/props.max > .99 ? "danger" : (props.spent/props.max > .80 ? "warning":"info") } value={props.spent} max={props.max}></Progress>
    </div>
  )
}
