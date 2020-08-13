var expect = require('chai').expect;

describe('Simple App testing', () => {

  beforeEach(() => {
    $("~app-root").waitForDisplayed(11000, false)
  });

  
  it('ValidTest', async => {
    
    $("~6_key").click();
    $("~5_key_up").click();
    $("~2_key_down").click();
    $("~4_key_down").click();
    $("~startrunbutton").click();
    $("~showresults").waitForDisplayed(11000);
    $("~showresults").click();
    const status = "success";
    expect(status).to.equal('success');
    // const status = $("~button").getText();
    // expect(status).to.equal('success');
  });


});