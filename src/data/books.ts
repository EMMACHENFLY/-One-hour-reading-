export interface Book {
  id: number;
  title: string;
  title_cn: string;
  author: string;
  author_cn: string;
  quote: string;
  quote_cn: string;
  description: string;
  description_cn: string;
  isPublicDomain: boolean;
  link: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Middlemarch",
    title_cn: "米德尔马契",
    author: "George Eliot",
    author_cn: "乔治·艾略特",
    quote: "It is never too late to be what you might have been.",
    quote_cn: "成为你可能成为的人，永远不嫌太晚。",
    description: "Considered by Yiyun Li as the most 'adult' of novels—a profound exploration of disappointment, ambition, and the quiet wisdom of ordinary lives.",
    description_cn: "被李翊云视为最“成熟”的小说。它深刻探讨了失望、野心以及平凡生活中蕴含的寂静智慧。",
    isPublicDomain: true,
    link: "https://www.gutenberg.org/ebooks/145"
  },
  {
    id: 2,
    title: "Persuasion",
    title_cn: "劝导",
    author: "Jane Austen",
    author_cn: "简·奥斯汀",
    quote: "There could have been no two hearts so open, no tastes so similar, no feelings so in unison.",
    quote_cn: "再没有两个人的心能如此敞开，志趣如此相投，情感如此共鸣。",
    description: "Austen's most autumnal world. A story of second chances and the slow, painful ripening of the human heart through time and regret.",
    description_cn: "奥斯汀笔下最具秋意的世界。这是一个关于第二次机会的故事，讲述了人心如何在时光与悔恨中缓慢而痛苦地成熟。",
    isPublicDomain: true,
    link: "https://www.gutenberg.org/ebooks/105"
  },
  {
    id: 3,
    title: "Moby-Dick",
    title_cn: "白鲸",
    author: "Herman Melville",
    author_cn: "赫尔曼·梅尔维尔",
    quote: "It is not down on any map; true places never are.",
    quote_cn: "它不在任何地图上；真正的地方从来都不在。",
    description: "An epic struggle between man and the sublime. Li admires its linguistic wildness and its relentless pursuit of the unknowable.",
    description_cn: "人与崇高之间史诗般的斗争。李翊云钦佩其语言的狂野以及对不可知物坚持不懈的追求。",
    isPublicDomain: true,
    link: "https://www.gutenberg.org/ebooks/2701"
  },
  {
    id: 4,
    title: "War and Peace",
    title_cn: "战争与和平",
    author: "Leo Tolstoy",
    author_cn: "列夫·托尔斯泰",
    quote: "Everything I know, I know only because I love.",
    quote_cn: "我所知道的一切，都是因为爱才得以知晓。",
    description: "The ultimate landscape of human experience. Tolstoy captures the 'real life' that flows steadily beneath the thunder of history.",
    description_cn: "人类经验的终极景观。托尔斯泰捕捉到了在那历史惊雷之下稳定流淌着的“真实生活”。",
    isPublicDomain: true,
    link: "https://www.gutenberg.org/ebooks/2600"
  },
  {
    id: 5,
    title: "To the Lighthouse",
    title_cn: "到灯塔去",
    author: "Virginia Woolf",
    author_cn: "弗吉尼亚·伍尔夫",
    quote: "For beauty was not everything. Beauty had this penalty — it came too readily, came too completely.",
    quote_cn: "因为美并非一切。美有这样的惩罚——它来得太容易，来得太彻底。",
    description: "A meditation on the passage of time and the preservation of identity within the family. Brilliantly captures the internal architecture of thought.",
    description_cn: "关于时光流逝与家庭内部身份保护的沉思。精彩地捕捉到了思想的内在建筑结构。",
    isPublicDomain: true,
    link: "https://www.gutenberg.org/ebooks/67138"
  },
  {
    id: 6,
    title: "A Farewell to Arms",
    title_cn: "永别了，武器",
    author: "Ernest Hemingway",
    author_cn: "欧内斯特·海明威",
    quote: "The world breaks every one and afterward many are strong at the broken places.",
    quote_cn: "世界会击碎每一个人，但随后许多人在受伤的地方变得坚强。",
    description: "A devastating story of love and loss set against the backdrop of war. Hemingway's stripped-back prose mirrors the vulnerability of his characters.",
    description_cn: "以战争为背景，一个关于爱与失去的毁灭性故事。海明威简约的文风映射了角色们的脆弱本质。",
    isPublicDomain: true,
    link: "https://www.gutenberg.org/ebooks/search/?query=A+Farewell+to+Arms"
  },
  {
    id: 7,
    title: "The Story of Lucy Gault",
    title_cn: "露西·高特的故事",
    author: "William Trevor",
    author_cn: "威廉·特雷弗",
    quote: "She was the ghost of her own story.",
    quote_cn: "她是自己故事中的幽灵。",
    description: "Trevor is a master of the quiet tragedy. This novel explores a lifetime of solitude born from a single, tragic misunderstanding.",
    description_cn: "特雷弗是寂静悲剧的大师。这部小说探讨了因一个悲剧性的误解而产生的一生的孤独。",
    isPublicDomain: false,
    link: "https://www.google.com/search?tbm=bks&q=The+Story+of+Lucy+Gault+William+Trevor"
  },
  {
    id: 8,
    title: "The Transit of Venus",
    title_cn: "维纳斯的凌日",
    author: "Shirley Hazzard",
    author_cn: "雪莉·赫扎德",
    quote: "One is not always in a state of grace.",
    quote_cn: "人并不总是处于优雅的状态。",
    description: "A masterpiece of style and structure. Hazzard tracks the lives of two sisters over decades, showing how fate hinges on moments of choice.",
    description_cn: "风格和结构的大师之作。赫扎德追踪了两姐妹数十年的生活，展示了命运如何取决于选择的时刻。",
    isPublicDomain: false,
    link: "https://www.google.com/search?tbm=bks&q=The+Transit+of+Venus+Shirley+Hazzard"
  },
  {
    id: 9,
    title: "Housekeeping",
    title_cn: "管家",
    author: "Marilynne Robinson",
    author_cn: "玛丽莲·罗宾逊",
    quote: "For to wish for a hand on one's hair is all but to feel it.",
    quote_cn: "渴望一张手抚摸头发，几乎等同于感受到了它。",
    description: "A luminous, haunting novel about transience and the deep pull of memory. Robinson's prose feels like poetry.",
    description_cn: "一部关于转瞬即逝和记忆深沉拉力的、发光的、令人难忘的小说。罗宾逊的散文读起来像诗。",
    isPublicDomain: false,
    link: "https://www.google.com/search?tbm=bks&q=Housekeeping+Marilynne+Robinson"
  },
  {
    id: 10,
    title: "White Teeth",
    title_cn: "白牙",
    author: "Zadie Smith",
    author_cn: "扎迪·史密斯",
    quote: "Every moment happens twice: inside and out, and they are two different histories.",
    quote_cn: "每一刻都发生两次：内在与外在，那是两段不同的历史。",
    description: "A vibrant, panoramic look at modern Britain. Representing the younger generation on Li's list, Smith's debut remains a classic of cultural collision.",
    description_cn: "对现代英国充满活力、全景式的观察。作为李翊云书单中年轻一代的代表，史密斯的处女作依然是文化冲突的经典之作。",
    isPublicDomain: false,
    link: "https://www.google.com/search?tbm=bks&q=White+Teeth+Zadie+Smith"
  }
];

