import * as React from "react";
import * as styles from "./App.css";
import { SpeechEnabledVoiceInputField } from "./components/VoiceInputField";
import { NavBar } from "./components/NavBar";
import { ActionAndKeyword } from "./KeywordService";
import { ActionFeed } from "./components/ActionFeed/ActionFeed";

export interface AppState {
    keywordMatches: ActionAndKeyword[];
}

class App extends React.Component {
    public constructor(props: {}) {
        super(props);
        this.state = {
            keywordMatches: [
                {
                    id: "someId",
                    action: "get-person",
                    keyword: "john",
                    createdAt: "January 1st 2000, 12:00:00 am",
                },
                {
                    id: "someId",
                    action: "get-person",
                    keyword: "wolfgang",
                    createdAt: "January 1st 2000, 12:00:00 am",
                },
                {
                    id: "someId",
                    action: "get-person",
                    keyword: "tom",
                    createdAt: "January 1st 2000, 12:00:00 am",
                },
            ],
        };
    }
    public handleKeywordMatch = (newKeywordMatch: ActionAndKeyword[]): void => {
        this.setState((state: AppState) => ({
            keywordMatches: [
                // don't insert duplicate ids
                ...state.keywordMatches.filter(
                    ({ id }) => !newKeywordMatch.map(({ id }) => id).includes(id),
                ),
                ...newKeywordMatch,
            ],
        }));
    };

    public render(): JSX.Element {
        const { keywordMatches } = this.state as AppState;
        return (
            <div>
                <NavBar />
                <div className={styles.PageWrapper}>
                    <SpeechEnabledVoiceInputField
                        styles={styles}
                        handleKeywordMatch={this.handleKeywordMatch}
                    />
                    <ActionFeed feed={keywordMatches} />
                </div>
            </div>
        );
    }
}

export default App;
