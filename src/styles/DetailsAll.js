import styled from 'styled-components';

export const MainDetails = styled.main`
    width: 100%;
`;

export const HDetails = styled.div`
    img {
        width: 99%;
        height: 30%;
        border: 1px solid gray
    }
    h3 {
        line-height: 0;
        margin-left: 5px;
        padding-bottom: 10px;
        padding-top: 0;
        color: gray;
    }
`;

export const TDetails = styled.div`
    display: flex;
    justify-content: space-between;
    h2{
        line-height: 0;
        margin-left: 5px;
    }
    div{
        margin: 0;
        padding: 0;
        
        input {
            margin-right: 10px;
            line-height: 0;
        }
    }
`;

export const Ingredients = styled.section`
    .risk {
    text-decoration: line-through;
    }

    h2 {
        padding-top: 10px;
        margin-left: 10px;
        line-height: 0;   
    }

    div {
        background-color: lightgray;
        margin: 10px;  
        padding: 2px 0;
        padding-left: 10px;
        p {
            line-height: 10px;
            font-size: 20px;
        }
    }

    .InProgres {
        padding: 8px 0 10px 0;

        
        label {
            line-height:40px;
            font-size: 20px;
        
            input {
                width: 20px;
                height: 20px;
            }
        }
    }
`;

export const Instructions = styled.section`
    h2{
        padding-top: 10px;
        margin-left: 10px;
        line-height: 0;   
    }
    div {
        background-color: lightgray;
        margin: 10px;  
        padding: 2px 10px;
        padding-bottom: 38px;

        p{
            text-align: justify;
            font-size: 18px;
        }
    }

    iframe {
        width: 93%;
        margin: 10px;
    }

    button:disabled {
    background-color: transparent;
    border: 2px solid red;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 700;
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 1;
    bottom: 0;
    }

    button:enabled {
    background-color: greenyellow;
    border: 2px solid black;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 700;
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 1;
    bottom: 0;
    }
`;
