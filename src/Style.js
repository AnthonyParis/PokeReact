import { createGlobalStyle } from "styled-components"

import background from "./images/background.jpg"

export default createGlobalStyle`
    body {
        width : 100vw;
        height : 100vh;

        margin : 0px;

        background : url(${ background }) center fixed;
        background-size : cover;
    }
`
