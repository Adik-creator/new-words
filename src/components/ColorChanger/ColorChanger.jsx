import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {darkTheme, GlobalStyles, lightTheme} from "../Themes";

const StyledApp = styled.div`
        color: ${props => props.theme.fontColor};
    `

const ColorChanger = () => {



    const [theme, setTheme] = useState(true)
    const themeToggler = () => setTheme(prev => !prev);
    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyles>
                <StyledApp>
                    <button onClick={themeToggler}>click</button>
                </StyledApp>
            </GlobalStyles>
        </ThemeProvider>
    );
};

export {ColorChanger};