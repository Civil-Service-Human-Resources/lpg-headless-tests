import * as puppeteer from 'puppeteer'
import * as helper from './helper'

declare var browser: puppeteer.Browser

const timeout = 5000
const url = 'https://localhost:3001'

describe('blah', () => {
	let page: puppeteer.Page

	beforeAll(async () => {
		page = await browser.newPage()
		await page.goto(url)
	}, timeout)

	afterAll(async () => {
		await page.close()
	})

	it('Should load the username field', async () => {
		helper.checkElementIsPresent('#usernames', page)
	})
})
