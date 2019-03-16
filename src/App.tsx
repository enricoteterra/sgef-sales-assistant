import * as React from "react";
import * as styles from "./App.css";
import { VoiceInputField } from "./components/VoiceInputField";
import { NavBar } from "./components/NavBar";

class App extends React.Component {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    render(): JSX.Element {
        return (
            <div>
                <NavBar />
                <div className={styles.PageWrapper}>
                    <div>
                        <VoiceInputField styles={styles} />
                    </div>
                    <div className={styles.App}>
                        {/* <Typography variant="display1" color="inherit">
                            Speak to get started..
                        </Typography> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
