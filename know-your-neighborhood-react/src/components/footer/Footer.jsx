import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-[60px] flex items-center justify-center border-t bg-gray-100 px-5 text-secondary font-medium mt-5">
      <p className="text-center">
        Created by{" "}
        <a
          href="https://github.com/yoghantara08"
          target="_blank"
          rel="noreferrer"
          className="text-color1 hover:decoration-solid hover:underline"
        >
          Gustut Yoghantara
        </a>{" "}
        © 2023 Copyright | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
