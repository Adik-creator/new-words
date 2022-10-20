import styled, {ThemeProvider} from "styled-components";
import {Routers} from "../Routers";
import {darkTheme, GlobalStyles, lightTheme} from "../Themes";
import {useDarkMode} from "../../hooks/useDarkMode";

import img from '../../imgs/alone-tree.jpg'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  background-image: url(${props => props.img});
  background-size: cover;
`

const App = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Wrapper img={img}>
                <Routers/>
            </Wrapper>
        </ThemeProvider>

    );
};
export default App;