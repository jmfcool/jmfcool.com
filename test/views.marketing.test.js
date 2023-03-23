import { expect } from "chai";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import axios from "axios";
import * as views from "../js/views.js";

const fetchData = async () => {
    return await axios.get("https://jmfcool.com");
};

beforeEach(async () => {
    const { data } = await fetchData();
    const dom = new JSDOM(data);
    global.fetch = fetch;
    global.window = dom.window;
    global.document = dom.window.document;
});

describe("marketing", () => {

    it("should be an array", async () => {
        const html = await views.marketing(fetch);
        expect(html).to.be.a("array");
    });

    it("should have 5 topics", async () => {
        const html = await views.marketing(fetch);
        expect(html).to.have.lengthOf(5);
    });

    describe("Websites", () => {

        it("has container", async () => {
            const html = await views.marketing(fetch);
            const text = 'Websites';
            const topic = (html[0]?.includes(text)) ? true : false;
            expect(topic).to.be.true;
        });

        it("has 2 boxes", async () => {
            const html = await views.marketing(fetch);
            var boxes = (html[1].match(/single_port/g) || []).length;
            expect(boxes).to.be.equal(2);
        });

    });

    describe("Emails", () => {

        it("has container", async () => {
            const html = await views.marketing(fetch);
            const text = 'Emails';
            const topic = (html[1]?.includes(text)) ? true : false;
            expect(topic).to.be.true;
        });

        it("has 2 boxes", async () => {
            const html = await views.marketing(fetch);
            var boxes = (html[1].match(/single_port/g) || []).length;
            expect(boxes).to.be.equal(2);
        });

    });

    describe("Landing Pages", () => {

        it("has container", async () => {
            const html = await views.marketing(fetch);
            const text = 'Landing Page';
            const topic = (html[2]?.includes(text)) ? true : false;
            expect(topic).to.be.true;
        });

        it("has 2 boxes", async () => {
            const html = await views.marketing(fetch);
            var boxes = (html[2].match(/single_port/g) || []).length;
            expect(boxes).to.be.equal(5);
        });

    });
    
    
    describe("Web Applications", () => {

        it("has container", async () => {
            const html = await views.marketing(fetch);
            const text = 'Web Applications';
            const topic = (html[4]?.includes(text)) ? true : false;
            expect(topic).to.be.false;
        });

        it("has 7 boxes", async () => {
            const html = await views.marketing(fetch);
            var boxes = (html[3].match(/single_port/g) || []).length;
            expect(boxes).to.be.equal(7);
        });

    });  

    describe("Sandbox", () => {

        it("has container", async () => {
            const html = await views.marketing(fetch);
            const text = 'Sandbox';
            const topic = (html[5]?.includes(text)) ? true : false;
            expect(topic).to.be.false;
        });

        it("has 7 boxes", async () => {
            const html = await views.marketing(fetch);
            var boxes = (html[4].match(/single_port/g) || []).length;
            expect(boxes).to.be.equal(19);
        });

    }); 

});
