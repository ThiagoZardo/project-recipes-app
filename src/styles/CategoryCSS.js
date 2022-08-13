import styled from 'styled-components';

const CategoryCSS = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: white;
    padding-top: 20px;
    padding-bottom: 10px;
    width: 98%;
    margin-top: 60px;
    border: 1px solid lightgrey;
    
     button {
         display: flex;
         flex-wrap: wrap;
         background-color: white;
         justify-content: center;
         width: 26%;
         padding: 5px;
         border: none;
         border-radius: 6px;
         box-shadow: 2px 10px 12px 0 rgba(30, 30, 60, 0.26);
         font-size: 20px;
         margin-bottom: 10px;
         text-align: left;
         cursor: pointer;
         
         img {
             width: 80%;
         }
     }
`;

export default CategoryCSS;
