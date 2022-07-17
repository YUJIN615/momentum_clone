const quotes = [
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "제임스 오펜하임",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
  },
  { quote: "자신감 있는 표정을 지으면 자신감이 생긴다", author: "찰스다윈" },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다. ",
    author: "파울로 코엘료",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. ",
    author: "괴테",
  },
  {
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
    author: "헬렌 켈러",
  },
  {
    quote:
      "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭",
  },
  {
    quote:
      "용기있는 자로 살아라. 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라.",
    author: "키케로",
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const randomNum = Math.floor(Math.random() * quotes.length);
quote.innerText = `"${quotes[randomNum].quote}"`;
author.innerText = `-${quotes[randomNum].author}`;
