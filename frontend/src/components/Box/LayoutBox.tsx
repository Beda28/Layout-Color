import styled from "styled-components";
import { AlCenterDiv, CenterDiv, CoulmnDiv, SpaceDiv } from "./Base";

export const ColorTable = styled(AlCenterDiv)`
    width: 90%;
    height: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #333333;
    overflow-y: hidden;
    overflow-x: auto;

    background-color: #1C1C1C;
`

export const ColorList = styled(CoulmnDiv)`
    width: 200px;
    height: 100%;
    padding-right: 10px;

    align-items: center;
`

export const MiddleColorList = styled(CoulmnDiv)`
    width: 100%;
    height: 220px;
    background-color: #262626;
    border-radius: 5px;
    align-items: center;
    border: 1px solid #333333;
    
    overflow-y: auto;
    overflow-x: hidden;
`

export const LayOutList = styled(CenterDiv)`
    width: 90%;
    height: 100%;
`

export const Group = styled(SpaceDiv)`
    width: 100%;
    border-radius: 5px;
    padding: 0 10px;
    transition: 0.3s;
    
    &:hover{
        background-color: #1A1A1A;
    }
`

export const GroupB = styled(AlCenterDiv)`
    background: none;

    &:hover{
        cursor: pointer;
    }
`

export const AddColor = styled(AlCenterDiv)`
    width: 100%;
    padding: 0 10px;
    border-radius: 5px;
    transition: 0.3s;
    
    &:hover{
        cursor: pointer;
        background-color: #1A1A1A;
    }
`