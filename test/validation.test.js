import { expect } from "chai";
import axios from "axios";
import { JSDOM } from "jsdom";
import { validation } from "../js/validation.js";

const fetchData = async () => {
    return await axios.get("https://jmfcool.com");
};

beforeEach(async () => {
    const { data } = await fetchData();
    const dom = new JSDOM(data);
    global.window = dom.window;
    global.document = dom.window.document;
});

describe("regex", () => {
    it("should be an object", () => {
        expect(validation.regex).to.be.a("object");
    });
    it("should be text", () => {
        const regex = validation.regex.empty.test("test");
        expect(regex).to.be.true;
    });
    it("should be an email", () => {
        const regex = validation.regex.email.test("test@test.com");
        expect(regex).to.be.true;
    });
});

describe("required", () => {
    it("should be a function", () => {
        expect(validation.required).to.be.a("function");
    });
});

describe("flag", () => {
    it("should be a function", () => {
        expect(validation.flag).to.be.a("function");
    });
    it("returns true for required", () => {
        const elements = document.getElementsByClassName('required')[0];
        const flag = validation.flag(elements);
        expect(flag).to.be.true;
    });
    it("returns true for email", () => {
        const elements = document.getElementsByClassName('email')[0];
        const flag = validation.flag(elements);
        expect(flag).to.be.true;
    });
});

describe("init", () => {
    it("should be a function", () => {
        expect(validation.init).to.be.a("function");
    });
});
