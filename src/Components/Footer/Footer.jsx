import React from "react";

export default function Footer({ footerYear, footerCopy }) {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <footer className="p-4 bg-yellow-400">
        &copy;{footerYear} {footerCopy}
      </footer>
    </React.Fragment>
  );
}
