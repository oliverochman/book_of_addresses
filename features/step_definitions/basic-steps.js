const  { After, Given, Then, When }  =  require('cucumber')

Given('I visit the site',  async  function()  {
 return  await  this.openHomePage()
})

Then('I should see {string}',  async  function(content)  {
 return await this.sleep(3000);
 return  await  this.pageHasTextContent(content)
})

Then('I fill in {string} with {string}', async function(field, content) {
  return await this.fillFormField(field.toLowerCase(), content);
})

When('I click {string}',  async  function(string)  {
 return  await  this.clickOnAddContactBtn()
})

After(async  function()  {
 return  await  this.closeHomePage()
})
