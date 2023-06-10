// Swift-Code
const swiftCode = `import UIKit

func sayHello() {
    print("Hello, World!")
}

sayHello()`;

// Animation des Swift-Codes
const codeContainer = document.getElementById('code-container');
let currentCodeIndex = 0;

function showNextCharacter() {
    if (currentCodeIndex < swiftCode.length) {
        const nextCharacter = swiftCode.charAt(currentCodeIndex);
        codeContainer.innerHTML += nextCharacter;
        currentCodeIndex++;
        setTimeout(showNextCharacter, 50); // Hier kannst du die Geschwindigkeit der Animation anpassen
    }
}

showNextCharacter();
