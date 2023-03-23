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

describe("menu", () => {

    it("should be an array", async () => {
        const html = await views.menu(fetch);
        expect(html).to.be.a("array");
    });

    it("should have a menu", async () => {
        const html = await views.menu(fetch);
        expect(html).to.have.lengthOf(1);
    });

    describe("buttons", () => {

        it("has about", async () => {
            const html = await views.menu(fetch);
            const text = 'About';
            const button = (html[0]?.includes(text)) ? true : false;
            expect(button).to.be.true;
        });

        it("has services", async () => {
            const html = await views.menu(fetch);
            const text = 'Services';
            const button = (html[0]?.includes(text)) ? true : false;
            expect(button).to.be.true;
        });

        it("has mobile", async () => {
            const html = await views.menu(fetch);
            const text = 'Mobile';
            const button = (html[0]?.includes(text)) ? true : false;
            expect(button).to.be.true;
        });

        it("has marketing", async () => {
            const html = await views.menu(fetch);
            const text = 'Marketing';
            const button = (html[0]?.includes(text)) ? true : false;
            expect(button).to.be.true;
        });

        it("has news", async () => {
            const html = await views.menu(fetch);
            const text = 'News';
            const button = (html[0]?.includes(text)) ? true : false;
            expect(button).to.be.true;
        });

        it("has team", async () => {
            const html = await views.menu(fetch);
            const text = 'Team';
            const button = (html[0]?.includes(text)) ? true : false;
            expect(button).to.be.true;
        });

        it("has legal", async () => {
            const html = await views.menu(fetch);
            const text = 'Legal';
            const button = (html[0]?.includes(text)) ? true : false;
            expect(button).to.be.true;
        });

        it("has contact", async () => {
            const html = await views.menu(fetch);
            const text = 'Contact';
            const button = (html[0]?.includes(text)) ? true : false;
            expect(button).to.be.true;
        });

    });

});
describe("pages", () => {

    describe("carousel", () => {

        it("should be an array", async () => {
            const html = await views.carousel(fetch);
            expect(html).to.be.a("array");
        });
    
        it("should have a carousel", async () => {
            const html = await views.carousel(fetch);
            expect(html).to.have.lengthOf(1);
        });
    
        describe("about", () => {

            it("should be an array", async () => {
                const html = await views.about(fetch);
                expect(html).to.be.a("array");
            });
        
            it("should have about page", async () => {
                const html = await views.menu(fetch);
                expect(html).to.have.lengthOf(1);
            });
        
        });
        
        describe("services", () => {
        
            it("should be an array", async () => {
                const html = await views.services(fetch);
                expect(html).to.be.a("array");
            });
        
            it("should have 20 articles", async () => {
                const html = await views.services(fetch);
                expect(html).to.have.lengthOf(20);
            });
        
        });
        
        describe("mobile", () => {
        
            it("should be an array", async () => {
                const html = await views.mobile(fetch);
                expect(html).to.be.a("array");
            });
        
            it("should have 15 articles", async () => {
                const html = await views.mobile(fetch);
                expect(html).to.have.lengthOf(15);
            });
        
        });        

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

    describe("news", () => {

        it("should be an array", async () => {
            const html = await views.news(fetch);
            expect(html).to.be.a("array");
        });
    
        it("should have a news article", async () => {
            const html = await views.news(fetch);
            expect(html).to.have.lengthOf(1);
        });
    
    });
    
    describe("team", () => {
    
        it("should be an array", async () => {
            const html = await views.team(fetch);
            expect(html).to.be.a("array");
        });
    
        it("should have 3 team members", async () => {
            const html = await views.team(fetch);
            expect(html).to.have.lengthOf(3);
        });
    
    });

});

describe("iframes", () => {

    it("should be an array", async () => {
        const html = await views.iframes(fetch);
        expect(html).to.be.a("array");
    });

    it("should have 5 iframes", async () => {
        const html = await views.iframes(fetch);
        expect(html).to.have.lengthOf(5);
    });

    describe("legal", () => {

        it("has terms", async () => {
            const html = await views.iframes(fetch);
            const text = 'terms';
            const topic = (html[0]?.includes(text)) ? true : false;
            expect(topic).to.be.true;
        });

        it("has privacy", async () => {
            const html = await views.iframes(fetch);
            const text = 'privacy';
            const topic = (html[1]?.includes(text)) ? true : false;
            expect(topic).to.be.true;
        });

    });

    describe("resume", () => {

        it("has 3 resumes", async () => {
            const html = await views.iframes(fetch);
            const text = 'resume';
            const resume = [];
            for(let i=0; i<html.length; i++)
            {
                resume.push(html[i]?.includes(text));
            }
            const resumes = resume.filter(Boolean).length;
            expect(resumes).to.be.equal(3);
        });

    });

});

describe("interstitial", () => {

    it("should be an array", async () => {
        const html = await views.interstitial(fetch);
        expect(html).to.be.a("array");
    });

    it("should have an interstitial", async () => {
        const html = await views.interstitial(fetch);
        expect(html).to.have.lengthOf(1);
    });

});
