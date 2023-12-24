import React from "react";

import { Button as ContainerButton } from "./styles";

const Button = ({children, ...props}) => <ContainerButton {...props}>{children}</ContainerButton>

export default Button