import React, { useEffect, useState } from "react"
import { BackgroundA } from "../components/Box/Background"
import { AddColor, ColorList, ColorTable, Group, GroupB, LayOutList, MiddleColorList } from "../components/Box/LayoutBox"
import { ColorBox } from "../components/Box/TextColorBox"
import { AddButton, AddColorButton, ColorText, TitleText } from "../components/P/Text"

export const Index = () => {
    type ColorValue = React.CSSProperties['backgroundColor'];

    const [Background, setBackground] = useState<ColorValue[]>([]);
    const [TextColor, setTextColor] = useState<ColorValue[]>([]);
    const [RadiusColor, setRadiusColor] = useState<ColorValue[]>([]);
    const [HoverColor, setHoverColor] = useState<ColorValue[]>([]);

    useEffect(() => {
        setBackground(["#FFFFFF"])
        setTextColor(["#000000"])
    }, [])

    const removeItem = (setFn: React.Dispatch<React.SetStateAction<ColorValue[]>>, index: number) => {
        setFn(prev=>prev.filter((_, i) => i !== index))
    }

    const addItem = (setFn: React.Dispatch<React.SetStateAction<ColorValue[]>>) => {
        setFn(prev=>[...prev, "#FFFFFF"])
    }

    const colorGroup = [
        {label: "배경색", items: Background, setItems: setBackground},
        {label: "글자색", items: TextColor, setItems: setTextColor},
        {label: "테두리색", items: RadiusColor, setItems: setRadiusColor},
        {label: "호버색", items: HoverColor, setItems: setHoverColor},
    ]

    return <>
        <BackgroundA>
            <ColorTable>
                {colorGroup.map(({label, items, setItems}, index) => (
                    <ColorList key={index}>
                        <TitleText>{label}</TitleText>
                        <MiddleColorList>
                            {items.map((value, index) => (
                                <Group>
                                    <GroupB>
                                        <AddButton onClick={() => removeItem(setItems, index)}>-</AddButton>
                                        <ColorText>색상 {index + 1}</ColorText>
                                    </GroupB>
                                    <ColorBox color={value}></ColorBox>
                                </Group>
                            ))}
                            <AddColor onClick={() => addItem(setItems)}>
                                <AddButton>+</AddButton>
                                <AddColorButton>색상 추가하기</AddColorButton>
                            </AddColor>
                        </MiddleColorList>
                    </ColorList>
                ))}
            </ColorTable>
            <LayOutList>
            </LayOutList>
        </BackgroundA>
    </>
}