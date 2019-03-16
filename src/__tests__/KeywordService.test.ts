import { transcriptContainsKeyword } from "../KeywordService";
import * as MockDate from "mockdate";
MockDate.set("1/1/2000");

jest.mock("shortid", () => ({
    generate: () => "someId",
}));

describe("[KeywordService]", () => {
    describe("Given a transcript without keywords", () => {
        it("should correctly parse the keyword in the transcript", () => {
            const transcript = "Orange something something Croissant";
            expect(transcriptContainsKeyword(transcript)).toEqual([]);
        });
    });
    describe("Given a transcript with multiple keywords", () => {
        it("should correctly parse the keyword in the transcript", () => {
            const transcript = "Orange Tom something Wolfgang something John";
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
    describe("Given a transcript with a send mail action", () => {
        it("should correctly parse the action in the transcript", () => {
            const transcript = "send email to John";
            expect(transcriptContainsKeyword(transcript)).toEqual([
                {
                    id: "someId",
                    action: "get-person",
                    keyword: "john",
                    createdAt: "January 1st 2000, 12:00:00 am",
                },
                {
                    id: "someId",
                    action: "send-email",
                    keyword: "",
                    createdAt: "January 1st 2000, 12:00:00 am",
                },
            ]);
        });
    });
    describe("Given a transcript with a contract info action", () => {
        it("should correctly parse the action in the transcript", () => {
            const transcript = "can you remind me when the next payment for contract 16234 was?";
            expect(transcriptContainsKeyword(transcript)).toEqual([
                {
                    id: "someId",
                    action: "contract-info",
                    keyword: "",
                    createdAt: "January 1st 2000, 12:00:00 am",
                },
            ]);
        });
    });
});
