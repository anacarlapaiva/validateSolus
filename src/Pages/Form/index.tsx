import React, { useState } from 'react'
import Input from '../../components/Input'
import { FormFC, Container } from './styles'
import Img from '../../Assets/soluslogo.png'
import BotaoForm from '../../components/Button'
import { validEmail, validPassword } from '../../Utils/Regex'

const Form: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [inputEmailErr, setInputEmailErr] = useState(false);
    const [inputPassordErr, setInputPasswordErr] = useState(false);

    const validate = () => {
        if (!validEmail.test(email)) {
            setInputEmailErr(true)
        } else {
            setInputEmailErr(false)
        }

        if (!validPassword.test(password)) {
            setInputPasswordErr(true);
        } else {
            setInputPasswordErr(false);
        }
    }


    const handleLogin = () => {
        validate();
    }

    return (
        <Container>
            <FormFC onSubmit={handleLogin}>
                <img src={Img} alt="teste" />
                <Input
                    name="name"
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                {inputEmailErr && <p>Por favor digite um email valido!</p>}

                <Input
                    name="name"
                    type="password"
                    value={password}
                    placeholder='Senha'
                    onChange={(event) => setPassword(event.target.value)}
                />

                {inputPassordErr && <p>Por favor digite uma senha mais segura</p>}

                <BotaoForm onClick={handleLogin}>
                    Validar
                </BotaoForm>
            </FormFC>
        </Container>
    )
}

export default Form
