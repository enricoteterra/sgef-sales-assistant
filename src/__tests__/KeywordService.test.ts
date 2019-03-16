import { transcriptContainsKeyword } from "../KeywordService";
import * as MockDate from "mockdate";
MockDate.set("1/1/2000");

jest.mock("shortid", () => ({
    generate: () => "someId",
}));

describe("[KeywordService]", () => {
    describe("Given a transcript", () => {
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
    });
});
