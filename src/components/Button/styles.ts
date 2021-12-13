import styled from "styled-components";

export const BotaoForm = styled.button`    
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    background-color: #ce275f;
    box-shadow: inset 0 0 0 0 #eeaeca;
    transition: ease-out .3s;
    border: none;
    color: #fff;
    transition: .15s;
    -webkit-transition: all .4s ease-in-out;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

&:hover{
    background-position: 100% 0;
    transition: .15s;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    background-image: linear-gradient(to right,#ce275f,#852d91,#a3a1ff,#0053bc);
    box-shadow: 0 4px 15px 0 rgb(126 52 161 / 75%);
    border: none;
    background-size: 300% 100%;
    border-radius: 50px; 
    transition: all .4s ease-in-out;
    }
}
}
`;
