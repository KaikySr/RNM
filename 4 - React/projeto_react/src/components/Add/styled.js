import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Input = styled(Link)`
    input{
        width: 300px;
    }
`;

export const Inputs = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:30px;
`;

export const Salvar = styled(Link)`
    button{
        width: 300px;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:30px;
`;
