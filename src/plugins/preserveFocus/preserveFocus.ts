import { eventSetupArgs, pluginArgs } from "../../types.js";

const reverseString = (str) => str.split("").reverse().join("");

function findFirstNonMatchingIndex(str1, str2) {
  const minLength = Math.min(str1.length, str2.length);

  for (let i = 0; i < minLength; i++) {
    if (str1[i] !== str2[i]) {
      return i; // Return the index of the first non-matching character
    }
  }

  // If we reach this point, all characters up to the minimum length match
  // Check if one string is longer than the other and return its length as the index
  if (str1.length !== str2.length) {
    return minLength;
  }
  // If both strings are identical, return -1 to indicate no non-matching characters
  return -1;
}

export function setCurrentValue(args: eventSetupArgs) {
  // if a form type, need to store the current values for all the input elements
  // since input or change bubbles
  // might be best to use formdata
  const inputs = args.ele.querySelectorAll<HTMLInputElement>(':scope input')
  //const currentData = makeFormData(args.ele, undefined)
  inputs.forEach(iput => {
    Object.defineProperty(iput, '_preserveFocus', {
      value: iput.value
    })
  })
}

// https://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field
function caretPosition(input) {
  const start = input.selectionStart,
    end = input.selectionEnd,
    diff = end - start;

  if (start >= 0 && start == end) {
    // do cursor position actions, example:
    // console.log('Cursor Position: ' + start);
    return start;
  } else if (start >= 0) {
    // do ranged select actions, example:
    // console.log('Cursor Position: ' + start + ' to ' + end + ' (' + diff + ' selected chars)');
    return end;
  }
}


/** useful where a form is re-rendering and we want to keep the focus. Ideally this wouldn't need to happen, but it's here. */
export async function preserveFocus(plugin: pluginArgs, args) {
  if (plugin.ele.getAttribute('au-preserve-focus') === null) { return undefined; }
  const triggerEle = plugin.e.target as HTMLInputElement
  const focusNameAttr = triggerEle.getAttribute('name')
  let focusEle = plugin.cedEle.querySelector<HTMLInputElement>(`:scope [name=${focusNameAttr}]`)
  if (focusEle === null) {
    // todo: if a button without a name, then we need a better strategy before bailing out.
    const attrs = ['type', 'class']
    // use a control structure we can break out of
    for (const a of attrs) {
      const setFocusName1 = triggerEle.getAttribute(a)
      const focusEle1 = plugin.cedEle.querySelectorAll<HTMLInputElement>(`:scope [${a}=${setFocusName1}]`)
      if (focusEle1.length === 1) {
        // our query only has one match, so this should be it
        focusEle = focusEle1[0]
        break;
      }
    }
  }
  if (!focusEle) { return undefined }
  focusEle.focus()
  if (!focusEle.setSelectionRange) { return undefined}
  const r2 = caretPosition(triggerEle)
  focusEle.setSelectionRange(r2, r2);
  return r2
}
