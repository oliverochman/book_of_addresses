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
}

setWorldConstructor(AdressBook);
