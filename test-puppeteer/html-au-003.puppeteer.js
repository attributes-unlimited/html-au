const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1600,
      height: 279
    })
  }
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    }
    startWaitingForEvents();
    await targetPage.goto('http://127.0.0.1:64699/example/index.html');
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Hello Message using get)'),
      targetPage.locator('button:nth-of-type(1)'),
      targetPage.locator('::-p-xpath(/html/body/nav/button[1])'),
      targetPage.locator(':scope >>> button:nth-of-type(1)'),
      targetPage.locator('::-p-text(Hello Message using)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 121,
          y: 13.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Hello Message post)'),
      targetPage.locator('button:nth-of-type(2)'),
      targetPage.locator('::-p-xpath(/html/body/nav/button[2])'),
      targetPage.locator(':scope >>> button:nth-of-type(2)'),
      targetPage.locator('::-p-text(Hello Message post)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 43.015625,
          y: 10.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Click Counter)'),
      targetPage.locator('nav > a:nth-of-type(1)'),
      targetPage.locator('::-p-xpath(/html/body/nav/a[1])'),
      targetPage.locator(':scope >>> nav > a:nth-of-type(1)'),
      targetPage.locator('::-p-text(Click Counter)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 74.9375,
          y: 11.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(click me)'),
      targetPage.locator('a button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"me-0\\"]/button)'),
      targetPage.locator(':scope >>> a button'),
      targetPage.locator('::-p-text(click me)')
    ])
      .setTimeout(timeout)
      .click({
        count: 2,
        offset: {
          x: 12,
          y: 7.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(click me)'),
      targetPage.locator('a button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"me-2\\"]/button)'),
      targetPage.locator(':scope >>> a button'),
      targetPage.locator('::-p-text(click me)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 12,
          y: 7.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(click me)'),
      targetPage.locator('a button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"me-3\\"]/button)'),
      targetPage.locator(':scope >>> a button'),
      targetPage.locator('::-p-text(click me)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 12,
          y: 7.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(click me)'),
      targetPage.locator('a button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"me-4\\"]/button)'),
      targetPage.locator(':scope >>> a button'),
      targetPage.locator('::-p-text(click me)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 12,
          y: 7.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('a:nth-of-type(3)'),
      targetPage.locator('::-p-xpath(/html/body/nav/a[3])'),
      targetPage.locator(':scope >>> a:nth-of-type(3)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 33.828125,
          y: 3.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Submit POST)'),
      targetPage.locator('#submit_post'),
      targetPage.locator('::-p-xpath(//*[@id=\\"submit_post\\"])'),
      targetPage.locator(':scope >>> #submit_post'),
      targetPage.locator('::-p-text(Submit POST)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 41.453125,
          y: 11.84375,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Submit GET)'),
      targetPage.locator('a button:nth-of-type(2)'),
      targetPage.locator('::-p-xpath(/html/body/a/main/user-form/div[5]/button[2])'),
      targetPage.locator(':scope >>> a button:nth-of-type(2)'),
      targetPage.locator('::-p-text(Submit GET)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 35.96875,
          y: 5.84375,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Dialog Buttons)'),
      targetPage.locator('a:nth-of-type(4)'),
      targetPage.locator('::-p-xpath(/html/body/nav/a[4])'),
      targetPage.locator(':scope >>> a:nth-of-type(4)'),
      targetPage.locator('::-p-text(Dialog Buttons)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 56.9375,
          y: 8.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Close)'),
      targetPage.locator('#dialog-placeholder-2 button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"dialog-placeholder-2\\"]/dialog/button)'),
      targetPage.locator(':scope >>> #dialog-placeholder-2 button'),
      targetPage.locator('::-p-text(Close)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 15,
          y: 10.6875,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(get open dialog attribute)'),
      targetPage.locator('main > button:nth-of-type(1)'),
      targetPage.locator('::-p-xpath(/html/body/a/main/dialog-buttons/main/button[1])'),
      targetPage.locator(':scope >>> main > button:nth-of-type(1)'),
      targetPage.locator('::-p-text(get open dialog)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 103,
          y: 11.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Close)'),
      targetPage.locator('#dialog-placeholder-2 button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"dialog-placeholder-2\\"]/dialog/button)'),
      targetPage.locator(':scope >>> #dialog-placeholder-2 button'),
      targetPage.locator('::-p-text(Close)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 26,
          y: 11.6875,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(post dialog.show)'),
      targetPage.locator('a button:nth-of-type(2)'),
      targetPage.locator('::-p-xpath(/html/body/a/main/dialog-buttons/main/button[2])'),
      targetPage.locator(':scope >>> a button:nth-of-type(2)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 33.953125,
          y: 2.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Close)'),
      targetPage.locator('#dialog-placeholder-2 button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"dialog-placeholder-2\\"]/dialog/button)'),
      targetPage.locator(':scope >>> #dialog-placeholder-2 button'),
      targetPage.locator('::-p-text(Close)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 26,
          y: 2.6875,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(post dialog.showModal)'),
      targetPage.locator('button:nth-of-type(3)'),
      targetPage.locator('::-p-xpath(/html/body/a/main/dialog-buttons/main/button[3])'),
      targetPage.locator(':scope >>> button:nth-of-type(3)'),
      targetPage.locator('::-p-text(post dialog.showModal)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 70.640625,
          y: 9.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Close)'),
      targetPage.locator('#dialog-placeholder-2 button'),
      targetPage.locator('::-p-xpath(//*[@id=\\"dialog-placeholder-2\\"]/dialog/button)'),
      targetPage.locator(':scope >>> #dialog-placeholder-2 button'),
      targetPage.locator('::-p-text(Close)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 16,
          y: 14.0625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Patch Example)'),
      targetPage.locator('a:nth-of-type(5)'),
      targetPage.locator('::-p-xpath(/html/body/nav/a[5])'),
      targetPage.locator(':scope >>> a:nth-of-type(5)'),
      targetPage.locator('::-p-text(Patch Example)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 50.59375,
          y: 3.5625,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(2) > input'),
      targetPage.locator('::-p-xpath(/html/body/a/main/patch-example/div[2]/input)'),
      targetPage.locator(':scope >>> div:nth-of-type(2) > input')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 94,
          y: 11.84375,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('div:nth-of-type(2) > input'),
      targetPage.locator('::-p-xpath(/html/body/a/main/patch-example/div[2]/input)'),
      targetPage.locator(':scope >>> div:nth-of-type(2) > input')
    ])
      .setTimeout(timeout)
      .fill('uuuu');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Add)'),
      targetPage.locator('div:nth-of-type(2) > button'),
      targetPage.locator('::-p-xpath(/html/body/a/main/patch-example/div[2]/button)'),
      targetPage.locator(':scope >>> div:nth-of-type(2) > button')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 20,
          y: 6.84375,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria([role=\\"main\\"]) >>>> ::-p-aria([role=\\"combobox\\"])'),
      targetPage.locator('select'),
      targetPage.locator('::-p-xpath(/html/body/a/main/patch-example/div[4]/select)'),
      targetPage.locator(':scope >>> select')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 39,
          y: 8.84375,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria([role=\\"main\\"]) >>>> ::-p-aria([role=\\"combobox\\"])'),
      targetPage.locator('select'),
      targetPage.locator('::-p-xpath(/html/body/a/main/patch-example/div[4]/select)'),
      targetPage.locator(':scope >>> select')
    ])
      .setTimeout(timeout)
      .fill('uuuu');
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Submit)'),
      targetPage.locator('div:nth-of-type(4) > button:nth-of-type(1)'),
      targetPage.locator('::-p-xpath(/html/body/a/main/patch-example/div[4]/button[1])'),
      targetPage.locator(':scope >>> div:nth-of-type(4) > button:nth-of-type(1)'),
      targetPage.locator('::-p-text(Submit)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 40,
          y: 5.84375,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Start Over)'),
      targetPage.locator('a button'),
      targetPage.locator('::-p-xpath(/html/body/a/main/patch-example/button)'),
      targetPage.locator(':scope >>> a button'),
      targetPage.locator('::-p-text(Start Over)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 50,
          y: 7.84375,
        },
      });
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
