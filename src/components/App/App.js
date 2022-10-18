import styled, {ThemeProvider} from "styled-components";
import {Routers} from "../Routers";
import {darkTheme, GlobalStyles, lightTheme} from "../Themes";
import {useDarkMode} from "../../hooks/useDarkMode";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
`

const App = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Wrapper>
                <Routers/>
            </Wrapper>
        </ThemeProvider>

    );
};
export default App;