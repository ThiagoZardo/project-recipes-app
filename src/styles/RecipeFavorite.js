import styled from 'styled-components';
import { ExploreHeader } from './ExploreCSS';

export const HeaderFavorite = styled(ExploreHeader)`
     h3 {
            margin-right: 27%;
        }
`;

export const CardFavorite = styled.div`
    .FavCategorias {
        display: flex;
        justify-content: space-around;
        margin-top: 80px;
        margin-bottom: 20px;

        button {
            font-size: 20px;
            border: none;
            display: flex;
            flex-wrap: wrap;
            background-color: white;
            justify-content: center;
            width: 26%;
            border-radius: 6px;
            box-shadow: 2px 10px 12px 0 rgba(30, 30, 60, 0.26);

            img {
                width: 80%;
            }
    }

}
    .img {
        width: 100%;
        height: 40%;
        border-radius: 10px;
    }

    p {
        text-align: center;
    }

    button {
        background-color: white;
        border: none;
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .shares {
        display:flex;
        justify-content: space-evenly;
        margin-bottom: 20px;
    }
`;
