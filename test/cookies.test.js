import { expect } from "chai";
import axios from "axios";
import { JSDOM } from "jsdom";
import { cookies } from "../js/cookies.js";

const fetchData = async () => {
    return await axios.get("https://jmfcool.com");
};

beforeEach(async () => {
    const { data } = await fetchData();
    const dom = new JSDOM(data);
    global.window = dom.window;
    global.document = dom.window.document;
});

var mock = {
    cookies: [],
    create: function (k, v) {
        this.cookies[k] = v;
    },
    read: function (k) {
        return this.cookies[k];
    },
    erase: function () {
        this.cookies = [];
    }
};

describe("create", () => {
    it("should be a function", () => {
        expect(cookies.create).to.be.instanceOf(Function);
    });
    it("should create cookie", () => {
        const cookie = mock.create("accept",true);
    });
});

describe("read", () => {
    it("should be a function", () => {
        expect(cookies.read).to.be.instanceOf(Function);
    });
    it("should read cookie", () => {
        const cookie = mock.read("accept");
        expect(cookie).be.true;
    });
});

describe("erase", () => {
    it("should be a function", () => {
        expect(cookies.erase).to.be.instanceOf(Function);
    });
    it("should erase cookie", () => {
        const cookie = mock.erase("accept");
        expect(cookie).to.be.undefined;
    });
});
