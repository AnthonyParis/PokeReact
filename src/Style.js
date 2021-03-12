import { createGlobalStyle } from "styled-components"

import background from "./images/background.jpg"

export default createGlobalStyle`
    body {
        background : url(${ background }) center fixed;
        background-size : cover;
    }
`
