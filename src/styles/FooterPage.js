import styled from 'styled-components';

const FooterPage = styled.footer`
    display: flex;
    margin: 0;
    justify-content: space-between;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    width: 100%;
    bottom: 0px;
    left: 0;
    position: fixed;
    clear: both;
    float: inline-end;

    input {
        margin: 10px 0;
    }
    
    .iconDrink {
        margin-left: 10px;
    }

    .iconFood {
        margin-right: 15px;
    }
`;

export default FooterPage;
