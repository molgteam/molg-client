import React from 'react';

export default function toggle(WrappedComponent) {
  return ({ show, ...rest }) => (show ? <WrappedComponent {...rest} /> : null);
}
