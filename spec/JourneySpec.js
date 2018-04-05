import puppeteer from 'puppeteer';

describe('cryptotracker', () => {
  it('displays a graph', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.chartjs.org/samples/latest/charts/line/basic.html');

    const graph = await page.waitFor('canvas');
    const screenshot = await graph.screenshot();
    expect(screenshot.filter(c => c == 0).length).toBeGreaterThan(0);
  });
});