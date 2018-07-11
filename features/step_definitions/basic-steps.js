const  { After, Given, Then, When }  =  require('cucumber')

Given('I visit the site',  async  function()  {
 return  await  this.openHomePage()
})

Then('I should see {string}',  async  function(content)  {
 return  await  this.pageHasTextContent(content)
})

Then('I fill in {string} with {string}', async function(field, content) {
  return await this.fillFormField(field.toLowerCase(), content);
})

Then('I click {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
});

After(async  function()  {
 return  await  this.closeHomePage()
})
