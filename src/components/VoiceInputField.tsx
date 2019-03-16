import * as React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { Mic } from "@material-ui/icons";
import SpeechRecognition from "react-speech-recognition";
import * as styles from "./VoiceInputField.css";

interface SpeechRecognitionProps {
    transcript: string;
    resetTranscript: Function;
    browserSupportsSpeechRecognition: boolean;
}

const VoiceInputField = ({
    transcript,
    browserSupportsSpeechRecognition,
}: SpeechRecognitionProps): JSX.Element =>
    browserSupportsSpeechRecognition ? (
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
    ) : (
        <div>Sorry, this browser does not support speech recognition!</div>
    );
export const SpeechEnabledVoiceInputField = SpeechRecognition(VoiceInputField);
