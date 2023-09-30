
import { defaultConfig, prepareAuConfig } from '../../src/index.js';
import { createElement, defineElement } from '../../src/utils/index.js'
import { recurseTestNodes } from '../common.js';
import { POST_TEST, PostTest } from './postTestEle.js';

defineElement(POST_TEST, PostTest);

const auCfg = prepareAuConfig(defaultConfig);

describe('auCed POST', () => {
  let host 
  beforeEach(()=>{
    host = createElement<HTMLDivElement>({tagName:'div'})
  })
  describe('child btn click', () => {
    it('should update the model', (done) => {
      const ele = createElement<PostTest>({
        tagName: POST_TEST,
        attributes: {}
      })
      host.append(ele)

      ele.model.keeper = 'hi';
      ele.body.set('sound','music')
      ele.connectedCallback()
      recurseTestNodes(host, auCfg);

      const btn = ele.querySelector(':scope button') as HTMLButtonElement;
      expect(ele.model.counter).toBe('0')
      setTimeout(() => {
        btn.click()
        setTimeout(() => {
          // the orginial ele is gone and we have a new element
          const ele2 = host.querySelector(`:scope ${POST_TEST}`)
          expect(ele2.model.counter).toBe('1');
          expect(ele2.model.keeper).toBe('hi');
          // ensure body is set
          expect(ele2.body.get('sound')).toBe('music');
          done()
        }, 1);
      }, 1);
    })
  })

  describe('host with trigger input', () => {
    it('should update the element', (done) => {
      const ele = createElement<PostTest>({
        tagName: POST_TEST,
        attributes: {
          'au-trigger': 'input',
          'au-target':`closest ${POST_TEST}`,
          'au-ced': `post ${POST_TEST}`
        }
      })
      host.append(ele)

      ele.model.keeper = 'hi';
      ele.body.set('sound','songs')
      ele.connectedCallback()
      recurseTestNodes(host, auCfg);

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
          const ele2 = host.querySelector(`:scope ${POST_TEST}`)
          expect(ele2.model.counter).toBe('1')
          expect(ele2.model.keeper).toBe('hi')
          // ensure the body is getting set
          expect(ele2.body.get('sound')).toBe('splash');
          done()
        }, 1);
      }, 1);
    })
  })
})

