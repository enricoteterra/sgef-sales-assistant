import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as styles from "./App.css";

const NavBar: React.FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React & Material-UI Sample Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

class App extends React.Component {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    render() {
        return (
            <div className={styles.App}>
                <NavBar />
                <h1>Welcome to React with Typescript</h1>
            </div>
        );
    }
}

export default App;
