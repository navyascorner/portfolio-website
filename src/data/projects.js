// add projects here
// projects page will show all of them, home will show top 3
// demo: "" hides the Try Here! button and makes the image unclickable
// readmore: "" hides the Read More button
//
// detail page fields:
// stack: [] array of technologies, rendered as PYTHON · PANDAS · NUMPY
// detailIntro: opening paragraph on the detail page (falls back to homeDescription)
// writeup: [] array of { heading, body, image?, caption? }
//          blank lines inside body become separate paragraphs
//          empty array hides the writeup section entirely
//{
    //id: "project-id",
    //title: "",
    //subtitle: "Python, pandas, numpy, scikit-learn, PyTorch",
    //stack: ["Python", "pandas", "numpy", "scikit-learn", "PyTorch"],
    //image: `${import.meta.env.BASE_URL}book-recommendation.png`,
    //detailImage: `${import.meta.env.BASE_URL}book-recommendation-detail.png`,
    //github: "https://github.com/navyascorner/agentic-book-recommendation",
    //demo: "",
    //readmore: "",
    //homeDescription:
      //"I made a book recommender. It has a conversational layer to ask user preferences with LLMs. It uses that to extract mood signals, which are then fed to a two-tower network I built in PyTorch to retrieve candidate books. These books are then ranked beyond keyword match. Basically, this book recommendation goes 1 layer deeper to suggest you a book you will prefer according to your mood.",
    //detailIntro:
      //"A book recommender that asks what you're in the mood for, then finds books that match the feeling rather than the keywords. A conversational LLM layer extracts mood signals, a two-tower network retrieves candidates, and a reranker orders them.",
    //writeup: [
      //{
        //heading: "The Problem",
        //body: "Most book recommenders match on metadata. You liked a mystery, so here are more mysteries. That works until you want something specific in a way that genre tags cannot express.\n\nWhat I actually wanted was a system that could take something like 'something slow and sad but not hopeless' and return books that fit. That is a mood, not a category, and nothing in a standard collaborative filtering setup has a place to put it.",
      //},
      //{
        //heading: "How It Works",
        //body: "The system has three stages. First, a conversational layer built on an LLM asks a short series of questions and extracts structured mood signals from free-text answers.\n\nSecond, those signals feed a two-tower network I built in PyTorch. One tower encodes the query, the other encodes the books, and both project into a shared embedding space where nearest neighbours are the candidate set.\n\nThird, an LLM reranker takes the top candidates and orders them against the original conversation, catching the cases where embedding similarity and actual fit come apart.",
      //},
      //{
        //heading: "What I Learned",
        //body: "The two-tower architecture was the right call for retrieval speed, but most of the quality came from the reranking stage. Embedding similarity gets you into the right neighbourhood; it does not reliably tell you which of twenty similar books is the one this particular person wants right now.\n\nI also underestimated how much the conversational layer mattered. Early versions asked one question and got vague answers. Asking three short questions instead of one open-ended one produced far cleaner mood signals.",
      //},
      //{
        //heading: "What I'd Do Differently",
        //body: "I would build evaluation in from the start. I was judging output by reading recommendations and deciding whether they felt right, which does not scale and is not honest about whether changes helped.\n\nI would also cache the book tower embeddings properly rather than recomputing them, which is the obvious fix I kept postponing.",
      //},],},

export const projects = [
  {
    id: "book-recommender",
    title: "NoraBot: Book Recommendation",
    subtitle: "Python, PyTorch, Gemini, agentic flow, two-tower model, sentence-transformers, pandas",
    //subtitle: "Python, pandas, numpy, scikit-learn, PyTorch",
    stack: [
      "Python",
      "PyTorch",
      "Gemini",
      "Agentic flow",
      "Two-tower model",
      "Sentence Transformers",
      "Vector embeddings",
      "pandas",
      "NumPy",
    ],
    image: `${import.meta.env.BASE_URL}book-recommendation.png`,
    detailImage: `${import.meta.env.BASE_URL}book-home.png`,
    github: "https://github.com/navyascorner/book-recommendation",
    demo: "https://navyascorner.github.io/book-recommendation/",
    homeDescription:
      "Agentic book recommender that decides how to retrieve and rank candidates (two-tower hybrid, embedding lookup) based on context given by the user.",
    detailIntro:
      "Agentic book recommender that decides how to retrieve and rank candidates (two-tower hybrid, embedding lookup) based on context given by the user.",
    writeup: [
      {
        heading: "3 Modes on the home page",
        body: "Try as a new user without any prior history. Since user login or authentication is not set up, this is the cold-start experience.\n\nTry as Ivy, a fictional persona with a user history.\n\nSee what the recommender would recommend to someone with an extensive reading history, such as Steve Jobs.",
      },
      //{
        //heading: "cos",
        //body: "b",
      //},
      //{
        //heading: "it is",
        //body: "c",
      //},
      //{
        //heading: "what it is",
        //body: "d",
      //},
    ],
  },
];
