import * as React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { Mic } from "@material-ui/icons";
import { transcriptContainsKeyword } from "../KeywordService";
import SpeechRecognition from "react-speech-recognition";
import * as styles from "./VoiceInputField.css";
import { debounce } from "lodash";

interface SpeechRecognitionProps {
    transcript: string;
    resetTranscript: () => {};
    browserSupportsSpeechRecognition: boolean;
}

interface SpeechEnabledVoiceInputFieldProps extends SpeechRecognitionProps {
    handleKeywordMatch: Function;
}

class VoiceInputField extends React.Component {
    public componentDidUpdate(prevProps: SpeechEnabledVoiceInputFieldProps): void {
        const { transcript, handleKeywordMatch, resetTranscript } = this
            .props as SpeechEnabledVoiceInputFieldProps;

        /* eslint-disable-next-line */
        if (transcript !== prevProps.transcript) {
            const matchingKeywords = transcriptContainsKeyword(transcript);
            handleKeywordMatch(matchingKeywords);
            debounce(resetTranscript, 1000);
        }
    }
    public render(): JSX.Element {
        const { transcript } = this.props as SpeechRecognitionProps;
        return (
            <div>
                <TextField
                    className={styles.VoiceInputField}
                    placeholder="Say something to get started.."
                    value={transcript}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Mic className={styles.Icon} />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        );
    }
}
export const SpeechEnabledVoiceInputField = SpeechRecognition(VoiceInputField);
