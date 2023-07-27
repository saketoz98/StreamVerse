export const convertViewCount = (viewCount) => {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(0) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(0) + "K";
  } else {
    return viewCount.toString();
  }
};

// Array of sample user names
const userNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Grace",
  "Henry",
  "Isabel",
  "Jack",
  "Karen",
];

// Array of sample AI-related messages
const messages = [
  "Hey, have you heard about ChatGPT? It's an amazing AI language model!",
  "I just had a conversation with ChatGPT and it was mind-blowing!",
  "Artificial Intelligence is changing the world, and ChatGPT is at the forefront!",
  "I can't believe how smart ChatGPT is. It can answer almost anything!",
  "AI is the future, and ChatGPT is leading the way.",
  "I wonder how ChatGPT is trained. It's so knowledgeable!",
  "ChatGPT can generate human-like text. It's both fascinating and scary.",
  "Talking to AI feels like talking to a real human sometimes.",
  "ChatGPT is revolutionizing natural language processing.",
  "AI is transforming various industries, from healthcare to finance.",
];

// Function to generate a random message object
export const generateRandomMessage = ()=>{
  const randomUserName =
    userNames[Math.floor(Math.random() * userNames.length)];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return { name: randomUserName, message: randomMessage };
}
