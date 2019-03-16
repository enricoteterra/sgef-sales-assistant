import { transcriptContainsKeyword } from "../KeywordService";
import * as MockDate from "mockdate";
MockDate.set("1/1/2000");

jest.mock("shortid", () => ({
    generate: () => "someId",
}));

describe("[KeywordService]", () => {
    describe("Given a transcript with a single match", () => {
        it("should correctly parse the keyword in the transcript", () => {
            const transcript = "Orange something something John";
            const result = transcriptContainsKeyword(transcript);
            console.log(result);
            expect(transcriptContainsKeyword(transcript)).toEqual([
                {
                    id: "someId",
                    action: "get-person",
                    keyword: "john",
                    createdAt: "January 1st 2000, 12:00:00 am",
                },
            ]);
        });
        describe("Given a transcript with multiple matches", () => {
            it("should correctly parse the keyword in the transcript", () => {
                const transcript = "Orange Tom something Wolfgang something John";
                const result = transcriptContainsKeyword(transcript);
                console.log(result);
                expect(transcriptContainsKeyword(transcript)).toEqual([
                    {
                        id: "someId",
                        action: "get-person",
                        keyword: "tom",
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
                        keyword: "john",
                        createdAt: "January 1st 2000, 12:00:00 am",
                    },
                ]);
            });
        });
    });
});
