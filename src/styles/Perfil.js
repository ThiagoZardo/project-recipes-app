import styled from 'styled-components';
import { ExploreHeader } from './ExploreCSS';

export const HeaderProfile = styled(ExploreHeader)`
     h3 {
            margin-right: 40%;
        }
`;

export const Perfil = styled.div`
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h2 {
        text-align: center;
    }

    button {
        box-shadow: 10px 10px 12px 0 rgba(30, 30, 60, 0.26);
        border: none;
        border-radius: 10px;
        background-color: white;
        font-size: 28px;
        padding: 20px 0;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 90%;
    }
`;
