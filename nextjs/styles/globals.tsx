import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        font-size: 62.5%;
    }
    body, #__next{
        height: 100vh;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
`;
