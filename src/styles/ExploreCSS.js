import styled from 'styled-components';

const Explores = styled.div`
    margin-top: 60px;
    text-align: center;

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

    img {
        margin-top: 10px;
        width: 70%;
        background-color: rgba(255, 255, 255);
    }
`;

export const ExploresFood = styled(Explores)`
    img {
        margin-top: 0px;
        width: 60%;
    }
`;

export const ExploreHeader = styled.div`

        .headerExplore{
          display: flex;
          align-items: center;
        }
        
        input {
            padding: 14.5px 0;
        }

        h3 {
            margin-right: 40%;
        }
`;

export const ExplorerHeaderFoodDrink = styled(ExploreHeader)`
        h3 {
            margin-right: 32%;
        }
`;

export const ExplorerHeaderIngredients = styled(ExploreHeader)`
    h3 {
            margin-right: 25%;
        }
`;

export const ExplorerHeaderNation = styled(ExploreHeader)`
    h3 {
            margin-right: 25%;
        }
`;

export const ExploresIngredients = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding: 60px 0
`;

export const CardIngredientes = styled.div` 
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
      padding: 0 20px;
      width: 100%;
      height: 100%;
    }
    img {
        margin-top: 10px;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        border: 1px solid black;
    }

    div {
       display: flex;
       justify-content: center;
    }

    h4 {
        border-top: 1px solid black;
        font-weight: 700;
        font-size: 12px;
        color: black;
        text-align: left;
    }
`;

export const ExploreNation = styled.div`
     margin-top: 60px;
     select {
         width: 90%;
         margin-left: 15px;
         margin-top: 5px;
         margin-bottom: 10px;
         padding: 10px 0;
         font-size: 20px;
         font-weight: 700;
        }

        select * {
         /* position: relative;
         background-color: red;
         width: 90%;
         margin-left: 15px;
         margin-top: 5px;
         margin-bottom: 15px;
         padding: 0;
         min-height: 0;
         font-size: 20px;
         font-weight: 700;
          */

         /* option {
             font-size: 10px;
         } */
     }

`;

export default Explores;
