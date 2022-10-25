import { expect } from "chai";
import { JSDOM } from "jsdom";
import axios from "axios";

const fetchData = async () => {
    return await axios.get("https://jmfcool.com");
};

beforeEach(async () => {
    const { data } = await fetchData();
    const dom = new JSDOM(data);
    global.window = dom.window;
    global.document = dom.window.document;
});

describe("services", () => {

    it("should be an object", () => {
        expect(document.getElementById("services-pagination")).to.be.instanceOf(Object);
    });

});

describe("mobile", () => {

    it("should be an object", () => {
        expect(document.getElementById("mobile-pagination")).to.be.instanceOf(Object);
    });

});