const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

const HOME_PAGE = "http://localhost:1337";

class AdressBook {
  constructor() {}

  async openHomePage() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();

    await this.page.goto(HOME_PAGE);
  }

  async  closeHomePage()  {
    await  this.browser.close()
  }

  async pageHasTextContent(expectedContent) {
    const pageContent = await this.page.content();
    const actualContent = pageContent.match(expectedContent)[0];

    expect(actualContent).to.be.eq(expectedContent);
  }

  async fillFormField(field, content) {
    const inputSelector = `#contact-${field}`
    await this.page.waitForSelector(inputSelector)
    this.inputElement = await this.page.$(inputSelector)
    await this.inputElement.type(content)
  }

  async  clickOnAddContactBtn()  {
    const btnSelector =  '.save-contact'
    await  this.page.waitForSelector(btnSelector)
    await  this.page.click(btnSelector)
  }
}

setWorldConstructor(AdressBook);
