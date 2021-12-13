import React from 'react'
import { BotaoForm } from './styles';

export interface Props {
    children: string;
    onClick: () => void;
    disabled?: boolean
}

const Botao: React.FC<Props> = ({children, onClick, disabled}) => {
    return (
        <div>
            <BotaoForm type='button' disabled={disabled} onClick={onClick}>
                {children}
            </BotaoForm>
        </div>
    )
}

export default Botao;
