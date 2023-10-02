import url from 'url';
import { createRunner } from '@puppeteer/replay';

export async function run(extension) {
  const runner = await createRunner(extension);

  await runner.runBeforeAllSteps();

  await runner.runStep({
    type: 'setViewport',
    width: 1600,
    height: 279,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: false
  });
  await runner.runStep({
    type: 'navigate',
    url: 'http://127.0.0.1:64699/example/index.html',
    assertedEvents: [
      {
        type: 'navigation',
        url: 'http://127.0.0.1:64699/example/index.html',
        title: ''
      }
    ]
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Hello Message using get'
      ],
      [
        'button:nth-of-type(1)'
      ],
      [
        'xpath//html/body/nav/button[1]'
      ],
      [
        'pierce/button:nth-of-type(1)'
      ],
      [
        'text/Hello Message using'
      ]
    ],
    offsetY: 13.5625,
    offsetX: 121,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Hello Message post'
      ],
      [
        'button:nth-of-type(2)'
      ],
      [
        'xpath//html/body/nav/button[2]'
      ],
      [
        'pierce/button:nth-of-type(2)'
      ],
      [
        'text/Hello Message post'
      ]
    ],
    offsetY: 10.5625,
    offsetX: 43.015625,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Click Counter'
      ],
      [
        'nav > a:nth-of-type(1)'
      ],
      [
        'xpath//html/body/nav/a[1]'
      ],
      [
        'pierce/nav > a:nth-of-type(1)'
      ],
      [
        'text/Click Counter'
      ]
    ],
    offsetY: 11.5625,
    offsetX: 74.9375,
  });
  await runner.runStep({
    type: 'doubleClick',
    target: 'main',
    selectors: [
      [
        'aria/click me'
      ],
      [
        'a button'
      ],
      [
        'xpath///*[@id="me-0"]/button'
      ],
      [
        'pierce/a button'
      ],
      [
        'text/click me'
      ]
    ],
    offsetY: 7.5625,
    offsetX: 12,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/click me'
      ],
      [
        'a button'
      ],
      [
        'xpath///*[@id="me-2"]/button'
      ],
      [
        'pierce/a button'
      ],
      [
        'text/click me'
      ]
    ],
    offsetY: 7.5625,
    offsetX: 12,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/click me'
      ],
      [
        'a button'
      ],
      [
        'xpath///*[@id="me-3"]/button'
      ],
      [
        'pierce/a button'
      ],
      [
        'text/click me'
      ]
    ],
    offsetY: 7.5625,
    offsetX: 12,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/click me'
      ],
      [
        'a button'
      ],
      [
        'xpath///*[@id="me-4"]/button'
      ],
      [
        'pierce/a button'
      ],
      [
        'text/click me'
      ]
    ],
    offsetY: 7.5625,
    offsetX: 12,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'a:nth-of-type(3)'
      ],
      [
        'xpath//html/body/nav/a[3]'
      ],
      [
        'pierce/a:nth-of-type(3)'
      ]
    ],
    offsetY: 3.5625,
    offsetX: 33.828125,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Submit POST'
      ],
      [
        '#submit_post'
      ],
      [
        'xpath///*[@id="submit_post"]'
      ],
      [
        'pierce/#submit_post'
      ],
      [
        'text/Submit POST'
      ]
    ],
    offsetY: 11.84375,
    offsetX: 41.453125,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Submit GET'
      ],
      [
        'a button:nth-of-type(2)'
      ],
      [
        'xpath//html/body/a/main/user-form/div[5]/button[2]'
      ],
      [
        'pierce/a button:nth-of-type(2)'
      ],
      [
        'text/Submit GET'
      ]
    ],
    offsetY: 5.84375,
    offsetX: 35.96875,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Dialog Buttons'
      ],
      [
        'a:nth-of-type(4)'
      ],
      [
        'xpath//html/body/nav/a[4]'
      ],
      [
        'pierce/a:nth-of-type(4)'
      ],
      [
        'text/Dialog Buttons'
      ]
    ],
    offsetY: 8.5625,
    offsetX: 56.9375,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Close'
      ],
      [
        '#dialog-placeholder-2 button'
      ],
      [
        'xpath///*[@id="dialog-placeholder-2"]/dialog/button'
      ],
      [
        'pierce/#dialog-placeholder-2 button'
      ],
      [
        'text/Close'
      ]
    ],
    offsetY: 10.6875,
    offsetX: 15,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/get open dialog attribute'
      ],
      [
        'main > button:nth-of-type(1)'
      ],
      [
        'xpath//html/body/a/main/dialog-buttons/main/button[1]'
      ],
      [
        'pierce/main > button:nth-of-type(1)'
      ],
      [
        'text/get open dialog'
      ]
    ],
    offsetY: 11.5625,
    offsetX: 103,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Close'
      ],
      [
        '#dialog-placeholder-2 button'
      ],
      [
        'xpath///*[@id="dialog-placeholder-2"]/dialog/button'
      ],
      [
        'pierce/#dialog-placeholder-2 button'
      ],
      [
        'text/Close'
      ]
    ],
    offsetY: 11.6875,
    offsetX: 26,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/post dialog.show'
      ],
      [
        'a button:nth-of-type(2)'
      ],
      [
        'xpath//html/body/a/main/dialog-buttons/main/button[2]'
      ],
      [
        'pierce/a button:nth-of-type(2)'
      ]
    ],
    offsetY: 2.5625,
    offsetX: 33.953125,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Close'
      ],
      [
        '#dialog-placeholder-2 button'
      ],
      [
        'xpath///*[@id="dialog-placeholder-2"]/dialog/button'
      ],
      [
        'pierce/#dialog-placeholder-2 button'
      ],
      [
        'text/Close'
      ]
    ],
    offsetY: 2.6875,
    offsetX: 26,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/post dialog.showModal'
      ],
      [
        'button:nth-of-type(3)'
      ],
      [
        'xpath//html/body/a/main/dialog-buttons/main/button[3]'
      ],
      [
        'pierce/button:nth-of-type(3)'
      ],
      [
        'text/post dialog.showModal'
      ]
    ],
    offsetY: 9.5625,
    offsetX: 70.640625,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Close'
      ],
      [
        '#dialog-placeholder-2 button'
      ],
      [
        'xpath///*[@id="dialog-placeholder-2"]/dialog/button'
      ],
      [
        'pierce/#dialog-placeholder-2 button'
      ],
      [
        'text/Close'
      ]
    ],
    offsetY: 14.0625,
    offsetX: 16,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Patch Example'
      ],
      [
        'a:nth-of-type(5)'
      ],
      [
        'xpath//html/body/nav/a[5]'
      ],
      [
        'pierce/a:nth-of-type(5)'
      ],
      [
        'text/Patch Example'
      ]
    ],
    offsetY: 3.5625,
    offsetX: 50.59375,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'div:nth-of-type(2) > input'
      ],
      [
        'xpath//html/body/a/main/epatch-example/div[2]/input'
      ],
      [
        'pierce/div:nth-of-type(2) > input'
      ]
    ],
    offsetY: 11.84375,
    offsetX: 94,
  });
  await runner.runStep({
    type: 'change',
    value: 'uuuu',
    selectors: [
      [
        'div:nth-of-type(2) > input'
      ],
      [
        'xpath//html/body/a/main/epatch-example/div[2]/input'
      ],
      [
        'pierce/div:nth-of-type(2) > input'
      ]
    ],
    target: 'main'
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Add'
      ],
      [
        'div:nth-of-type(2) > button'
      ],
      [
        'xpath//html/body/a/main/epatch-example/div[2]/button'
      ],
      [
        'pierce/div:nth-of-type(2) > button'
      ]
    ],
    offsetY: 6.84375,
    offsetX: 20,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/[role="main"]',
        'aria/[role="combobox"]'
      ],
      [
        'select'
      ],
      [
        'xpath//html/body/a/main/epatch-example/div[4]/select'
      ],
      [
        'pierce/select'
      ]
    ],
    offsetY: 8.84375,
    offsetX: 39,
  });
  await runner.runStep({
    type: 'change',
    value: 'uuuu',
    selectors: [
      [
        'aria/[role="main"]',
        'aria/[role="combobox"]'
      ],
      [
        'select'
      ],
      [
        'xpath//html/body/a/main/epatch-example/div[4]/select'
      ],
      [
        'pierce/select'
      ]
    ],
    target: 'main'
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Submit'
      ],
      [
        'div:nth-of-type(4) > button:nth-of-type(1)'
      ],
      [
        'xpath//html/body/a/main/epatch-example/div[4]/button[1]'
      ],
      [
        'pierce/div:nth-of-type(4) > button:nth-of-type(1)'
      ],
      [
        'text/Submit'
      ]
    ],
    offsetY: 5.84375,
    offsetX: 40,
  });
  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      [
        'aria/Start Over'
      ],
      [
        'a button'
      ],
      [
        'xpath//html/body/a/main/epatch-example/button'
      ],
      [
        'pierce/a button'
      ],
      [
        'text/Start Over'
      ]
    ],
    offsetY: 7.84375,
    offsetX: 50,
  });

  await runner.runAfterAllSteps();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  run()
}
