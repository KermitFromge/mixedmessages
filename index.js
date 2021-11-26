let components = ['susssus', 'amongus', 'ImPOOOOStOR', 'subsusus', 'sudaisuaiias', 'amoooongas'];
const createMessage = (length = 3) => {
    let message = '';
    for (i = 0; i < length; i++) {
        message += components[Math.floor(Math.random() * components.length)];
    }
    return message
}
console.log(createMessage(10));
console.log(createMessage(10));
console.log(createMessage(10));
console.log(createMessage(10));
console.log(createMessage(10));
