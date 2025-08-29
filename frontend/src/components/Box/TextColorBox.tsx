import styled from "styled-components";

export const ColorBox = styled.div<{color: React.CSSProperties['backgroundColor']}>`
    width: 20px;
    height: 20px;
    border: 1px solid #a2a2a2;

    background-color: ${props=>props.color};
`