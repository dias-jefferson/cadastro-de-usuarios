import React from "react";

import { ContainerItems } from "./styles";

const Container = ({children, isBlur}) => <ContainerItems isBlur={isBlur}>{children}</ContainerItems>

export default Container