export const questions = [
  {
    number: "01",
    question: "회사에서 오늘은 단란한 파티를 하는날!<br>동료가 옆에있는 나는?",
    choices: [
      {
        text: "파티관객이니깐 조용히...<br>(누가 말하길 기대한다)",
        value: "i",
      },
      { text: "동료님@@!<br>우리 같이 이야기나눠요~!", value: "e" },
    ],
  },
  {
    number: "02",
    question: "칼퇴를 하기위해<br>회사에서 나는.....",
    choices: [
      { text: "에이 이정도면 되겠지 얼른칼퇴!", value: "s" },
      {
        text: "음..내일꺼 미리 조금만하고..<br>내일 또 뭐할꺼 있나?",
        value: "n",
      },
    ],
  },
  {
    number: "03",
    question: "동기인 직원이<br>오랜만에 대화를 나누고자 한다",
    choices: [
      { text: "무슨일있나..?<br>무슨말을 먼저해야 할지 모르겠네", value: "f" },
      { text: "설마 퇴사하나?<br>퇴사하면 뭐하냐고 물어봐야지.", value: "t" },
    ],
  },
  {
    number: "04",
    question:
      "스타트업인 회사에서 나는 프로젝트를 맡게 되었다. 처음 시작한 건?",
    choices: [
      { text: "일단 계획을 세우자<br>언제 기한을 달성하면좋을까?", value: "j" },
      {
        text: "먼저 이야기해봐야겠다<br>팀원이랑 이야기하면 되겠지?",
        value: "p",
      },
    ],
  },
  {
    number: "05",
    question: "내가 선호하는<br>회사 분위기는?",
    choices: [
      { text: "맡은일들에 묵묵히 진행하자<br>수직적인 타입", value: "" },
      { text: "쉽게 친해지기 쉬운 수평적인 타입", value: "" },
    ],
  },
  {
    number: "06",
    question: "드디어 퇴근이다!<br>퇴근후 내가 하는건?",
    choices: [
      { text: "아우...피곤한데 바로 집에가자...", value: "" },
      { text: "나간김에 밖에서 밥이나먹을까<br>(동료를꼬드긴다)", value: "" },
    ],
  },
  {
    number: "07",
    question:
      '사수가 나에게 말을건냈다.<br>"잘하긴한데 뭐가부족하긴하다"이때 나는?',
    choices: [
      { text: "다음엔 열심히 해보겠다는<br>사람이란 걸 보여주자!", value: "" },
      { text: "갑자기 이런말을?<br>기분은 좋지않네..", value: "" },
    ],
  },
  {
    number: "08",
    question: "회사일이 너무어렵다ㅠㅠ<br>적응이 잘안되는것같다 이때 나는?",
    choices: [
      { text: "시간낭비다.<br>사수님한테 상담을 요청해야겠어", value: "" },
      { text: "모르겠다.. 오늘도..<br>어떤방법이든 찾아봐야겠다. ", value: "" },
    ],
  },
  {
    number: "09",
    question: "좋은 곳에서 이직 제안이 왔다!<br>나의 선택은?",
    choices: [
      { text: "내가가고싶은곳인데..<br>좋은 기회이니깐 가야지!", value: "" },
      {
        text: "지금 회사도 좋은데..<br>이 시기에 가기엔 위험하지않을까?",
        value: "",
      },
    ],
  },
  {
    number: "10",
    question: "회사에서 막내 탈출했다.<br>나의 생각은?",
    choices: [
      { text: "여태까지 잘적응했네..<br>더 열심히 가보자고!", value: "" },
      { text: "벌써 막내탈출이라니!<br>월급도 오르려나?", value: "" },
    ],
  },
];
export const results = [
  {
    title: "나만의 상상<br>창의적인 분석가",
    character: "../images/gross.png",
    results: [
      "혼자서 멘탈 케어가 가능해요!<br>소속이 없어도, 벌이가 불안정해도 저는 지금이 좋아요!",
      "일에 대한 욕심도 많아요.<br>행복한 자신의 일이라고 할 수 있어요!",
      "수평적인 환경에서 더 잘해요!<br>하지만 누구보다 스스로 관리가 철저해요!",
      "리더십 있다는 소리를 자주 들어요.<br>꽤 추진력이 있는 편이죠~ ",
    ],
    jobs: ["그로스<br>마케터", "실험적"],
    lectureImg: "../images/grossbg.png",
    lectureUrl: "https://www.thefreshmkt.com/study/google-analytics",
  },
  {
    title: "회사에서의<br>hot한인싸",
    character: "../images/contents.png",
    results: [
      "나는야 회사 사람들 멘탈 지킴이!<br>언제나 도와주는 도움요정",
      "여러 사람과 협업이 필요한 직무에 찰떡!",
      "진행력 갑! 추진력 갑!<br>빠른 속도로 동시에 여러 업무를 해결할 수 있어요.",
      "회사 파티는 무조건 참석!,<br>회사사람들 이벤트까지 우리가 다 챙길게요",
    ],
    jobs: ["콘텐츠<br>마케터", "인싸"],
    lectureImg: "../images/contentsbg.png",
    lectureUrl: "https://www.thefreshmkt.com/monthly-mkt",
  },
  {
    title: "나의 브랜드는<br>상상력!",
    character: "../images/brand.png",
    results: [
      "이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!",
      "섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.",
      "가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ (아마도?)",
      "업무에 예민할 때도 있지만,<br>그래서 결과물은 완벽하죠!",
    ],
    jobs: ["브랜드<br>마케터", "예술가"],
    lectureImg: "../images/brandbg.png",
    lectureUrl: "https://www.thefreshmkt.com/study-mkt",
  },
  {
    title: "가보자고!<br>중요한건 꺾이지 않는 마음",
    character: "../images/digital.png",
    results: [
      "전략적으로 계획을 세우는 걸 좋아해요!",
      "평소 경제와 사회 이슈에 관심이 매우 많아요.",
      "꿈이 커요!<br>크게 성공할 수 있는 한 방을 이뤄낼 거예요~",
      "일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.",
    ],
    jobs: ["디지털<br>마케터", "투자자"],
    lectureImg: "../images/digitalbg.png",
    lectureUrl: "https://www.thefreshmkt.com/study/ppt-hard",
  },
  {
    title: "프로<br>집중러",
    character: "../images/Performance.png",
    results: [
      "저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)",
      "혼자서 더 잘해요.<br>솔로 워커 최고!",
      "관심 분야가 생기면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.",
      "(이상) <<<<<< (현실)<br>가끔 이성에게 상처를 줄 때가 있어요, 그게 아닌데...",
    ],
    jobs: ["퍼포먼스<br>마케터", "데이터분석"],
    lectureImg: "../images/performancebg.png",
    lectureUrl: "https://bit.ly/platform_standard",
  },
];
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 0,
};
