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

describe("objects", () => {
    
    it("has window", () => {
        expect(window).to.be.instanceOf(Object);
    });
    
    it("has document", () => {
        expect(document).to.be.instanceOf(Object);
    });
    
    it("has head", () => {
        expect(document.head).to.be.instanceOf(Object);
    });
    
    it("has body", () => {
        expect(document.body).to.be.instanceOf(Object);
    });

});

describe("tags", () => {
    
    it("has 9 meta", () => {
        expect(document.getElementsByTagName("meta").length).to.equal(9);
    });
    
    it("has 1 header", () => {
        expect(document.getElementsByTagName("header").length).to.equal(1);
    });
    
    it("has 2 sections", () => {
        expect(document.getElementsByTagName("section").length).to.equal(2);
    });
    
    it("has 1 footer", () => {
        expect(document.getElementsByTagName("footer").length).to.equal(1);
    });
    
    it("has 8 script", () => {
        expect(document.getElementsByTagName("script").length).to.equal(8);
    });

});

describe("selectors", () => {

    describe("ids", () => {
        
        it("has googlebot", () => {
            expect(document.getElementById("googlebot")).to.be.instanceOf(Object);
        });
        
        it("has navbar", () => {
            expect(document.getElementById("navbar")).to.be.instanceOf(Object);
        });
        
        it("has page-about", () => {
            expect(document.getElementById("page-about")).to.be.instanceOf(Object);
        });
        
        it("has page-services", () => {
            expect(document.getElementById("page-services")).to.be.instanceOf(Object);
        });
        
        it("has page-mobile", () => {
            expect(document.getElementById("page-mobile")).to.be.instanceOf(Object);
        });
        
        it("has page-marketing", () => {
            expect(document.getElementById("page-marketing")).to.be.instanceOf(Object);
        });
        
        it("has page-news", () => {
            expect(document.getElementById("page-news")).to.be.instanceOf(Object);
        });
        
        it("has page-team", () => {
            expect(document.getElementById("page-team")).to.be.instanceOf(Object);
        });
        
        it("has page-error", () => {
            expect(document.getElementById("page-error")).to.be.instanceOf(Object);
        });

        it("has iframes", () => {
            expect(document.getElementById("iframes")).to.be.instanceOf(Object);
        });

    });

    describe("classes", () => {
        
        it("has 5 items", () => {
            expect(document.getElementsByClassName("items").length).to.equal(5);
        });

    });

});

describe("assets", () => {

    it("has 3 stylesheets", () => {
        let link = document.getElementsByTagName("link");
        let sum = 0;
        for (let i = 0; i < link.length; i++) 
        {
            if (link[i].getAttribute("rel") === "stylesheet") 
            {
                sum += 1;
            }
        }
        expect(sum).to.equal(3);
    });

    it("has build stylesheet", () => {
        let link = document.getElementsByTagName("link");
        let release;
        for (let i = 0; i < link.length; i++) 
        {
            if (link[i].getAttribute("href") === "build/release.min.css") 
            {
                release = link[i].getAttribute("href");
            }
        }
        expect(release).to.equal("build/release.min.css");
    });

    it("has build script", () => {
        let script = document.getElementsByTagName("script");
        let release;
        for (let i=0; i<script.length; i++) 
        {
            if (script[i].getAttribute("src") === "build/release.min.js") 
            {
                release = script[i].getAttribute("src");
            }
        }
        expect(release).to.equal("build/release.min.js");
    });

});
