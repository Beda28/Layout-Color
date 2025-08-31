import styled from "styled-components";

export const ColorBox = styled.div<{color: React.CSSProperties['backgroundColor']}>`
    width: 20px;
    height: 20px;
    border: 1px solid #a2a2a2;

    background-color: ${props=>props.color};

    &:hover{
        cursor: pointer;

    }
`

export const ColorPickerBox = styled.div<{width: React.CSSProperties['width'], height: React.CSSProperties['height']}>`
    position: absolute;
    top: ${props=>props.height}px;
    left: ${props=>props.width}px;

    width: 100px;
    height: 100px;
    background-color: white;
    z-index: 1;
`