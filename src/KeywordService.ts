import * as moment from "moment";
import * as shortid from "shortid";

export type Action = string;
export type Keyword = string;

export interface ActionAndKeyword {
    id: string;
    action: Action;
    keyword: Keyword;
    createdAt: string;
}

const ActionKeywordMap: { [key: string]: Keyword[] } = {
    "get-person": ["wolfgang", "tom", "john"],
};
const tokenizeString = (text: string): string[] => text.toLowerCase().split(" ");

export const transcriptContainsKeyword = (transcript: string): ActionAndKeyword[] =>
    tokenizeString(transcript)
        .filter(token => ActionKeywordMap["get-person"].includes(token))
        .map(keyword => ({
            id: shortid.generate(),
            action: "get-person",
            keyword,
            createdAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
        }));
