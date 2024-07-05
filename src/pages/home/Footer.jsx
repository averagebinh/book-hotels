import React from "react";
import object from "../../data/footer.json";

const Footer = () => {
  return (
    <footer className="container grid grid-cols-5">
      {object.map((col) => (
        <div
          className="grid grid-col text-blue-900 py-1 justify-center items-center"
          key={col.col_number}
        >
          {col.col_values.map((row) => (
            <span className=" " key={row}>
              {row}
            </span>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
