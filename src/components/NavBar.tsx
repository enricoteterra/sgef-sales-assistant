import * as React from "react";
import { Typography, Toolbar, AppBar } from "@material-ui/core";

export const NavBar: React.FunctionComponent = (): JSX.Element => (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    SGEF Sales Assistant
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);
