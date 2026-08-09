// add projects here
// projects page will show all of them, home will show top 3

export const projects = [
  {
    id: "book-recommender",
    title: "Book Recommendation Engine",
    subtitle: "Python, pandas, numpy, scikit-learn, PyTorch",
    image: `${import.meta.env.BASE_URL}book-recommendation.png`,
    github: "https://github.com/navyascorner/agentic-book-recommendation",
    demo: "", //add url here and the try it here button will reappear on home page
    homeDescription:
    "I made a book recommender. It has a conversational layer to ask user preferences with LLMs. It uses that to extract mood signals, which are then fed to a two-tower network I built in PyTorch to retrieve candidate books. These books are then ranked beyond keyword match. Basically, this book recommendation goes 1 layer deeper to suggest you a book you will prefer according to your mood.",
    description:
      "I made a book recommender. It has a conversational layer to ask user preferences with LLMs. It uses that to extract mood signals, which are then fed to a two-tower network I built in PyTorch to retrieve candidate books. These books are then ranked beyond keyword match. Basically, this book recommendation goes 1 layer deeper to suggest you a book you will prefer according to your mood.",
  },
  {
    id: "aviation-vlm",
    title: "Aviation-VLM",
    subtitle: "Fine-tuning",
    image: `${import.meta.env.BASE_URL}aviation-llm.png`,
    github: "https://github.com/navyascorner/fine-tuning-VLM-aviation-sectional-charts",
    demo: "", //add url here and the try it here button will reappear on home page
    homeDescription:
     "Have you seen one of those complicated FAA sectional charts? I fine-tuned a Vision Language Model (Qwen3-VL-4B-Instruct) to read different components like airports with or without ATC towers on an image of a sectional chart.",
  },
  {
    id: "llm-scratch",
    title: "Implementation of LLM from Scratch",
    subtitle: "PyTorch",
    image: `${import.meta.env.BASE_URL}llm-scratch.png`,
    github: "https://github.com/navyascorner/llm-scratch",
    demo: "", //add url here and the try it here button will reappear on home page
    homeDescription:
    "I implemented ChatGPT2 from scratch to understand how LLMs truly work. I mostly followed Andrej Karpathy.",
  },
];