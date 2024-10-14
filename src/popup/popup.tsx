import React from "react";
import {createRoot} from "react-dom/client";

const popup = <h3>hello pop up</h3>

const container = document.createElement("div");
document.body.appendChild(container);
createRoot(container).render(popup)