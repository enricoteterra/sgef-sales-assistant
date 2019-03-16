import * as React from "react";
import * as styles from "./Person.css";
import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";

interface PersonProps {
    thumbnail: string;
    companyThumbnail: string;
    fullName: string;
}
export const Person = ({ thumbnail, companyThumbnail, fullName }: PersonProps): JSX.Element => (
    <Card className={styles.Card}>
        <CardActionArea>
            <CardContent>
                <img src={thumbnail} title="Profile" className={styles.Thumbnail} />
                <img src={companyThumbnail} title="Company Logo" className={styles.Thumbnail} />
                <Typography component="b">{fullName}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);
