//login page
import * as puppeteer from 'puppeteer'

//selectors
export const selectors: {[key: string]: string} = {
	usernameField: '#username',
	passwordField: '#password',
	loginButton:
		'#content > div > div:nth-child(2) > div > form > div:nth-child(4) > input',
	loginSucess: '#content > ul > li:nth-child(1)',
	accountRecovery: '#error-summary-heading-example-1',
}

export async function loginToCsl(
	page: puppeteer.Page,
	username: string,
	password: string
) {
	await page.type(selectors.usernameField, username)
	await page.type(selectors.passwordField, password)
	await page.click(selectors.loginButton)
}
