//login page
import * as puppeteer from 'puppeteer'

//Locators
export const selectors: {[key: string]: string} = {
	usernameField: '#username',
	passwordField: '#password',
	loginButton:
		'#content > div > div:nth-child(2) > div > form > div:nth-child(4) > input',
}

export async function loginToCsl(page: puppeteer.Page) {
	await page.click(selectors.usernameField)
	await page.keyboard.type('username')
	await page.click(selectors.passwordField)
	await page.keyboard.type('password')
	await page.click(selectors.loginButton)
}
