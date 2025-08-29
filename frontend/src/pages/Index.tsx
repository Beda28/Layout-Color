import { useEffect, useState } from "react"
import { BackgroundA } from "../components/Box/Background"
import { ColorList, ColorTable, Group, Groupb, LayOutList } from "../components/Box/LayoutBox"
import { ColorBox } from "../components/Box/TextColorBox"
import { AddButton, ColorText, TitleText } from "../components/P/Text"

export const Index = () => {
    const [Background, setBackground] = useState<React.CSSProperties['backgroundColor'][]>([]);

    useEffect(() => {
        setBackground(["#FFFFFF"])
    }, [])

    const removeItem = (index: number) => {
        setBackground(prev=>prev.filter((_, i) => i !== index))
    }

    return <>
        <BackgroundA>
            <ColorTable>
                <ColorList>
                    <TitleText>배경색</TitleText>
                    {
                        Background.map((value, index) => {
                            return <>
                            <Group>
                                <Groupb>
                                    <AddButton onClick={() => removeItem(index)}>-</AddButton>
                                    <ColorText>색상 {index + 1}:</ColorText>
                                </Groupb>
                                <ColorBox color={value}></ColorBox>
                            </Group></>
                        })
                    }
                </ColorList>
            </ColorTable>
            <LayOutList>
            </LayOutList>
        </BackgroundA>
    </>
}