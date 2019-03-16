import * as React from "react";
import { ActionAndKeyword } from "../../KeywordService";
import { PersonCard } from "./components/PersonCard";
import { Grid } from "@material-ui/core";

export interface ActionFeedProps {
    feed: ActionAndKeyword[];
}

export const ActionFeed = ({ feed }: ActionFeedProps): JSX.Element => (
    <Grid container direction="row" justify="center" alignItems="center">
        {feed.reverse().map(({ action, keyword, createdAt, id }) => (
            <PersonCard key={`${id}`} action={action} keyword={keyword} createdAt={createdAt} />
        ))}
    </Grid>
);
