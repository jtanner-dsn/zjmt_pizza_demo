sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zjmt/zjmtpizzademo/test/integration/pages/PizzaOrderList.gen",
	"zjmt/zjmtpizzademo/test/integration/pages/PizzaOrderObjectPage.gen"
], function (JourneyRunner, PizzaOrderListGenerated, PizzaOrderObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zjmt/zjmtpizzademo') + '/test/flp.html#app-preview',
        pages: {
			onThePizzaOrderListGenerated: PizzaOrderListGenerated,
			onThePizzaOrderObjectPageGenerated: PizzaOrderObjectPageGenerated
        },
        async: true
    });

    return runner;
});

