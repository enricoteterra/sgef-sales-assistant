import * as React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { Mic } from "@material-ui/icons";

interface VoiceInputFieldProps {
    styles: {
        VoiceInputField: any;
    };
}

export const VoiceInputField = ({ styles }: VoiceInputFieldProps): JSX.Element => (
    <TextField
        className={styles.VoiceInputField}
        placeholder="Say something to get started.."
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Mic />
                </InputAdornment>
            ),
        }}
    />
);
