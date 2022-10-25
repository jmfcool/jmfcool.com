import { expect } from "chai";
import axios from "axios";
import { JSDOM } from "jsdom";
import { hash } from "../js/hash.js";

const fetchData = async () => {
    return await axios.get("https://jmfcool.com");
};

beforeEach(async () => {
    const { data } = await fetchData();
    const dom = new JSDOM(data);
    global.window = dom.window;
    global.document = dom.window.document;
});

describe("data", () => {
    it("should be an object", () => {
        expect(hash.data).to.be.instanceOf(Object);
    });
    describe("pages", () => {
        it("should be an array", () => {
            expect(hash.data.pages).to.be.instanceOf(Array);
        });
    });
});

describe("init", () => {
    it("should be an function", () => {
        expect(hash.init).to.be.instanceOf(Function);
    });
});

describe("active", () => {
    it("should be an function", () => {
        expect(hash.active).to.be.instanceOf(Function);
    });
});

describe("page", () => {
    it("should be an function", () => {
        expect(hash.page).to.be.instanceOf(Function);
    });
});

describe("title", () => {
    it("should be an function", () => {
        expect(hash.title).to.be.instanceOf(Function);
    });
    it("return title", () => {
        const title = hash.title({ page: 'Alpha' });
        expect(title).to.equal("Jmfcool.com - Alpha");
    });
});

describe("breadcrumb", () => {
    it("should be an function", () => {
        expect(hash.breadcrumb).to.be.instanceOf(Function);
    });
    it("return hidden", () => {
        const hidden = hash.breadcrumb({ page: 'home' })
        expect(hidden).to.equal('none');
    });
});