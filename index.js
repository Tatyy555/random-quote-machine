const data = [
  {
    id: 0,
    quote:
      "If I have seen further it is by standing on the shoulders of Giants.",
    author: "Isaac Newton",
    color: "#001f3f",
  },
  {
    id: 1,
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    color: "#0074D9",
  },
  {
    id: 2,
    quote:
      "A man who dares to waste one hour of time has not discovered the value of life.",
    author: "Charles Darwin",
    color: "#39CCCC",
  },
  {
    id: 3,
    quote:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
    color: "#B10DC9",
  },
  {
    id: 4,
    quote:
      "You cannot teach a man anything; you can only help him discover it in himself.",
    author: "Galileo",
    color: "#F012BE",
  },
  {
    id: 5,
    quote: "One, remember to look up at the stars and not down at your feet.",
    author: "Stephen Hawking",
    color: "#FF4136",
  },
];

// const [num, setNum] = React.useState(0);
function giveRandomNum(array) {
  return Math.floor(Math.random() * array.length);
}

let myRandom = giveRandomNum(data);

function newQuoteClicked() {
  let x = giveRandomNum(data);
  document.getElementById("background").style.backgroundColor = data[x].color;
  document.getElementById("text").innerText = data[x].quote;
  document.getElementById("text").style.color = data[x].color;
  document.getElementById("author").innerText = data[x].author;
  document.getElementById("author").style.color = data[x].color;
  document.getElementById("tweet-quote").style.backgroundColor = data[x].color;
  document.getElementById("new-quote").style.backgroundColor = data[x].color;
}

const Page = ({ array, num }) => (
  // BackGround
  <div
    id="background"
    className="h-screen w-screen justify-center items-center flex flex-col bg-green-500"
  >
    {/* Container */}
    <div
      id="quote-box"
      className="bg-white h-[280px] w-[500px] flex flex-col rounded-md  justify-center"
    >
      {/* Quote */}
      <p
        id="text"
        className="text-green-500  text-center font-light text-3xl m-5"
      >
        {`"${array[num].quote}"`}
      </p>
      {/* Name */}
      <p
        id="author"
        className="text-green-500  font-extralight mx-5 mb-5 text-end"
      >
        {`"${array[num].author}"`}
      </p>
      {/* Buttoms */}
      <div className="mx-5 text-sm justify-between flex">
        {/* Twitter Button */}

        <a
          class="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${data[num].quote}%20by%20${data[num].author}`}
          data-size="large"
          target="_blank"
          id="tweet-quote"
          className="bg-green-500 text-white px-3 py-2 rounded-sm"
        >
          Twitter
        </a>
        {/* NewQuote Button */}

        <button
          id="new-quote"
          className="bg-green-500 text-white px-3 py-2 rounded-sm"
          onClick={newQuoteClicked}
        >
          New quote
        </button>
      </div>
    </div>
    <p className="text-white text-sm mt-3">by Yamaguchi</p>
  </div>
);

ReactDOM.render(
  <Page array={data} num={myRandom} />,
  document.getElementById("root")
);
