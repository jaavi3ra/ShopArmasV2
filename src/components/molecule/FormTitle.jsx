import React from "react";
import { Texto } from "../atomic/Texto";
import { EyebrowText } from "../atomic/Etiqueta";

import "../../styles/molecule/FormTitle.css";

export function FormTitle({ eyebrow, title, description
}) {
  return (
    <div className="form-header">
      <EyebrowText>
        {eyebrow}
      </EyebrowText>

      <Texto variant="h1">
        {title}
      </Texto>

      <Texto variant="p">
        {description}
      </Texto>
    </div>
  );
}