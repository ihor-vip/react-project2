import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import MovieCarousel from "./components/Movie_Carousel/MovieCarousel";
import { GlobalStyles } from './components/Globalstyle/globalStyles';
import { lightTheme, darkTheme } from './components/Themes/Themes'
import {useState} from "react";
import {ThemeProvider} from "styled-components";

function App() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')}


        return (
            <BrowserRouter>
                <Header/>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <>
                        <GlobalStyles/>
                        <div className="app">
                            <Container>
                                <button onClick={themeToggler}>Switch Theme</button>
                                <h1>Trending Movies this Week</h1>
                                <MovieCarousel/>
                                <Switch>
                                    <Route path="/" component={Movies} exact/>
                                    <Route path="/series" component={Series}/>
                                    <Route path="/search" component={Search}/>
                                </Switch>
                            </Container>
                        </div>
                    </>

                </ThemeProvider>
                <SimpleBottomNavigation/>
            </BrowserRouter>
        );
    }

    export default App



