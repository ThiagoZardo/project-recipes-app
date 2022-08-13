import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/images/i-like-food.svg);
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: white;
    padding: 40px;
    border-radius: 10px;

    img {
        width: 25vw;
        height: 25vh;
    }

    input {
        width: 100%;
        padding: 4px;
        margin-bottom: 8px;
        border-radius: 4px;
        border: 1px solid red;
        box-sizing: content-box;
        
        ::placeholder {
            text-align: center;
        }
    }

    .button {
        background-color: transparent;
        box-shadow: 1px 2px 2px 1px gray;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;

        :hover {
            border: 1px solid black;
            background-image:  linear-gradient(
                90.93596128594845deg, 
                rgba(235, 94, 120,1) 12.284926470588236%,
                rgba(240, 144, 161,1) 30.45680147058824%,
                rgba(232, 160, 172,1) 55.04227941176472%,
                rgba(240, 144, 161,1) 79.80591299019608%,
                rgba(235, 94, 120,1) 90.49525122549021%,
                rgba(235, 94, 120,1) 97.79963235294117%);
        }
    }

    .buttonAbilitate {
        background-color: #EE4B6A;
    }
`;

export default Main;
