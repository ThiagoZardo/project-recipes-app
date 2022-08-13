import styled from 'styled-components';
import { ExploreHeader } from './ExploreCSS';

export const DoneRecipes = styled.div`
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        div {
            width: 100%;
            margin-bottom: 10px;
        }
    }

    .DoneCategorias {
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

    .catshare {
        display: flex;
        justify-content: space-between;

        p {
            line-height: 0;
        }

        input {
            width: 8%;
        }
    }

    .image {
        width: 100%;
        border-radius: 10px;
    }

    .Date {
        text-align: center;
    }

    button {
        width: 100%;
        font-size: 20px;
        background-color: white;
        border: none;
        top: 0;

        h3 {
            line-height: 0;
        }
    }

    aside {
        display: flex;
        justify-content: center;
    }

    .tag {
        background-color: lightgray;
        border-radius: 10px;
        padding: 2px;
        width:40%;
        text-align: center;
    }
`;

export const HeaderDone = styled(ExploreHeader)`
     h3 {
            margin-right: 33%;
        }
`;
