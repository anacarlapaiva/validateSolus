import React from 'react'
import { Container, InputFC} from './styles'

interface Props{
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (evento: any) => void; 
}

const Input: React.FC<Props> = ({name, type, placeholder, value, onChange}) => {
    return (
        <Container>
            <InputFC
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            
        </Container>
    )
}

export default Input
