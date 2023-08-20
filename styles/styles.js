import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  /* Colours */
  --text: #F1F1F1;
  --background: #121212;
  --secondary: #1E1E1E;

  --spacing-unit: 4px;
  --space8: calc(2 * var(--spacing-unit));
  --space12: calc(3 * var(--spacing-unit));
  --space16: calc(4 * var(--spacing-unit));
  --space20: calc(5 * var(--spacing-unit));
  --space32: calc(8 * var(--spacing-unit));

  /* Typography */
  --primary-font: Inter;
  --accent-font: Instrument Serif;

  --type14: calc(3.5 * var(--spacing-unit));
  --type24: calc(6 *var(--spacing-unit));


  body {
    background: var(--background);
    color: var(--text);
    margin: 0 auto;
    width: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font16oothing: antialiased;
    transition: all 0.3s;
  }

  main {
    max-width: 600px;
    margin: var(--space20) auto;
  }
  
  h1 {
    font: 400 var(--type24)/1.4 var(--accent-font), sans-serif;
    margin: 0;
  }
  
  h2 {
    font: 400 var(--type24)/1.4 var(--accent-font), sans-serif;
    color: var(--text);
  }

  h3 {
    font: 600 var(--type14)/1.4 var(--primary-font), sans-serif;
    color: var(--text);
  }
  
  p {
    font: 400 var(--type14)/1.4 var(--primary-font), sans-serif;
    margin: 0;
  }
  
  a {
    font: 400 var(--type14)/1.4 var(--primary-font), sans-serif;
    text-decoration: none;
    color: var(--text);
    transition: 0.2s all;
  }
  
  a:hover {
    cursor: pointer;
  }

  table {
    display: table;
    flex-direction: column;
    width: 100%;
    background-color: var(--secondary);
    padding: var(--space12) var(--space20);
    border-radius: var(--space32);
    margin: var(--space8) 0;
  }

  th {
    display: flex;
    flex-direction: column;
    text-align: left;
    font: 400 var(--type24)/1.4 var(--accent-font), sans-serif;
    padding: 0px 0px var(--space8) 0px;
  }
  
  tr {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0px 0px var(--space16) 0;
  }

  td {
    display: flex;
    flex-direction: column;
    text-align: left;
    font: 400 var(--type14)/1.4 var(--primary-font), sans-serif;
    margin: var(--space4) 0;
  }

  td a {
    font-weight: 600;
    transition: 0.3s all;
  }

  td a:hover::after {
    content:" →"
  }
  
}
`;
