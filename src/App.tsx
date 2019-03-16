import * as React from "react";
import * as styles from "./App.css";
import { SpeechEnabledVoiceInputField } from "./components/VoiceInputField";
import { NavBar } from "./components/NavBar";
import { Person } from "./components/Person";
import { GridList, GridListTile } from "@material-ui/core";

interface Person {
    fullName: string;
    thumbnail: string;
    companyThumbnail: string;
}
const peopleList = [
    {
        fullName: "Marie",
        thumbnail: "https://randomuser.me/api/portraits/women/51.jpg",
        companyThumbnail:
            "https://cdn.freebiesupply.com/logos/large/2x/bmw-2-logo-png-transparent.png",
    },
    {
        fullName: "Ed",
        thumbnail: "https://randomuser.me/api/portraits/men/58.jpg",
        companyThumbnail:
            "https://cdn.freebiesupply.com/logos/large/2x/bmw-2-logo-png-transparent.png",
    },
    {
        fullName: "Shaun",
        thumbnail: "https://randomuser.me/api/portraits/men/57.jpg",
        companyThumbnail:
            "https://cdn.freebiesupply.com/logos/large/2x/bmw-2-logo-png-transparent.png",
    },
];

interface SelectPersonProps {
    people: Person[];
}

const SelectPerson = ({ people }: SelectPersonProps): JSX.Element => (
    <div>
        <GridList cols={4} className={styles.GridList}>
            {people.map(person => (
                <GridListTile key={person.fullName}>
                    <Person {...person} />
                </GridListTile>
            ))}
        </GridList>
    </div>
);

class App extends React.Component {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    render(): JSX.Element {
        return (
            <div>
                <NavBar />
                <div className={styles.PageWrapper}>
                    <SpeechEnabledVoiceInputField styles={styles} />
                    {/* <div className={styles.App}>
                        <SelectPerson people={peopleList} />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default App;
