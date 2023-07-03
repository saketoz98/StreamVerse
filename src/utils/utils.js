export const convertViewCount = (viewCount)=>{
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(0) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(0) + "K";
    } else {
      return viewCount.toString();
    }
  }

  export const createRandomMessage = () => {
    const messages = [
      "ChatGPT is an amazing language model!",
      "I'm impressed by the capabilities of ChatGPT.",
      "ChatGPT has been trained on a vast amount of data.",
      "I find ChatGPT's responses to be quite accurate.",
      "The conversational abilities of ChatGPT are impressive.",
      "ChatGPT can generate human-like text.",
      "I'm amazed at how well ChatGPT understands natural language.",
      "ChatGPT can provide insightful and helpful responses.",
      "Using ChatGPT can enhance user experiences in applications.",
      "I enjoy interacting with ChatGPT in various scenarios.",
    ];
  
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }