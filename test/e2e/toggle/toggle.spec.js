describe('toggle', function () {

    beforeEach(function () {
        browser.get('/');
    });

    it ('should display the correct title', function () {
        expect(browser.getTitle()).toBe('ngreact-app');
    });

    it ('should toggle the value by clicking the ng1 Toggle', function () {
        var toggle = element(by.id('ng1-toggle'));
        var value = element(by.binding('app.toggleValue'));
        toggle.click();
        expect(value.getText()).toContain('false');
        toggle.click();
        expect(value.getText()).toContain('true');
    });

    it ('should toggle the value by clicking the ngreact wrapper Toggle', function () {
        var toggle = element(by.id('ngreact-wrapper-toggle'));
        var value = element(by.binding('app.toggleValue'));
        toggle.click();
        expect(value.getText()).toContain('false');
        toggle.click();
        expect(value.getText()).toContain('true');
    });

    it ('should toggle the value by clicking the ngreact Toggle', function () {
        var toggle = element(by.id('ngreact-toggle'));
        var value = element(by.binding('app.toggleValue'));
        toggle.click();
        expect(value.getText()).toContain('false');
        toggle.click();
        expect(value.getText()).toContain('true');
    });

    it ('should toggle the value by enter keypress on the ng1 Toggle', function () {
        var toggle = element(by.id('ng1-toggle')).element(by.css('.toggle'));
        var value = element(by.binding('app.toggleValue'));
        toggle.sendKeys(protractor.Key.ENTER);
        expect(value.getText()).toContain('false');
        toggle.sendKeys(protractor.Key.ENTER);
        expect(value.getText()).toContain('true');
    });

    it ('should toggle the value by by enter keypress on the ngreact wrapper Toggle', function () {
        var toggle = element(by.id('ngreact-wrapper-toggle')).element(by.css('.toggle'));
        var value = element(by.binding('app.toggleValue'));
        toggle.sendKeys(protractor.Key.ENTER);
        expect(value.getText()).toContain('false');
        toggle.sendKeys(protractor.Key.ENTER);
        expect(value.getText()).toContain('true');
    });

    it ('should toggle the value by enter keypress on the ngeact Toggle', function () {
        var toggle = element(by.id('ngreact-toggle')).element(by.css('.toggle'));
        var value = element(by.binding('app.toggleValue'));
        toggle.sendKeys(protractor.Key.ENTER);
        expect(value.getText()).toContain('false');
        toggle.sendKeys(protractor.Key.ENTER);
        expect(value.getText()).toContain('true');
    });

});