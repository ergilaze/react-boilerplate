import { createGlobalStyle } from 'styled-components';
import theme from 'theme/theme';

const GlobalStyles = createGlobalStyle`
    font-size: 16px;

    * {
        font-size: 16px;
        font-family: ${theme.primaryFont};
        box-sizing: border-box;
    }

    html {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-variant-ligatures: contextual common-ligatures;
    }

    html, body, #root{
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
