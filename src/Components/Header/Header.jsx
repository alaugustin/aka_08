import React from 'react';

export default function Header({ headerCopy }) {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <header className="p-4  bg-red-400">{headerCopy}</header>
    </React.Fragment>
  );
}
