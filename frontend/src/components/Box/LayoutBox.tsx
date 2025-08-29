import styled from "styled-components";
import { AlCenterDiv, CenterDiv, CoulmnDiv, SpaceDiv } from "./Base";

export const ColorTable = styled(SpaceDiv)`
    width: 90%;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid black;
`

export const ColorList = styled(CoulmnDiv)`
    width: 200px;
    height: 80%;

    align-items: center;

    border: 1px solid black;
`

export const LayOutList = styled(CenterDiv)`
    width: 90%;
    height: 100%;
`

export const Group = styled(SpaceDiv)`
    width: 100%;
    padding: 0 10px;
`

export const Groupb = styled(AlCenterDiv)``