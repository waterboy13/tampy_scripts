// ==UserScript==
// @name         scrip 1
// @namespace    http://tampermonkey.net/
// @version      2024-01-04
// @description  try to take over the world!
// @author       You
// @match        https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAKRz5h9UNEZCM0RDQ0haQzc3TFdXRlpJUEtXRVhCSy4u
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAKRz5h9UNEZCM0RDQ0haQzc3TFdXRlpJUEtXRVhCSy4u

function main(){
    // Select the radio button element using its ID or other appropriate selector
    const inputField = document.querySelector('input[aria-labelledby="QuestionId_r4243a47d271a4cc387ec6fc1516993ff QuestionInfo_r4243a47d271a4cc387ec6fc1516993ff"]');


    // Check if the input field is found
    if (inputField !== null) {
        // Set the value of the input field to your desired string
        inputField.value = 'Your Desired String';
        console.log('Input field filled successfully.');
    } else {
        console.error('Input field not found. Check the selector.');
    }
}

// Wait for the document to be fully loaded
//window.addEventListener('load', main);

function observeDOM() {
    const observer = new MutationObserver(main);
    observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    main();
    observeDOM();
} else {
    window.addEventListener('load', function() {
        main();
        observeDOM();
    });
}

//https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAKRz5h9UNEZCM0RDQ0haQzc3TFdXRlpJUEtXRVhCSy4u
