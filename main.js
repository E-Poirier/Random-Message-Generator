
//random num gen, up to 13
const randomQuote = () =>  {
    return Math.floor(Math.random() * 13);
};

const randomPrompt = () => {
    return Math.floor(Math.random() * 6);
}
 
//array storing the funny quotes (13 of them)

const quotes = ['Why do they call it rush hour when nothing moves?',  "Don’t be so humble — you are not that great.", "If you can’t be kind, at least be vague.",
 "There is only one thing in the world worse than being talked about, and that is not being talked about.", "Always forgive your enemies; nothing annoys them so much.",
"In real life, I assure you, there is no such thing as algebra.", "Instant gratification takes too long.", "Accept who you are. Unless you’re a serial killer.",
"If I’m not back in five minutes, just wait longer.", "Whoever said that money can’t buy happiness, simply didn’t know where to go shopping.", 
"So be wise, because the world needs more wisdom, and if you cannot be wise, pretend to be someone who is wise, and then just behave like they would.", 
"I’m not good at the advice. Can I interest you in a sarcastic comment?", "I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later."]

// random promts to be combined at random with the quotes

const prompts = ["Here's a good one! ", "This will give you a laugh! " , "LMAOOOO!!!! ", "Funny if you ask me. ", "Wish I came up with this one. ", "Well said! "]

//fucntion that combines and outputs a quote and prompt

const messageGenerator = () => {
    return prompts[randomPrompt()] + quotes[randomQuote()];
}

console.log(messageGenerator())
//console.log(quotes)
