import { expect } from "chai";
import axios from "axios";
import { JSDOM } from "jsdom";
import { date } from "../js/date.js";

const fetchData = async () => {
    return await axios.get("https://jmfcool.com");
};

beforeEach(async () => {
    const { data } = await fetchData();
    const dom = new JSDOM(data);
    global.window = dom.window;
    global.document = dom.window.document;
});

describe("year", () => {
    it("should be a function", () => {
        expect(date.year).to.be.instanceOf(Function);
    });
    it("return date", () => {
        const year = date.year();
        expect(year).to.be.a("number");
    });
});

describe("current", () => {
    it("should be a function", () => {
        expect(date.current).to.be.instanceOf(Function);
    });
    it("return current date", () => {
        const current = date.current();
        expect(current).to.be.a("string");
    });
});
