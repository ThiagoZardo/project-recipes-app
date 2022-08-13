import styled from 'styled-components';

const HeaderPage = styled.header`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;

    .profile {
        margin-left: 10px;
    }

    .searchIcone {
        margin-right: 10px;
    }
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Fredericka+the+Great&display=swap');

    h3 {
        font-family: 'Fredericka the Great', 'Comic Neue', cursive;
        color: black;
    }

    #search {
        width: 90%;
        padding: 8px 0;
        border-radius: 5px;
        margin-left: 15px;
        margin-top: 5px;
        margin-bottom: 15px;
    }

    div {

        background-color: white;
        width: 100%;

        form {
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0 3px 1px 0px gray;

        button {
            margin-bottom: 15px;
            margin-left: 15px;
            padding: 12px 6px;
            cursor: pointer;
            width: 90%;
            border-radius: 5px;
        }    

        div {
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin-bottom: 15px;
            
            label {
                width: 25%;
                text-align: center;
                font-size: 14px;
                font-weight: 700;

                input {
                  display: none;
                }
    
                img {
                    cursor: pointer;
                    border: 4px solid gray;
                    border-radius: 15px;
                    padding: 10px;
                }

                input:checked + img {
                    border: 4px solid red;
                }
            }
        } 
      }
    }

    /* input {
       background: none;
    } */
`;

export default HeaderPage;
