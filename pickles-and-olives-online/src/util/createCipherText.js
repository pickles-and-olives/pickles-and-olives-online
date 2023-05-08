export function getSecretOffset() {
  const offset = Math.floor(Math.random() * 20) + 1;
  return offset;
}

export function cipher(message, offset) {


  if (offset < 0) {
    return cipher(message, offset + 26);
  }

  let output = '';

  for (let i = 0; i < message.length; i++) {
    let c = message[i];

    if (c.match(/[a-z]/i)) {
      let code = message.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + offset) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + offset) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
}

export function decipher(message, offset) {
  return cipher(message, 26 - (offset % 26));
}

async function getEncryptedMessage() {
  const message = await getMessage();
  const offset = await getRandomOffset();
  const encryptedMessage = cipher(message, offset);
  localStorage.setItem('Message', encryptedMessage);
  return encryptedMessage;
}

async function checkIfOffsetCorrect() {
  resultField.innerText = '';
  const actualOffset = localStorage.getItem('offset');
  const userOffset = document.querySelector('#offset-input').value;
  if (actualOffset == userOffset) {
    resultField.innerText = 'Success!';
  } else {
    resultField.innerText = 'Not quite, try again.';
  }
  offsetField.innerHTML = '';
}
