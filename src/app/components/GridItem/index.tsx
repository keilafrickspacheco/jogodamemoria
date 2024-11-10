import * as C from './styles';
import {GridItemType} from '../../types/GridItemType';
import b7Svg from '../../svgs/b7.svg';
import {items} from '../../data/items'
import Image from 'next/image'

type Props = {
    item:GridItemType,
    onclick:() => void
}

export const GridItem = ({item, onclick}:Props) => {
    return (
        <C.Container showBackground={item.permanentShown || item.shown} onClick={onclick}>
            {item.permanentShown  === false && item.shown === false &&
            <C.Icon>
                <Image src={b7Svg} alt=""/>
            </C.Icon>
            }
            {(item.permanentShown || item.shown) && 
            item.item !== null &&
                <Image src={items[item.item].icon} width="40" height="40" alt=""/>
                }
        </C.Container>
    )
}