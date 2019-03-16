import * as React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { Mic } from "@material-ui/icons";
import { transcriptContainsKeyword } from "../KeywordService";
import SpeechRecognition from "react-speech-recognition";
import * as styles from "./VoiceInputField.css";

interface SpeechRecognitionProps {
    transcript: string;
    resetTranscript: () => {};
    browserSupportsSpeechRecognition: boolean;
}

interface SpeechEnabledVoiceInputFieldProps extends SpeechRecognitionProps {
    handleKeywordMatch: Function;
}

interface VoiceInputFieldState {
    processedTranscript: string;
}

class VoiceInputField extends React.Component<
    SpeechEnabledVoiceInputFieldProps,
    VoiceInputFieldState
> {
    public constructor(props: any) {
        super(props);
        this.state = {
            processedTranscript: "",
        };
    }
    public componentDidUpdate(prevProps: SpeechEnabledVoiceInputFieldProps): void {
        const { transcript, handleKeywordMatch } = this.props as SpeechEnabledVoiceInputFieldProps;

        /* eslint-disable-next-line */
        if (transcript !== prevProps.transcript) {
            this.setState({
                processedTranscript: transcript,
            });
            const matchingKeywords = transcriptContainsKeyword(
                // only transcribe new text
                transcript.replace(this.state.processedTranscript, ""),
            );
            handleKeywordMatch(matchingKeywords);
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
