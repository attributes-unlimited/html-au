
import { defaultConfig, prepareAuConfig } from '../../src/index.js';
import { createElement, defineElement, html } from '../../src/utils/index.js'
import { recurseTestNodes } from '../common.js';
import { PATCH_TEST, PatchTest } from './patchTestEle.js';

defineElement(PATCH_TEST, PatchTest);

const auCfg = prepareAuConfig(defaultConfig);

describe('auCedPatch', () => {
  describe('child btn click', () => {
    it('should not overwrite existing values', (done) => {
      const ele = createElement<PatchTest>({
        tagName: PATCH_TEST,
        attributes: {}
      })

      ele.model.keeper = 'hi';
      ele.body.set('sound','music')
      ele.connectedCallback()
      recurseTestNodes(ele, auCfg);

      const btn = ele.querySelector(':scope button') as HTMLButtonElement;
      expect(ele.model.counter).toBe('0')
      setTimeout(() => {
        btn.click()
        setTimeout(() => {
          expect(ele.model.counter).toBe('1');
          expect(ele.model.keeper).toBe('hi');
          // ensure body is set
          expect(ele.body.get('sound')).toBe('music');
          done()
        }, 1);
      }, 1);
    })
  })

  describe('host with trigger input', () => {
    it('should not overwrite existing values', (done) => {
      const ele = createElement<PatchTest>({
        tagName: PATCH_TEST,
        attributes: {
          'au-trigger': 'input',
          'au-ced': 'patch include'
        }
      })

      ele.model.keeper = 'hi';
      ele.body.set('sound','songs')
      ele.connectedCallback()
      recurseTestNodes(ele, auCfg);

      const input = ele.querySelector(':scope input[name="sound"') as HTMLInputElement;
      input.value = 'splash'
      expect(ele.model.counter).toBe('0')
      setTimeout(() => {
        const event = new Event('input', {
          bubbles: true,
          cancelable: true,
        });
        input.dispatchEvent(event);
        setTimeout(() => {
          expect(ele.model.counter).toBe('1')
          expect(ele.model.keeper).toBe('hi')
          // ensure the body is getting set
          expect(ele.body.get('sound')).toBe('splash');
          done()
        }, 1);
      }, 1);
    })
  })
})

