import * as puppeteer from 'puppeteer'
import * as helper from '../extension/helper'
import {locators, loginToCsl} from '../page_object/loginPage'

declare var browser: puppeteer.Browser

const timeout = 5000
const url = 'http://localhost:3001'

describe('login page elements', () => {
	let page: puppeteer.Page

	beforeAll(async () => {
		page = await browser.newPage()
		await page.goto(url)
	}, timeout)

	afterAll(async () => {
		await page.close()
	})

	it('Should load the username field', async () => {
		expect(
			await helper.checkElementIsPresent(locators.usernameField, page)
		).toBe(true)
	})

	it('Should load the password field', async () => {
		expect(
			await helper.checkElementIsPresent(locators.passwordField, page)
		).toBe(true)
	})

	it('Should load the login button', async () => {
		expect(await helper.checkElementIsPresent(locators.loginButton, page)).toBe(
			true
		)
	})

	it('Should login to the CSL portal', async () => {
		await loginToCsl(page)
	})
})
