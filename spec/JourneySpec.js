import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

describe('cryptotracker', () => {
  it('displays a graph', async () => {
    const testImg = fs.readFileSync(path.join(__dirname, 'bargraph.png'));
    const url = path.join(__dirname, '..', 'dist', 'index.html');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${url}`);

    const graph = await page.waitFor('canvas.all-done');
    const screenshot = await graph.screenshot();
    expect(screenshot.filter(c => c == 0).length).toBeGreaterThan(0);
    console.log(screenshot, testImg);
    expect(screenshot.toString()).toEqual(testImg.toString());
  });
});