Cypress.Commands.add("setViewportBasedOnDevice", (deviceName) => {
	const viewportDimensions = {
		web: [1280, 1024],
		tablet: [768, 1024],
		"ipad-2": [768, 1024],
		"ipad-mini": [768, 1024],
		"iphone-3": [320, 480],
		"iphone-4": [320, 480],
		"iphone-5": [320, 568],
		"iphone-6": [375, 667],
		"iphone-6+": [414, 736],
		"iphone-7": [375, 667],
		"iphone-8": [375, 667],
		"iphone-x": [375, 812],
		"iphone-xr": [414, 896],
		"iphone-se2": [375, 667],
		"samsung-note9": [412, 846],
		"samsung-s10": [360, 760]
	}
	const dimensions = viewportDimensions[deviceName] || [1280, 1024]
	cy.viewport(dimensions[0], dimensions[1])
})
