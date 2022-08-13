import styled from 'styled-components';

export const FoodAndDrink = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 70px;
    /* align-content: space-between; */
    /* flex-basis: 1;
    flex-grow: 1; */
    /* width: 100%;
    height: 100%; */
    `;

export const Card = styled.div`
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
    /* background-image: url(/images/i-like-food.svg);
    background-color: #ffffff; */
    /* margin-top: 40px;
    margin-bottom: 40px; */
    width: 20%;
    height: 20%;
    margin: 4px;

@media ( min-width : 360px ) and ( max-height : 640px ) {
    width: 47%;
}
    
    button {
      cursor: pointer;
      border-radius: 20px 20px 10px 10px;
      border: none;
      box-shadow: 10px 10px 12px 0 rgba(30, 30, 60, 0.26);
    }

    img {
        border-radius: 50%;
        width: 100%;
        height: 70%;
        border: 1px solid black;
    }
    div {
       display: flex;
       justify-content: center;
    }

    h4 {
        border-top: 1px solid black;
        font-weight: 700;
        font-size: 24px;
        color: black;
    }
`;
