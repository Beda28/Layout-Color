import React, { useEffect, useState } from "react"
import { BackgroundA, BackgroundB } from "../components/Box/Background"
import { AddColor, ColorList, ColorTable, Group, GroupB, LayOutList, MiddleColorList } from "../components/Box/LayoutBox"
import { ColorBox, ColorPickerBox } from "../components/Box/TextColorBox"
import { AddButton, AddColorButton, ColorText, TitleText } from "../components/P/Text"
import { BlockPicker } from "react-color"

export const Index = () => {
    type ColorValue = React.CSSProperties['backgroundColor'];

    const [Background, setBackground] = useState<ColorValue[]>([]);
    const [TextColor, setTextColor] = useState<ColorValue[]>([]);
    const [RadiusColor, setRadiusColor] = useState<ColorValue[]>([]);
    const [HoverColor, setHoverColor] = useState<ColorValue[]>([]);
    const [op, setop] = useState<boolean>(false);
    const [width, setwidth] = useState<number>();
    const [height, setheight] = useState<number>();
    const [color, setcolor] = useState<ColorValue>();

    useEffect(() => {
        setBackground(["#FFFFFF"])
        setTextColor(["#000000"])
        setcolor("#FFFFFF")
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

    const ColorInfo = (e: React.MouseEvent) => {
        setwidth(e.clientX + 20)
        setheight(e.clientY)
    }

    return <>
        <BackgroundB $op={op} onClick={() => setop(false)}>
            <ColorPickerBox width={width} height={height} onClick={(e) => e.stopPropagation()}>
                <BlockPicker color={'#FFFFFF'} onChange={color=>
                    color=color
                }
                    // color={value}
                    // onChange={color => {
                    //     setItems(prev => {
                    //         const copy = [...prev];
                    //         copy[index] = color.hex;
                    //         return copy;
                    //     })
                    // }}
                />
            </ColorPickerBox>
        </BackgroundB>
        <BackgroundA>
            <ColorTable>
                {colorGroup.map(({label, items, setItems}, index) => (
                    <ColorList key={index}>
                        <TitleText>{label}</TitleText>
                        <MiddleColorList>
                            {items.map((value, index) => (
                                <Group key={index}>
                                    <GroupB>
                                        <AddButton onClick={() => removeItem(setItems, index)}>-</AddButton>
                                        <ColorText>색상 {index + 1}</ColorText>
                                    </GroupB>
                                    <ColorBox color={value} onClick={(e) => {setop(true); ColorInfo(e)}}/>
                                    {/* <ColorPickerBox>
                                        {pickerIndex === index && (
                                            <BlockPicker 
                                                color={value}
                                                onChange={color => {
                                                    setItems(prev => {
                                                        const copy = [...prev];
                                                        copy[index] = color.hex;
                                                        return copy;
                                                    })
                                                }}
                                            />
                                        )}
                                    </ColorPickerBox> */}
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