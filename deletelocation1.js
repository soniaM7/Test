var selenium = require('selenium-webdriver');


describe('LoginText', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        driver.get('https://www.canvusapps.com/login').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        driver.quit().then(done);
    });
	
	it('Should be on the home page', function(done) {
		
		driver.get('https://www.canvusapps.com/login')
		.then(function(){
			console.log("1:");
			return driver.wait(function() {
			   console.log("2:");
			   return driver.findElements(selenium.By.css('label'));		   
			
			 }, 2000);
		})
		.then(function(){
			return driver.findElement(selenium.By.id('email'))
		})
		.then(function(element1){
			console.log("4:");
		    return element1.sendKeys('sonia.miglani33@gmail.com');
		})
		.then(function(){
			return driver.findElement(selenium.By.id('password'))
		})
		.catch(function(error) {
            console.log("error:" + error);
        })
		.then(function(rem1){
			console.log("5:");
		    return rem1.sendKeys('Sonia@12345');
		})
		.then(function(){
			console.log("7:");
			return driver.findElements(selenium.By.name('button'))
		})
		.then(function(elements){
			console.log("8:");
			return elements[0].click();
		})
		.then(function(){
			console.log("9:");
			return driver.wait(function() {
			   console.log("10:");
			   return driver.findElements(selenium.By.css('p'));		   
			}, 2000);	
		})
		.then(function(){
			return driver.getTitle();
		})
		.then(function(title){
			console.log("Title: '" + title	+ "'");
			expect(title).toBe('Ericsson India Private Limited');
		})
		.then(function() {
		   console.log("11:");
		   return driver.findElements(selenium.By.linkText('Settings'));
		   })
		
		.then(function(element1) {
		   console.log("12:");
		   return element1[0].click();
		   })
		.then(function() {
			console.log("13");
			return driver.findElement(selenium.By.linkText('Locations'));
			})
		.then(function(element1) {
			console.log("14");
			return element1.click();
		})
		.then(function() {
		   console.log("11:");
		   return driver.findElements(selenium.By.className('btn btn-info'))
		   })
		.then(function(element1) {
			console.log("14");
			return element1[0].click();
		})
		.then(function() {
		   console.log("11:");
		   return driver.findElements(selenium.By.className('btn btn-danger'))
		   })
		.then(function(element1) {
			console.log("14");
			return element1[0].click();
		})
		.then(function(){
			return driver.sleep(1000);	
		})
		.then(function() {
			return driver.switchTo().alert().accept();
		})
		.then(function(){
			return driver.sleep(1000);	
		})
		.then(done);
	})
	 
});