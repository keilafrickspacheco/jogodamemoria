import * as C from './styles';
import Image from 'next/image'

type Props = {
    label: string;
    icon?: HTMLImageElement;
    onclick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ label, icon, onclick }:Props) => {
    return (
        <C.Container onClick={onclick}>
            {icon &&
                <C.IconArea>
                    <Image src={icon} width="40" height="40"  alt=""/>
                </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
    )
}