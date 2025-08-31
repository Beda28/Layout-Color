import styled from 'styled-components'
import { CoulmnDiv } from './Base'

export const BackgroundA = styled(CoulmnDiv)`
    width: 100%;
    height: 100%;
    align-items: center;

    padding: 20px;
`

export const BackgroundB = styled.div<{$op: boolean}>`
    width: 100%;
    height: 100%;

    display: ${props=>props.$op === true ? 'flex' : 'none'};
    position: absolute;

    z-index: 1;
`