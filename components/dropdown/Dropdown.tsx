import React, { useState } from "react";
import { DropdownStyled } from "./Dropdown.styles";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownStyled>
      <select className="main-select">
        <option>Value 1</option>
      </select>
    </DropdownStyled>
  );
};

export default Dropdown;
