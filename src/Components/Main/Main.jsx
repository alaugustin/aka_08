import React from 'react';

export default function Main({ mainCopy }) {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <main className="p-4 bg-green-400 grow shrink-0 basis-auto">
        {mainCopy}
      </main>
    </React.Fragment>
  );
}
