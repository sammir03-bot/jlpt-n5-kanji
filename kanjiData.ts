export interface KanjiExample {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiItem {
  id: number;
  kanji: string;
  on: string;
  kun: string;
  bn: string;
  radical: string;
  strokes: number;
  mnemonic: string;
  examples: KanjiExample[];
  category: string;
}

export const kanjiData: KanjiItem[] = [
  // Numbers (1-13)
  {
    id: 1, kanji: "一", on: "イチ・イツ", kun: "ひと・ひと(つ)", bn: "এক", radical: "一", strokes: 1,
    mnemonic: "একটি সরল রেখা — সংখ্যা এক। রেখার মতো সরল, একেবারে শুরুর কথা।",
    examples: [
      { word: "一つ", reading: "ひとつ", meaning: "একটি" },
      { word: "一人", reading: "ひとり", meaning: "একজন" },
      { word: "一月", reading: "いちがつ", meaning: "জানুয়ারি" },
      { word: "一度", reading: "いちど", meaning: "একবার" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 2, kanji: "二", on: "ニ", kun: "ふた・ふた(つ)", bn: "দুই", radical: "二", strokes: 2,
    mnemonic: "দুটি সমান রেখা — সংখ্যা দুই। একের পর এক, দুই হয়।",
    examples: [
      { word: "二つ", reading: "ふたつ", meaning: "দুটি" },
      { word: "二月", reading: "にがつ", meaning: "ফেব্রুয়ারি" },
      { word: "二人", reading: "ふたり", meaning: "দুজন" },
      { word: "二回", reading: "にかい", meaning: "দুইবার" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 3, kanji: "三", on: "サン", kun: "み・みっ(つ)", bn: "তিন", radical: "一", strokes: 3,
    mnemonic: "তিনটি রেখা — সংখ্যা তিন। এক, দুই, তিন গুনতি শেখার মতো।",
    examples: [
      { word: "三つ", reading: "みっつ", meaning: "তিনটি" },
      { word: "三人", reading: "さんにん", meaning: "তিনজন" },
      { word: "三月", reading: "さんがつ", meaning: "মার্চ" },
      { word: "三時", reading: "さんじ", meaning: "তিনটা বাজে" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 4, kanji: "四", on: "シ", kun: "よ・よっ(つ)", bn: "চার", radical: "囗", strokes: 5,
    mnemonic: "মুখের মধ্যে বাচ্চা (儿) — চারজন বন্ধু মিলে একত্রিত।",
    examples: [
      { word: "四つ", reading: "よっつ", meaning: "চারটি" },
      { word: "四月", reading: "しがつ", meaning: "এপ্রিল" },
      { word: "四人", reading: "よにん", meaning: "চারজন" },
      { word: "四時", reading: "よじ", meaning: "চারটা বাজে" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 5, kanji: "五", on: "ゴ", kun: "いつ・いつ(つ)", bn: "পাঁচ", radical: "二", strokes: 4,
    mnemonic: "একটি টি-স্কোয়ারের মতো — পাঁচ আঙুলের মতো সুবিন্যস্ত।",
    examples: [
      { word: "五つ", reading: "いつつ", meaning: "পাঁচটি" },
      { word: "五月", reading: "ごがつ", meaning: "মে" },
      { word: "五人", reading: "ごにん", meaning: "পাঁচজন" },
      { word: "五時", reading: "ごじ", meaning: "পাঁচটা বাজে" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 6, kanji: "六", on: "ロク", kun: "む・むっ(つ)", bn: "ছয়", radical: "八", strokes: 4,
    mnemonic: "একটি ছাতার মতো আকৃতি — ছয়টি কোণ।",
    examples: [
      { word: "六つ", reading: "むっつ", meaning: "ছয়টি" },
      { word: "六月", reading: "ろくがつ", meaning: "জুন" },
      { word: "六人", reading: "ろくにん", meaning: "ছয়জন" },
      { word: "六時", reading: "ろくじ", meaning: "ছয়টা বাজে" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 7, kanji: "七", on: "シチ", kun: "なな・なな(つ)", bn: "সাত", radical: "一", strokes: 2,
    mnemonic: "একটি কাটা দাগ — সাত সমুদ্র পাড়ি দেওয়ার মতো সাহসী।",
    examples: [
      { word: "七つ", reading: "ななつ", meaning: "সাতটি" },
      { word: "七月", reading: "しちがつ", meaning: "জুলাই" },
      { word: "七人", reading: "しちにん", meaning: "সাতজন" },
      { word: "七時", reading: "しちじ", meaning: "সাতটা বাজে" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 8, kanji: "八", on: "ハチ", kun: "や・やっ(つ)", bn: "আট", radical: "八", strokes: 2,
    mnemonic: "দুটি হাত ছড়িয়ে — আট দিকে ছড়িয়ে পড়া।",
    examples: [
      { word: "八つ", reading: "やっつ", meaning: "আটটি" },
      { word: "八月", reading: "はちがつ", meaning: "আগস্ট" },
      { word: "八人", reading: "はちにん", meaning: "আটজন" },
      { word: "八時", reading: "はちじ", meaning: "আটটা বাজে" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 9, kanji: "九", on: "キュウ・ク", kun: "ここの・ここの(つ)", bn: "নয়", radical: "乙", strokes: 2,
    mnemonic: "একটি ঝুকন্ত মানুষ — নয় মাসে শিশুর জন্ম।",
    examples: [
      { word: "九つ", reading: "ここのつ", meaning: "নয়টি" },
      { word: "九月", reading: "くがつ", meaning: "সেপ্টেম্বর" },
      { word: "九人", reading: "きゅうにん", meaning: "নয়জন" },
      { word: "九時", reading: "くじ", meaning: "নয়টা বাজে" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 10, kanji: "十", on: "ジュウ・ジュッ", kun: "とお・と(う)", bn: "দশ", radical: "十", strokes: 2,
    mnemonic: "একটি ক্রুশের মতো — দশ আঙুল ক্রুশে জোড়া লাগানো।",
    examples: [
      { word: "十", reading: "じゅう", meaning: "দশ" },
      { word: "十月", reading: "じゅうがつ", meaning: "অক্টোবর" },
      { word: "十日", reading: "とおか", meaning: "১০ তারিখ" },
      { word: "十分", reading: "じゅっぷん", meaning: "দশ মিনিট" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 11, kanji: "百", on: "ヒャク", kun: "もも", bn: "একশো", radical: "白", strokes: 6,
    mnemonic: "এক (一) এর উপর সাদা (白) — একশোটি সাদা পৃষ্ঠা।",
    examples: [
      { word: "百", reading: "ひゃく", meaning: "একশো" },
      { word: "三百", reading: "さんびゃく", meaning: "তিনশো" },
      { word: "六百", reading: "ろっぴゃく", meaning: "ছয়শো" },
      { word: "百万", reading: "ひゃくまん", meaning: "দশ লাখ" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 12, kanji: "千", on: "セン", kun: "ち", bn: "এক হাজার", radical: "十", strokes: 3,
    mnemonic: "একটি হাজারের মধ্যে দশ (十) আছে — হাজার মানে অনেক।",
    examples: [
      { word: "千", reading: "せん", meaning: "এক হাজার" },
      { word: "三千", reading: "さんぜん", meaning: "তিন হাজার" },
      { word: "千人", reading: "せんにん", meaning: "এক হাজার মানুষ" },
      { word: "千円", reading: "せんえん", meaning: "এক হাজার ইয়েন" },
    ],
    category: "সংখ্যা",
  },
  {
    id: 13, kanji: "万", on: "マン・バン", kun: "", bn: "দশ হাজার", radical: "一", strokes: 3,
    mnemonic: "এক (一) এর নিচে ঝুলন্ত দাগ — দশ হাজার, অসংখ্য।",
    examples: [
      { word: "一万", reading: "いちまん", meaning: "দশ হাজার" },
      { word: "三万", reading: "さんまん", meaning: "ত্রিশ হাজার" },
      { word: "万歳", reading: "ばんざい", meaning: "হায় হায় / জয় হোক" },
      { word: "百万", reading: "ひゃくまん", meaning: "দশ লাখ" },
    ],
    category: "সংখ্যা",
  },

  // Time (14-24)
  {
    id: 14, kanji: "日", on: "ニチ・ジツ", kun: "ひ・か", bn: "সূর্য / দিন", radical: "日", strokes: 4,
    mnemonic: "একটি বাক্সের মধ্যে একটি রেখা — সূর্যের মধ্য দিয়ে আলো, একদিন।",
    examples: [
      { word: "日本", reading: "にほん", meaning: "জাপান" },
      { word: "今日", reading: "きょう", meaning: "আজ" },
      { word: "明日", reading: "あした", meaning: "আগামীকাল" },
      { word: "毎日", reading: "まいにち", meaning: "প্রতিদিন" },
    ],
    category: "সময়",
  },
  {
    id: 15, kanji: "月", on: "ゲツ・ガツ", kun: "つき", bn: "চাঁদ / মাস", radical: "月", strokes: 4,
    mnemonic: "দুটি কurved রেখা — চাঁদের কলা আকৃতি।",
    examples: [
      { word: "一月", reading: "いちがつ", meaning: "জানুয়ারি" },
      { word: "今月", reading: "こんげつ", meaning: "এই মাস" },
      { word: "先月", reading: "せんげつ", meaning: "গত মাস" },
      { word: "月曜日", reading: "げつようび", meaning: "সোমবার" },
    ],
    category: "সময়",
  },
  {
    id: 16, kanji: "年", on: "ネン", kun: "とし", bn: "বছর", radical: "干", strokes: 6,
    mnemonic: "ধান (禾) এর উপর একজন মানুষ — এক বছরে একবার ফসল হয়।",
    examples: [
      { word: "今年", reading: "ことし", meaning: "এই বছর" },
      { word: "去年", reading: "きょねん", meaning: "গত বছর" },
      { word: "来年", reading: "らいねん", meaning: "আগামী বছর" },
      { word: "一年", reading: "いちねん", meaning: "এক বছর" },
    ],
    category: "সময়",
  },
  {
    id: 17, kanji: "時", on: "ジ", kun: "とき", bn: "সময়", radical: "日", strokes: 10,
    mnemonic: "সূর্য (日) + মন্দির (寺) — সূর্যের ছায়া দেখে সময় বোঝা যায়।",
    examples: [
      { word: "時間", reading: "じかん", meaning: "সময় / ঘণ্টা" },
      { word: "一時", reading: "いちじ", meaning: "একটা বাজে" },
      { word: "時々", reading: "ときどき", meaning: "মাঝে মাঝে" },
      { word: "何時", reading: "なんじ", meaning: "কটা বাজে" },
    ],
    category: "সময়",
  },
  {
    id: 18, kanji: "分", on: "フン・ブン", kun: "わ(かる)・わ(ける)", bn: "মিনিট / বোঝা / ভাগ", radical: "刀", strokes: 4,
    mnemonic: "আট (八) + ছুরি (刀) — আট টুকরো করে ভাগ করা, বোঝা।",
    examples: [
      { word: "十分", reading: "じゅっぷん", meaning: "দশ মিনিট" },
      { word: "分かる", reading: "わかる", meaning: "বোঝা" },
      { word: "三十分", reading: "さんじゅっぷん", meaning: "তিরিশ মিনিট" },
      { word: "自分", reading: "じぶん", meaning: "নিজে" },
    ],
    category: "সময়",
  },
  {
    id: 19, kanji: "午", on: "ゴ", kun: "うま", bn: "দুপুর", radical: "十", strokes: 4,
    mnemonic: "দশ (十) এর মতো — ঘোড়ার বছর, দুপুর ১২টা।",
    examples: [
      { word: "午前", reading: "ごぜん", meaning: "দুপুর আগে (AM)" },
      { word: "午後", reading: "ごご", meaning: "দুপুর পরে (PM)" },
      { word: "正午", reading: "しょうご", meaning: "দুপুর" },
      { word: "午前中", reading: "ごぜんちゅう", meaning: "দুপুরের আগে" },
    ],
    category: "সময়",
  },
  {
    id: 20, kanji: "前", on: "ゼン", kun: "まえ", bn: "সামনে / আগে", radical: "刀", strokes: 9,
    mnemonic: "দুধ (丬 misread) + কাঁচি (刀) + আট (八) + সুতো — সামনের অংশ।",
    examples: [
      { word: "前", reading: "まえ", meaning: "সামনে" },
      { word: "午前", reading: "ごぜん", meaning: "দুপুর আগে" },
      { word: "名前", reading: "なまえ", meaning: "নাম" },
      { word: "以前", reading: "いぜん", meaning: "আগে" },
    ],
    category: "সময়",
  },
  {
    id: 21, kanji: "後", on: "ゴ・コウ", kun: "あと・うし(ろ)・のち", bn: "পেছনে / পরে", radical: "彳", strokes: 9,
    mnemonic: "চলা (彳) + আট (八) + কাঁচি (刀) + সুতো — পেছনে সরে যাওয়া।",
    examples: [
      { word: "後", reading: "あと", meaning: "পরে" },
      { word: "午後", reading: "ごご", meaning: "দুপুর পরে" },
      { word: "後ろ", reading: "うしろ", meaning: "পেছনে" },
      { word: "最後", reading: "さいご", meaning: "শেষ" },
    ],
    category: "সময়",
  },
  {
    id: 22, kanji: "今", on: "コン・キン", kun: "いま", bn: "এখন", radical: "人", strokes: 4,
    mnemonic: "মানুষ (人) + এক (一) + ঢাল (乁) — এই মুহূর্তে একজন মানুষ।",
    examples: [
      { word: "今日", reading: "きょう", meaning: "আজ" },
      { word: "今月", reading: "こんげつ", meaning: "এই মাস" },
      { word: "今年", reading: "ことし", meaning: "এই বছর" },
      { word: "今晩", reading: "こんばん", meaning: "আজ রাত" },
    ],
    category: "সময়",
  },
  {
    id: 23, kanji: "朝", on: "チョウ", kun: "あさ", bn: "সকাল", radical: "月", strokes: 12,
    mnemonic: "দশ (十) + সকালের সূর্য + চাঁদ (月) + পানি — সকালে সূর্য ও চাঁদ একসাথে।",
    examples: [
      { word: "朝", reading: "あさ", meaning: "সকাল" },
      { word: "朝ご飯", reading: "あさごはん", meaning: "সকালের খাবার" },
      { word: "毎朝", reading: "まいあさ", meaning: "প্রতি সকাল" },
      { word: "今朝", reading: "けさ", meaning: "আজ সকাল" },
    ],
    category: "সময়",
  },
  {
    id: 24, kanji: "間", on: "カン・ケン", kun: "あいだ・ま", bn: "মাঝে / সময়", radical: "門", strokes: 12,
    mnemonic: "দরজা (門) এর মধ্যে সূর্য (日) — দরজার ফাঁকে সূর্যের আলো, মাঝখানে।",
    examples: [
      { word: "時間", reading: "じかん", meaning: "সময়" },
      { word: "一時間", reading: "いちじかん", meaning: "এক ঘণ্টা" },
      { word: "中間", reading: "ちゅうかん", meaning: "মধ্যমান" },
      { word: "人間", reading: "にんげん", meaning: "মানুষ" },
    ],
    category: "সময়",
  },

  // People (25-36)
  {
    id: 25, kanji: "人", on: "ジン・ニン", kun: "ひと", bn: "মানুষ", radical: "人", strokes: 2,
    mnemonic: "দুটি পা — একজন মানুষ দাঁড়িয়ে আছে।",
    examples: [
      { word: "一人", reading: "ひとり", meaning: "একজন" },
      { word: "三人", reading: "さんにん", meaning: "তিনজন" },
      { word: "日本人", reading: "にほんじん", meaning: "জাপানি মানুষ" },
      { word: "人間", reading: "にんげん", meaning: "মানুষ" },
    ],
    category: "মানুষ",
  },
  {
    id: 26, kanji: "男", on: "ダン・ナン", kun: "おとこ", bn: "পুরুষ", radical: "田", strokes: 7,
    mnemonic: "ক্ষেত (田) + শক্তি (力) — ক্ষেতে শক্তি খাটানো পুরুষ।",
    examples: [
      { word: "男", reading: "おとこ", meaning: "পুরুষ" },
      { word: "長男", reading: "ちょうなん", meaning: "জ্যেষ্ঠ পুত্র" },
      { word: "男子", reading: "だんし", meaning: "ছেলে" },
      { word: "男の人", reading: "おとこのひと", meaning: "পুরুষ মানুষ" },
    ],
    category: "মানুষ",
  },
  {
    id: 27, kanji: "女", on: "ジョ・ニョ・ニョウ", kun: "おんな・め", bn: "নারী", radical: "女", strokes: 3,
    mnemonic: "একজন নারী বসে আছেন — তিনটি স্ট্রোকে সুন্দর আকৃতি।",
    examples: [
      { word: "女", reading: "おんな", meaning: "নারী" },
      { word: "長女", reading: "ちょうじょ", meaning: "জ্যেষ্ঠ কন্যা" },
      { word: "女の子", reading: "おんなのこ", meaning: "মেয়ে" },
      { word: "男女", reading: "だんじょ", meaning: "পুরুষ ও নারী" },
    ],
    category: "মানুষ",
  },
  {
    id: 28, kanji: "子", on: "シ・ス・ツ", kun: "こ", bn: "শিশু", radical: "子", strokes: 3,
    mnemonic: "একটি শিশুর মাথা ও দুই হাত — ছোট্ট কোলের শিশু।",
    examples: [
      { word: "子供", reading: "こども", meaning: "বাচ্চা" },
      { word: "男の子", reading: "おとこのこ", meaning: "ছেলে বাচ্চা" },
      { word: "女の子", reading: "おんなのこ", meaning: "মেয়ে বাচ্চা" },
      { word: "电子", reading: "でんし", meaning: "ইলেকট্রন" },
    ],
    category: "মানুষ",
  },
  {
    id: 29, kanji: "母", on: "ボ", kun: "はは・かあ", bn: "মা", radical: "毋", strokes: 5,
    mnemonic: "একজন মা দাঁড়িয়ে — দুটি স্তনের প্রতীক।",
    examples: [
      { word: "母", reading: "はは", meaning: "মা" },
      { word: "お母さん", reading: "おかあさん", meaning: "মা (সম্মানসূচক)" },
      { word: "父母", reading: "ふぼ", meaning: "বাবা-মা" },
      { word: "母国語", reading: "ぼこくご", meaning: "মাতৃভাষা" },
    ],
    category: "মানুষ",
  },
  {
    id: 30, kanji: "父", on: "フ", kun: "ちち・とう", bn: "বাবা", radical: "父", strokes: 4,
    mnemonic: "একজন বাবার হাতে একটি লাঠি — পরিবারের রক্ষক।",
    examples: [
      { word: "父", reading: "ちち", meaning: "বাবা" },
      { word: "お父さん", reading: "おとうさん", meaning: "বাবা (সম্মানসূচক)" },
      { word: "父母", reading: "ふぼ", meaning: "বাবা-মা" },
      { word: "父子", reading: "ふし", meaning: "বাবা ও ছেলে" },
    ],
    category: "মানুষ",
  },
  {
    id: 31, kanji: "友", on: "ユウ", kun: "とも", bn: "বন্ধু", radical: "又", strokes: 4,
    mnemonic: "দুটি হাত (又 + 一) মিলেছে — বন্ধুত্বের হাত মেলানো।",
    examples: [
      { word: "友達", reading: "ともだち", meaning: "বন্ধু" },
      { word: "親友", reading: "しんゆう", meaning: "ঘনিষ্ঠ বন্ধু" },
      { word: "友人", reading: "ゆうじん", meaning: "বন্ধু (আনুষ্ঠানিক)" },
      { word: "友好", reading: "ゆうこう", meaning: "বন্ধুত্ব" },
    ],
    category: "মানুষ",
  },
  {
    id: 32, kanji: "私", on: "シ", kun: "わたし・わたくし", bn: "আমি", radical: "禾", strokes: 7,
    mnemonic: "ধান (禾) + লাঠি — আমার ধানক্ষেত, আমি।",
    examples: [
      { word: "私", reading: "わたし", meaning: "আমি" },
      { word: "私達", reading: "わたしたち", meaning: "আমরা" },
      { word: "私立", reading: "しりつ", meaning: "বেসরকারি" },
      { word: "私用", reading: "しよう", meaning: "ব্যক্তিগত ব্যবহার" },
    ],
    category: "মানুষ",
  },
  {
    id: 33, kanji: "先生", on: "センセイ", kun: "", bn: "শিক্ষক", radical: "生", strokes: 7,
    mnemonic: "আগে (先) + জীবন (生) — জীবনে আগে জন্মানো, শিক্ষক।",
    examples: [
      { word: "先生", reading: "せんせい", meaning: "শিক্ষক" },
      { word: "先月", reading: "せんげつ", meaning: "গত মাস" },
      { word: "先週", reading: "せんしゅう", meaning: "গত সপ্তাহ" },
      { word: "先に", reading: "さきに", meaning: "আগে" },
    ],
    category: "মানুষ",
  },
  {
    id: 34, kanji: "学生", on: "ガクセイ", kun: "", bn: "ছাত্র", radical: "生", strokes: 7,
    mnemonic: "শেখা (学) + জীবন (生) — শিক্ষার জীবন যাপনকারী।",
    examples: [
      { word: "学生", reading: "がくせい", meaning: "ছাত্র" },
      { word: "学校", reading: "がっこう", meaning: "স্কুল" },
      { word: "大学", reading: "だいがく", meaning: "বিশ্ববিদ্যালয়" },
      { word: "中学", reading: "ちゅうがく", meaning: "মাধ্যমিক স্কুল" },
    ],
    category: "মানুষ",
  },
  {
    id: 35, kanji: "目", on: "モク・ボク", kun: "め", bn: "চোখ", radical: "目", strokes: 5,
    mnemonic: "একটি চোখের চিত্র — মাঝখানের মণি ও চারপাশের আইরিশ।",
    examples: [
      { word: "目", reading: "め", meaning: "চোখ" },
      { word: "一目", reading: "ひとめ", meaning: "এক নজর" },
      { word: "目的", reading: "もくてき", meaning: "লক্ষ্য" },
      { word: "二月目", reading: "にがつめ", meaning: "দ্বিতীয় মাস" },
    ],
    category: "শরীর",
  },
  {
    id: 36, kanji: "口", on: "コウ・ク", kun: "くち", bn: "মুখ", radical: "口", strokes: 3,
    mnemonic: "একটি মুখের আকৃতি — খোলা মুখ।",
    examples: [
      { word: "口", reading: "くち", meaning: "মুখ" },
      { word: "入口", reading: "いりぐち", meaning: "প্রবেশদ্বার" },
      { word: "出口", reading: "でぐち", meaning: "বহির্গমন" },
      { word: "人口", reading: "じんこう", meaning: "জনসংখ্যা" },
    ],
    category: "শরীর",
  },

  // Actions (37-48)
  {
    id: 37, kanji: "見", on: "ケン", kun: "み(る)・み(える)・み(せる)", bn: "দেখা", radical: "見", strokes: 7,
    mnemonic: "চোখ (目) এর উপর পা (儿) — পা ফেলে চোখ দিয়ে দেখা।",
    examples: [
      { word: "見る", reading: "みる", meaning: "দেখা" },
      { word: "意見", reading: "いけん", meaning: "মতামত" },
      { word: "花見", reading: "はなみ", meaning: "ফুল দেখা" },
      { word: "見物", reading: "けんぶつ", meaning: "দর্শন" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 38, kanji: "行", on: "コウ・ギョウ", kun: "い(く)・ゆ(く)・おこな(う)", bn: "যাওয়া", radical: "行", strokes: 6,
    mnemonic: "দুটি পাশাপাশি পথ — একটি ছোট এক একটি বড়, যাওয়ার পথ।",
    examples: [
      { word: "行く", reading: "いく", meaning: "যাওয়া" },
      { word: "銀行", reading: "ぎんこう", meaning: "ব্যাংক" },
      { word: "旅行", reading: "りょこう", meaning: "ভ্রমণ" },
      { word: "行う", reading: "おこなう", meaning: "করা / সম্পাদন করা" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 39, kanji: "来", on: "ライ", kun: "く(る)・き(たす)・こ(ない)", bn: "আসা", radical: "木", strokes: 7,
    mnemonic: "দুটি গাছের মধ্যে ক্রুশ — গাছের নিচে এসে দাঁড়ানো।",
    examples: [
      { word: "来る", reading: "くる", meaning: "আসা" },
      { word: "来年", reading: "らいねん", meaning: "আগামী বছর" },
      { word: "来月", reading: "らいげつ", meaning: "আগামী মাস" },
      { word: "来週", reading: "らいしゅう", meaning: "আগামী সপ্তাহ" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 40, kanji: "食", on: "ショク", kun: "た(べる)・く(う)・く(らう)", bn: "খাওয়া", radical: "食", strokes: 9,
    mnemonic: "একটি খাবার ঘর — উপরে ছাদ, নিচে লোকজন খাচ্ছে।",
    examples: [
      { word: "食べる", reading: "たべる", meaning: "খাওয়া" },
      { word: "食事", reading: "しょくじ", meaning: "খাবার" },
      { word: "和食", reading: "わしょく", meaning: "জাপানি খাবার" },
      { word: "食器", reading: "しょっき", meaning: "খাবারের বাসন" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 41, kanji: "飲", on: "イン", kun: "の(む)", bn: "পান করা", radical: "食", strokes: 12,
    mnemonic: "খাওয়া (食) এর পাশে খনি (欠) — খাবারের সাথে পানীয়।",
    examples: [
      { word: "飲む", reading: "のむ", meaning: "পান করা" },
      { word: "飲み物", reading: "のみもの", meaning: "পানীয়" },
      { word: "飲食", reading: "いんしょく", meaning: "খাদ্য ও পানীয়" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 42, kanji: "話", on: "ワ", kun: "はな(す)・はなし", bn: "কথা / বলা", radical: "言", strokes: 13,
    mnemonic: "কথা (言) + ভাষা (舌) — জিভ দিয়ে কথা বলা।",
    examples: [
      { word: "話す", reading: "はなす", meaning: "বলা" },
      { word: "電話", reading: "でんわ", meaning: "টেলিফোন" },
      { word: "会話", reading: "かいわ", meaning: "আলাপ" },
      { word: "話題", reading: "わだい", meaning: "আলোচ্য বিষয়" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 43, kanji: "読", on: "ドク・トク", kun: "よ(む)", bn: "পড়া", radical: "言", strokes: 14,
    mnemonic: "কথা (言) + বিক্রি (売) — বিক্রয়ের তালিকা পড়া।",
    examples: [
      { word: "読む", reading: "よむ", meaning: "পড়া" },
      { word: "読者", reading: "どくしゃ", meaning: "পাঠক" },
      { word: "朗読", reading: "ろうどく", meaning: "আবৃত্তি" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 44, kanji: "書", on: "ショ", kun: "か(く)", bn: "লেখা", radical: "曰", strokes: 10,
    mnemonic: "ব্রাশ (聿) + সূর্য (曰) — দিনের আলোয় লিখতে হবে।",
    examples: [
      { word: "書く", reading: "かく", meaning: "লেখা" },
      { word: "図書館", reading: "としょかん", meaning: "গ্রন্থাগার" },
      { word: "辞書", reading: "じしょ", meaning: "অভিধান" },
      { word: "証書", reading: "しょうしょ", meaning: "প্রমাণপত্র" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 45, kanji: "聞", on: "ブン・モン", kun: "き(く)・き(こえる)", bn: "শোনা", radical: "門", strokes: 14,
    mnemonic: "দরজা (門) এর মধ্যে কান (耳) — দরজার কাছে কান রেখে শোনা।",
    examples: [
      { word: "聞く", reading: "きく", meaning: "শোনা" },
      { word: "新聞", reading: "しんぶん", meaning: "সংবাদপত্র" },
      { word: "聞こえる", reading: "きこえる", meaning: "শোনা যাওয়া" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 46, kanji: "買", on: "バイ", kun: "か(う)", bn: "কেনা", radical: "貝", strokes: 12,
    mnemonic: "শংখ (貝) + আট (罒) — শংখ বিক্রি করে আট টাকায় কেনা।",
    examples: [
      { word: "買う", reading: "かう", meaning: "কেনা" },
      { word: "買い物", reading: "かいもの", meaning: "কেনাকাটা" },
      { word: "買い手", reading: "かいて", meaning: "ক্রেতা" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 47, kanji: "売", on: "バイ", kun: "う(る)・う(れる)", bn: "বিক্রি করা", radical: "士", strokes: 7,
    mnemonic: "শংখ (士 misread) + কাপড় — শংখ ও কাপড় বিক্রি করা।",
    examples: [
      { word: "売る", reading: "うる", meaning: "বিক্রি করা" },
      { word: "売店", reading: "ばいてん", meaning: "দোকান" },
      { word: "売り切れ", reading: "うりきれ", meaning: "স্টক শেষ" },
    ],
    category: "ক্রিয়া",
  },
  {
    id: 48, kanji: "待", on: "タイ", kun: "ま(つ)", bn: "অপেক্ষা করা", radical: "彳", strokes: 9,
    mnemonic: "চলা (彳) + মন্দির (寺) — মন্দিরের সামনে দাঁড়িয়ে অপেক্ষা।",
    examples: [
      { word: "待つ", reading: "まつ", meaning: "অপেক্ষা করা" },
      { word: "待合室", reading: "まちあいしつ", meaning: "প্রতীক্ষালয়" },
      { word: "期待", reading: "きたい", meaning: "প্রত্যাশা" },
    ],
    category: "ক্রিয়া",
  },

  // Adjectives / Descriptors (49-60)
  {
    id: 49, kanji: "大", on: "ダイ・タイ", kun: "おお(きい)", bn: "বড়", radical: "大", strokes: 3,
    mnemonic: "একজন মানুষ দুই হাত ছড়িয়ে দিয়েছে — বড় করে দেখানো।",
    examples: [
      { word: "大きい", reading: "おおきい", meaning: "বড়" },
      { word: "大学", reading: "だいがく", meaning: "বিশ্ববিদ্যালয়" },
      { word: "大好き", reading: "だいすき", meaning: "খুব পছন্দ" },
      { word: "大体", reading: "だいたい", meaning: "মোটামুটি" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 50, kanji: "小", on: "ショウ", kun: "ちい(さい)・こ・お", bn: "ছোট", radical: "小", strokes: 3,
    mnemonic: "তিনটি ছোট বিন্দু — ছোট জিনিসের প্রতীক।",
    examples: [
      { word: "小さい", reading: "ちいさい", meaning: "ছোট" },
      { word: "小学校", reading: "しょうがっこう", meaning: "প্রাথমিক বিদ্যালয়" },
      { word: "小雨", reading: "こさめ", meaning: "হালকা বৃষ্টি" },
      { word: "小説", reading: "しょうせつ", meaning: "উপন্যাস" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 51, kanji: "長", on: "チョウ", kun: "なが(い)・おさ", bn: "লম্বা / প্রধান", radical: "長", strokes: 8,
    mnemonic: "দীর্ঘ চুলের একজন মানুষ — লম্বা চুলওয়ালা প্রধান।",
    examples: [
      { word: "長い", reading: "ながい", meaning: "লম্বা" },
      { word: "社長", reading: "しゃちょう", meaning: "সভাপতি" },
      { word: "会長", reading: "かいちょう", meaning: "সভাপতি" },
      { word: "校長", reading: "こうちょう", meaning: "প্রধান শিক্ষক" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 52, kanji: "高", on: "コウ", kun: "たか(い)・たか・たか(まる)", bn: "উচ্চ / মূল্যবান", radical: "高", strokes: 10,
    mnemonic: "একটি মন্দিরের গম্বুজ — উঁচু স্থাপনা।",
    examples: [
      { word: "高い", reading: "たかい", meaning: "উচ্চ / দামি" },
      { word: "高校", reading: "こうこう", meaning: "হাই স্কুল" },
      { word: "最高", reading: "さいこう", meaning: "সর্বোচ্চ" },
      { word: "高山", reading: "こうざん", meaning: "উচ্চ পর্বত" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 53, kanji: "新", on: "シン", kun: "あたら(しい)・あら(た)・にい", bn: "নতুন", radical: "斤", strokes: 13,
    mnemonic: "ধারালো কাঠি (斤) + গাছ (木) — নতুন গাছ কাটা।",
    examples: [
      { word: "新しい", reading: "あたらしい", meaning: "নতুন" },
      { word: "新聞", reading: "しんぶん", meaning: "সংবাদপত্র" },
      { word: "新年", reading: "しんねん", meaning: "নববর্ষ" },
      { word: "新品", reading: "しんぴん", meaning: "নতুন জিনিস" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 54, kanji: "古", on: "コ", kun: "ふる(い)", bn: "পুরনো", radical: "口", strokes: 5,
    mnemonic: "দশ (十) + মুখ (口) — দশটি পুরনো কথা।",
    examples: [
      { word: "古い", reading: "ふるい", meaning: "পুরনো" },
      { word: "中古", reading: "ちゅうこ", meaning: "পুরনো (ব্যবহৃত)" },
      { word: "古代", reading: "こだい", meaning: "প্রাচীন যুগ" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 55, kanji: "多", on: "タ", kun: "おお(い)", bn: "অনেক", radical: "夕", strokes: 6,
    mnemonic: "দুটি সন্ধ্যা (夕) — দুটি সন্ধ্যা মিলে অনেক সময়।",
    examples: [
      { word: "多い", reading: "おおい", meaning: "অনেক" },
      { word: "多分", reading: "たぶん", meaning: "হয়তো" },
      { word: "多少", reading: "たしょう", meaning: "কিছুটা" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 56, kanji: "少", on: "ショウ", kun: "すく(ない)・すこ(し)", bn: "কম / সামান্য", radical: "小", strokes: 4,
    mnemonic: "ছোট (小) + একটি বিন্দু — ছোটের চেয়েও কম।",
    examples: [
      { word: "少ない", reading: "すくない", meaning: "কম" },
      { word: "少し", reading: "すこし", meaning: "সামান্য" },
      { word: "少数", reading: "しょうすう", meaning: "সংখ্যালঘু" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 57, kanji: "早", on: "ソウ", kun: "はや(い)・はや(める)", bn: "তাড়াতাড়ি", radical: "日", strokes: 6,
    mnemonic: "সূর্য (日) + দশ (十) — সূর্যের আগে দশটি কাজ শেষ, তাড়াতাড়ি।",
    examples: [
      { word: "早い", reading: "はやい", meaning: "তাড়াতাড়ি / ভোর" },
      { word: "朝早く", reading: "あさはやく", meaning: "খুব ভোরে" },
      { word: "早口", reading: "はやくち", meaning: "দ্রুত কথা" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 58, kanji: "遅", on: "チ", kun: "おそ(い)・おく(れる)", bn: "দেরি", radical: "辶", strokes: 12,
    mnemonic: "স羊 (ভেড়া) + চলা (辶) — ভেড়া ধীরে চলে, দেরি।",
    examples: [
      { word: "遅い", reading: "おそい", meaning: "দেরি / ধীর" },
      { word: "遅刻", reading: "ちこく", meaning: "বিলম্ব" },
      { word: "夜遅く", reading: "よるおそく", meaning: "রাত দেরি পর্যন্ত" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 59, kanji: "良", on: "リョウ", kun: "よ(い)", bn: "ভালো", radical: "艮", strokes: 7,
    mnemonic: "একটি বাক্সের উপর একজন মানুষ — ভালো কাজের প্রতীক।",
    examples: [
      { word: "良い", reading: "よい", meaning: "ভালো" },
      { word: "良心", reading: "りょうしん", meaning: "সচেতনতা" },
      { word: "最良", reading: "さいりょう", meaning: "সেরা" },
    ],
    category: "বিশেষণ",
  },
  {
    id: 60, kanji: "悪", on: "アク・オ", kun: "わる(い)", bn: "খারাপ", radical: "心", strokes: 11,
    mnemonic: "আজ (亚) + মন (心) — আজ মন খারাপ, খারাপ দিন।",
    examples: [
      { word: "悪い", reading: "わるい", meaning: "খারাপ" },
      { word: "最悪", reading: "さいあく", meaning: "সবচেয়ে খারাপ" },
      { word: "悪口", reading: "わるぐち", meaning: "কুৎসা" },
    ],
    category: "বিশেষণ",
  },

  // Nature / Places (61-73)
  {
    id: 61, kanji: "山", on: "サン・ザン", kun: "やま", bn: "পাহাড়", radical: "山", strokes: 3,
    mnemonic: "তিনটি চূড়া — পাহাড়ের শিখরের প্রতীক।",
    examples: [
      { word: "山", reading: "やま", meaning: "পাহাড়" },
      { word: "火山", reading: "かざん", meaning: "আগ্নেয়গিরি" },
      { word: "登山", reading: "とざん", meaning: "পর্বতারোহণ" },
      { word: "山田", reading: "やまだ", meaning: "পাহাড়ের মাঠ (নাম)" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 62, kanji: "川", on: "セン", kun: "かわ", bn: "নদী", radical: "川", strokes: 3,
    mnemonic: "তিনটি বাঁকানো রেখা — নদীর স্রোতস্বিনীর বাঁক।",
    examples: [
      { word: "川", reading: "かわ", meaning: "নদী" },
      { word: "河川", reading: "かせん", meaning: "নদনদী" },
      { word: "小川", reading: "おがわ", meaning: "ছোট নদী" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 63, kanji: "田", on: "デン", kun: "た", bn: "ক্ষেত", radical: "田", strokes: 5,
    mnemonic: "একটি চারভাগ করা ক্ষেত — ধানক্ষেতের আকৃতি।",
    examples: [
      { word: "田んぼ", reading: "たんぼ", meaning: "ধানক্ষেত" },
      { word: "水田", reading: "すいでん", meaning: "জলভর্তি ক্ষেত" },
      { word: "田中", reading: "たなか", meaning: "ক্ষেতের মাঝে (নাম)" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 64, kanji: "雨", on: "ウ", kun: "あめ・あま", bn: "বৃষ্টি", radical: "雨", strokes: 8,
    mnemonic: "একটি জানালার মধ্যে চারটি বিন্দু — জানালার বাইরে বৃষ্টি পড়ছে।",
    examples: [
      { word: "雨", reading: "あめ", meaning: "বৃষ্টি" },
      { word: "雨天", reading: "うてん", meaning: "বৃষ্টির দিন" },
      { word: "大雨", reading: "おおあめ", meaning: "ভারী বৃষ্টি" },
      { word: "梅雨", reading: "つゆ", meaning: "বর্ষাকাল" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 65, kanji: "天", on: "テン", kun: "あまつ・あめ", bn: "আকাশ / স্বর্গ", radical: "大", strokes: 4,
    mnemonic: "একজন মানুষের (大) উপর এক — আকাশের নিচে মানুষ।",
    examples: [
      { word: "天気", reading: "てんき", meaning: "আবহাওয়া" },
      { word: "今日", reading: "きょう", meaning: "আজ" },
      { word: "毎日", reading: "まいにち", meaning: "প্রতিদিন" },
      { word: "一日", reading: "いちにち", meaning: "এক দিন" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 66, kanji: "気", on: "キ・ケ", kun: "", bn: "মন / আবহাওয়া / গ্যাস", radical: "气", strokes: 6,
    mnemonic: "বাতাস (气) + চাল (米) — বাতাসে ভাতের গন্ধ, মনের অনুভূতি।",
    examples: [
      { word: "気", reading: "き", meaning: "মন / অনুভূতি" },
      { word: "天気", reading: "てんき", meaning: "আবহাওয়া" },
      { word: "電気", reading: "でんき", meaning: "বিদ্যুৎ" },
      { word: "元気", reading: "げんき", meaning: "সুস্থ / প্রাণবন্ত" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 67, kanji: "火", on: "カ", kun: "ひ・ほ", bn: "আগুন", radical: "火", strokes: 4,
    mnemonic: "আগুনের শিখার মতো আকৃতি — দুটি শিখা উঠছে।",
    examples: [
      { word: "火", reading: "ひ", meaning: "আগুন" },
      { word: "火山", reading: "かざん", meaning: "আগ্নেয়গিরি" },
      { word: "花火", reading: "はなび", meaning: "আতশবাজি" },
      { word: "火曜日", reading: "かようび", meaning: "মঙ্গলবার" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 68, kanji: "水", on: "スイ", kun: "みず", bn: "জল", radical: "水", strokes: 4,
    mnemonic: "জলের ঝর্ণার প্রবাহ — চারটি বাঁকানো রেখা।",
    examples: [
      { word: "水", reading: "みず", meaning: "জল" },
      { word: "水曜日", reading: "すいようび", meaning: "বুধবার" },
      { word: "水道", reading: "すいどう", meaning: "জলের পাইপ" },
      { word: "水色", reading: "みずいろ", meaning: "জলের রং (হালকা নীল)" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 69, kanji: "木", on: "ボク・モク", kun: "き・こ", bn: "গাছ", radical: "木", strokes: 4,
    mnemonic: "গাছের চিত্র — শিকড়, ডাল ও পাতা।",
    examples: [
      { word: "木", reading: "き", meaning: "গাছ" },
      { word: "木曜日", reading: "もくようび", meaning: "বৃহস্পতিবার" },
      { word: "大木", reading: "たいぼく", meaning: "বড় গাছ" },
      { word: "木材", reading: "もくざい", meaning: "কাঠ" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 70, kanji: "土", on: "ド・ト", kun: "つち", bn: "মাটি", radical: "土", strokes: 3,
    mnemonic: "উপরে মাটি, নিচে শিকড় — মাটির কণা।",
    examples: [
      { word: "土", reading: "つち", meaning: "মাটি" },
      { word: "土曜日", reading: "どようび", meaning: "শনিবার" },
      { word: "土地", reading: "とち", meaning: "জমি" },
      { word: "粘土", reading: "ねんど", meaning: "কাদামাটি" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 71, kanji: "花", on: "カ", kun: "はな", bn: "ফুল", radical: "艸", strokes: 7,
    mnemonic: "ঘাস (艹) + বিক্রি (化) — ঘাসের মধ্যে ফুটেছে ফুল।",
    examples: [
      { word: "花", reading: "はな", meaning: "ফুল" },
      { word: "花見", reading: "はなみ", meaning: "ফুল দেখা" },
      { word: "花火", reading: "はなび", meaning: "আতশবাজি" },
      { word: "生花", reading: "せいか", meaning: "তাজা ফুল" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 72, kanji: "空", on: "クウ", kun: "そら・あ(く)・から", bn: "আকাশ / খালি", radical: "穴", strokes: 8,
    mnemonic: "গুহা (穴) + শিল্পী (工) — গুহার উপর আকাশ, খালি স্থান।",
    examples: [
      { word: "空", reading: "そら", meaning: "আকাশ" },
      { word: "空港", reading: "くうこう", meaning: "বিমানবন্দর" },
      { word: "空手", reading: "からて", meaning: "কারাতে" },
      { word: "空気", reading: "くうき", meaning: "বাতাস" },
    ],
    category: "প্রকৃতি",
  },
  {
    id: 73, kanji: "海", on: "カイ", kun: "うみ", bn: "সমুদ্র", radical: "水", strokes: 9,
    mnemonic: "জল (氵) + প্রত্যেক (毎) — প্রতিটি জলভর্তি স্থানই সমুদ্র।",
    examples: [
      { word: "海", reading: "うみ", meaning: "সমুদ্র" },
      { word: "海水", reading: "かいすい", meaning: "সমুদ্রের জল" },
      { word: "海外", reading: "かいがい", meaning: "বিদেশ" },
      { word: "海辺", reading: "うみべ", meaning: "সমুদ্র সৈকত" },
    ],
    category: "প্রকৃতি",
  },

  // School / Work (74-84)
  {
    id: 74, kanji: "学", on: "ガク", kun: "まな(ぶ)", bn: "শেখা", radical: "子", strokes: 8,
    mnemonic: "বাচ্চা (子) + বাড়ির ছাদ — বাচ্চারা বাড়িতে বসে শেখে।",
    examples: [
      { word: "学校", reading: "がっこう", meaning: "স্কুল" },
      { word: "学生", reading: "がくせい", meaning: "ছাত্র" },
      { word: "大学", reading: "だいがく", meaning: "বিশ্ববিদ্যালয়" },
      { word: "中学", reading: "ちゅうがく", meaning: "মাধ্যমিক" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 75, kanji: "校", on: "コウ", kun: "", bn: "বিদ্যালয়", radical: "木", strokes: 10,
    mnemonic: "গাছ (木) + বিক্রি (交) — গাছের নিচে বিনিময়ের স্থান, বিদ্যালয়।",
    examples: [
      { word: "学校", reading: "がっこう", meaning: "স্কুল" },
      { word: "校長", reading: "こうちょう", meaning: "প্রধান শিক্ষক" },
      { word: "校庭", reading: "こうてい", meaning: "স্কুল মাঠ" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 76, kanji: "先生", on: "センセイ", kun: "", bn: "শিক্ষক", radical: "生", strokes: 7,
    mnemonic: "আগে (先) জন্মানো, অভিজ্ঞ — শিক্ষক।",
    examples: [
      { word: "先生", reading: "せんせい", meaning: "শিক্ষক" },
      { word: "先月", reading: "せんげつ", meaning: "গত মাস" },
      { word: "先週", reading: "せんしゅう", meaning: "গত সপ্তাহ" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 77, kanji: "本", on: "ホン", kun: "もと", bn: "বই / মূল", radical: "木", strokes: 5,
    mnemonic: "গাছ (木) এর নিচে এক — গাছ থেকে কাগজ, কাগজ থেকে বই।",
    examples: [
      { word: "本", reading: "ほん", meaning: "বই" },
      { word: "日本", reading: "にほん", meaning: "জাপান" },
      { word: "基本", reading: "きほん", meaning: "মৌলিক" },
      { word: "本体", reading: "ほんたい", meaning: "মূল অংশ" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 78, kanji: "文", on: "ブン・モン", kun: "ふみ", bn: "লেখা / বাক্য", radical: "文", strokes: 4,
    mnemonic: "একটি লোক দাঁড়িয়ে কিছু বলছে — লিখিত বাক্য।",
    examples: [
      { word: "文学", reading: "ぶんがく", meaning: "সাহিত্য" },
      { word: "作文", reading: "さくぶん", meaning: "রচনা" },
      { word: "文化", reading: "ぶんか", meaning: "সংস্কৃতি" },
      { word: "英文", reading: "えいぶん", meaning: "ইংরেজি লেখা" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 79, kanji: "字", on: "ジ", kun: "あざ", bn: "অক্ষর", radical: "子", strokes: 6,
    mnemonic: "বাচ্চা (子) + ছাদ — বাচ্চারা ছাদের নিচে অক্ষর শেখে।",
    examples: [
      { word: "漢字", reading: "かんじ", meaning: "কানজি" },
      { word: "文字", reading: "もじ", meaning: "অক্ষর" },
      { word: "名字", reading: "みょうじ", meaning: "পদবি" },
      { word: "数字", reading: "すうじ", meaning: "সংখ্যা" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 80, kanji: "語", on: "ゴ", kun: "かた(る)", bn: "ভাষা / শব্দ", radical: "言", strokes: 14,
    mnemonic: "কথা (言) + আমি (吾) — আমার কথা, আমার ভাষা।",
    examples: [
      { word: "日本語", reading: "にほんご", meaning: "জাপানি ভাষা" },
      { word: "英語", reading: "えいご", meaning: "ইংরেজি" },
      { word: "言語", reading: "げんご", meaning: "ভাষা" },
      { word: "物語", reading: "ものがたり", meaning: "গল্প" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 81, kanji: "英", on: "エイ", kun: "はなぶさ", bn: "ইংরেজ / মহান", radical: "艸", strokes: 8,
    mnemonic: "ঘাসের (艹) মধ্যে কেন্দ্র (央) — মহান ব্যক্তি, ইংরেজ।",
    examples: [
      { word: "英語", reading: "えいご", meaning: "ইংরেজি" },
      { word: "英雄", reading: "えいゆう", meaning: "বীর" },
      { word: "英国", reading: "えいこく", meaning: "ইংল্যান্ড" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 82, kanji: "社", on: "シャ", kun: "やしろ", bn: "কোম্পানি / মন্দির", radical: "示", strokes: 7,
    mnemonic: "বেদী (礻) + পৃথিবী (土) — পৃথিবীর উপর বেদী, কোম্পানি।",
    examples: [
      { word: "会社", reading: "かいしゃ", meaning: "কোম্পানি" },
      { word: "社長", reading: "しゃちょう", meaning: "সভাপতি" },
      { word: "神社", reading: "じんじゃ", meaning: "শিন্তো মন্দির" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 83, kanji: "店", on: "テン", kun: "みせ", bn: "দোকান", radical: "广", strokes: 8,
    mnemonic: "ছাদ (广) + বিরতি (占) — ছাদের নিচে দোকান।",
    examples: [
      { word: "店", reading: "みせ", meaning: "দোকান" },
      { word: "喫茶店", reading: "きっさてん", meaning: "চায়ের দোকান" },
      { word: "本店", reading: "ほんてん", meaning: "মূল দোকান" },
      { word: "店員", reading: "てんいん", meaning: "দোকানদার" },
    ],
    category: "শিক্ষা",
  },
  {
    id: 84, kanji: "員", on: "イン", kun: "", bn: "সদস্য", radical: "口", strokes: 10,
    mnemonic: "মুখ (口) + বেতন (貝) — বেতনভোগী সদস্য।",
    examples: [
      { word: "会員", reading: "かいいん", meaning: "সদস্য" },
      { word: "店員", reading: "てんいん", meaning: "দোকানদার" },
      { word: "選手", reading: "せんしゅ", meaning: "খেলোয়াড়" },
      { word: "全員", reading: "ぜんいん", meaning: "সব সদস্য" },
    ],
    category: "শিক্ষা",
  },

  // Objects / Daily (85-95)
  {
    id: 85, kanji: "車", on: "シャ", kun: "くるま", bn: "গাড়ি", radical: "車", strokes: 7,
    mnemonic: "গাড়ির চাকার আকৃতি — উপরের ছাদ, নিচের চাকা।",
    examples: [
      { word: "車", reading: "くるま", meaning: "গাড়ি" },
      { word: "電車", reading: "でんしゃ", meaning: "ট্রেন" },
      { word: "自転車", reading: "じてんしゃ", meaning: "সাইকেল" },
      { word: "自動車", reading: "じどうしゃ", meaning: "মোটরগাড়ি" },
    ],
    category: "বস্তু",
  },
  {
    id: 86, kanji: "電", on: "デン", kun: "", bn: "বিদ্যুৎ", radical: "雨", strokes: 13,
    mnemonic: "বৃষ্টি (雨) এর নিচে ঘুড়ি — বজ্রপাতে বিদ্যুৎ।",
    examples: [
      { word: "電車", reading: "でんしゃ", meaning: "ট্রেন" },
      { word: "電話", reading: "でんわ", meaning: "টেলিফোন" },
      { word: "電気", reading: "でんき", meaning: "বিদ্যুৎ" },
      { word: "電子", reading: "でんし", meaning: "ইলেকট্রন" },
    ],
    category: "বস্তু",
  },
  {
    id: 87, kanji: "道", on: "ドウ・トウ", kun: "みち", bn: "রাস্তা", radical: "辶", strokes: 12,
    mnemonic: "শিরা (首) + চলা (辶) — মাথার শিরা দিয়ে চলার পথ।",
    examples: [
      { word: "道", reading: "みち", meaning: "রাস্তা" },
      { word: "道具", reading: "どうぐ", meaning: "জিনিসপত্র" },
      { word: "駅道", reading: "えきみち", meaning: "স্টেশনের পথ" },
      { word: "食道", reading: "しょくどう", meaning: "খাদ্যনলী" },
    ],
    category: "বস্তু",
  },
  {
    id: 88, kanji: "門", on: "モン", kun: "かど・と", bn: "দরজা / ফটক", radical: "門", strokes: 8,
    mnemonic: "দুটি দরজার পাতা — প্রবেশদ্বার।",
    examples: [
      { word: "門", reading: "もん", meaning: "দরজা" },
      { word: "入門", reading: "にゅうもん", meaning: "প্রবেশ" },
      { word: "専門", reading: "せんもん", meaning: "বিশেষায়িত" },
      { word: "校門", reading: "こうもん", meaning: "স্কুলের দরজা" },
    ],
    category: "বস্তু",
  },
  {
    id: 89, kanji: "家", on: "カ・ケ", kun: "いえ・や・うち", bn: "বাড়ি", radical: "宀", strokes: 10,
    mnemonic: "ছাদ (宀) + শুকর (豕) — ছাদের নিচে শুকর, পরিবারের বাড়ি।",
    examples: [
      { word: "家", reading: "いえ", meaning: "বাড়ি" },
      { word: "家族", reading: "かぞく", meaning: "পরিবার" },
      { word: "大家", reading: "おおや", meaning: "বাড়ির মালিক" },
      { word: "家内", reading: "かない", meaning: "স্ত্রী" },
    ],
    category: "বস্তু",
  },
  {
    id: 90, kanji: "室", on: "シツ", kun: "むろ", bn: "ঘর", radical: "宀", strokes: 9,
    mnemonic: "ছাদ (宀) + থলি (至) — ছাদের নিচে থলি রাখার ঘর।",
    examples: [
      { word: "教室", reading: "きょうしつ", meaning: "শ্রেণিকক্ষ" },
      { word: "会議室", reading: "かいぎしつ", meaning: "সভাকক্ষ" },
      { word: "地下室", reading: "ちかしつ", meaning: "বেসমেন্ট" },
    ],
    category: "বস্তু",
  },
  {
    id: 91, kanji: "国", on: "コク", kun: "くに", bn: "দেশ", radical: "囗", strokes: 8,
    mnemonic: "চারপাশে দেয়াল (囗) এর মধ্যে ভূমি (玉) — একটি দেশ।",
    examples: [
      { word: "国", reading: "くに", meaning: "দেশ" },
      { word: "中国", reading: "ちゅうごく", meaning: "চীন" },
      { word: "外国", reading: "がいこく", meaning: "বিদেশ" },
      { word: "国家", reading: "こっか", meaning: "রাষ্ট্র" },
    ],
    category: "বস্তু",
  },
  {
    id: 92, kanji: "外", on: "ガイ・ゲ", kun: "そと・ほか・はず(す)", bn: "বাইরে", radical: "夕", strokes: 5,
    mnemonic: "সন্ধ্যা (夕) + জ্ঞান (卜) — সন্ধ্যায় বাইরে যাওয়া।",
    examples: [
      { word: "外", reading: "そと", meaning: "বাইরে" },
      { word: "外国", reading: "がいこく", meaning: "বিদেশ" },
      { word: "海外", reading: "かいがい", meaning: "বিদেশ" },
      { word: "外出", reading: "がいしゅつ", meaning: "বাইরে যাওয়া" },
    ],
    category: "বস্তু",
  },
  {
    id: 93, kanji: "中", on: "チュウ・ジュウ", kun: "なか", bn: "মধ্যে", radical: "丨", strokes: 4,
    mnemonic: "চারপাশে দেয়াল (口) এর মধ্যে এক (丨) — মাঝখান।",
    examples: [
      { word: "中", reading: "なか", meaning: "মধ্যে" },
      { word: "中国", reading: "ちゅうごく", meaning: "চীন" },
      { word: "中学校", reading: "ちゅうがっこう", meaning: "মাধ্যমিক স্কুল" },
      { word: "中心的", reading: "ちゅうしんてき", meaning: "কেন্দ্রীয়" },
    ],
    category: "বস্তু",
  },
  {
    id: 94, kanji: "上", on: "ジョウ・ショウ", kun: "うえ・あ(がる)・のぼ(る)", bn: "উপরে", radical: "一", strokes: 3,
    mnemonic: "এক (一) এর উপর এক — একের উপরে, উপরে।",
    examples: [
      { word: "上", reading: "うえ", meaning: "উপরে" },
      { word: "上手", reading: "じょうず", meaning: "দক্ষ" },
      { word: "上る", reading: "のぼる", meaning: "উঠা" },
      { word: "机上", reading: "きじょう", meaning: "টেবিলের উপর" },
    ],
    category: "বস্তু",
  },
  {
    id: 95, kanji: "下", on: "カ・ゲ", kun: "した・さ(がる)・く(だる)", bn: "নিচে", radical: "一", strokes: 3,
    mnemonic: "এক (一) এর নিচে এক — একের নিচে, নিচে।",
    examples: [
      { word: "下", reading: "した", meaning: "নিচে" },
      { word: "地下", reading: "ちか", meaning: "ভূগর্ভ" },
      { word: "下る", reading: "くだる", meaning: "নামা" },
      { word: "下手", reading: "へた", meaning: "অদক্ষ" },
    ],
    category: "বস্তু",
  },

  // Abstract / Other (96-108)
  {
    id: 96, kanji: "左", on: "サ", kun: "ひだり", bn: "বাম", radical: "工", strokes: 5,
    mnemonic: "কাজ (工) + বাহু — কাজের বাম হাত।",
    examples: [
      { word: "左", reading: "ひだり", meaning: "বাম" },
      { word: "左側", reading: "ひだりがわ", meaning: "বাম দিক" },
      { word: "左手", reading: "ひだりて", meaning: "বাম হাত" },
    ],
    category: "দিক",
  },
  {
    id: 97, kanji: "右", on: "ウ・ユウ", kun: "みぎ", bn: "ডান", radical: "口", strokes: 5,
    mnemonic: "মুখ (口) + কাজের হাত — ডান হাতে কথা বলার অঙ্গভঙ্গি।",
    examples: [
      { word: "右", reading: "みぎ", meaning: "ডান" },
      { word: "右側", reading: "みぎがわ", meaning: "ডান দিক" },
      { word: "右手", reading: "みぎて", meaning: "ডান হাত" },
    ],
    category: "দিক",
  },
  {
    id: 98, kanji: "北", on: "ホク", kun: "きた", bn: "উত্তর", radical: "匕", strokes: 5,
    mnemonic: "দুজন মানুষ পেছন ফিরে — একজন আরেকজনকে উত্তর দিচ্ছে।",
    examples: [
      { word: "北", reading: "きた", meaning: "উত্তর" },
      { word: "北海道", reading: "ほっかいどう", meaning: "হোক্কাইদো" },
      { word: "北口", reading: "きたぐち", meaning: "উত্তর দরজা" },
    ],
    category: "দিক",
  },
  {
    id: 99, kanji: "南", on: "ナン・ナ", kun: "みなみ", bn: "দক্ষিণ", radical: "十", strokes: 9,
    mnemonic: "দশ (十) + একটি পাত্র + ক্রুশ — গরম দক্ষিণের সূর্য।",
    examples: [
      { word: "南", reading: "みなみ", meaning: "দক্ষিণ" },
      { word: "南口", reading: "みなみぐち", meaning: "দক্ষিণ দরজা" },
      { word: "東南", reading: "とうなん", meaning: "দক্ষিণ-পূর্ব" },
    ],
    category: "দিক",
  },
  {
    id: 100, kanji: "東", on: "トウ", kun: "ひがし", bn: "পূর্ব", radical: "木", strokes: 8,
    mnemonic: "সূর্য (日) গাছের (木) মধ্যে ডুবছে — পূর্ব দিকে সূর্য উঠে।",
    examples: [
      { word: "東", reading: "ひがし", meaning: "পূর্ব" },
      { word: "東京", reading: "とうきょう", meaning: "টোকিও" },
      { word: "東口", reading: "ひがしぐち", meaning: "পূর্ব দরজা" },
    ],
    category: "দিক",
  },
  {
    id: 101, kanji: "西", on: "セイ・サイ", kun: "にし", bn: "পশ্চিম", radical: "襾", strokes: 6,
    mnemonic: "একটি পাত্র — সূর্য ডুবে যাওয়ার পশ্চিম দিক।",
    examples: [
      { word: "西", reading: "にし", meaning: "পশ্চিম" },
      { word: "東西", reading: "とうざい", meaning: "পূর্ব ও পশ্চিম" },
      { word: "西口", reading: "にしぐち", meaning: "পশ্চিম দরজা" },
    ],
    category: "দিক",
  },
  {
    id: 102, kanji: "名", on: "メイ・ミョウ", kun: "な", bn: "নাম", radical: "口", strokes: 6,
    mnemonic: "সন্ধ্যা (夕) + মুখ (口) — সন্ধ্যায় মুখে নাম ধরে ডাকা।",
    examples: [
      { word: "名前", reading: "なまえ", meaning: "নাম" },
      { word: "有名", reading: "ゆうめい", meaning: "বিখ্যাত" },
      { word: "名字", reading: "みょうじ", meaning: "পদবি" },
      { word: "名物", reading: "めいぶつ", meaning: "বিখ্যাত জিনিস" },
    ],
    category: "ধারণা",
  },
  {
    id: 103, kanji: "力", on: "リョク・リキ", kun: "ちから", bn: "শক্তি", radical: "力", strokes: 2,
    mnemonic: "একটি স্ফটিকের মতো — পেশীর শক্তির প্রতীক।",
    examples: [
      { word: "力", reading: "ちから", meaning: "শক্তি" },
      { word: "人力", reading: "じんりき", meaning: "মানবশক্তি" },
      { word: "努力", reading: "どりょく", meaning: "পরিশ্রম" },
      { word: "協力", reading: "きょうりょく", meaning: "সহযোগিতা" },
    ],
    category: "ধারণা",
  },
  {
    id: 104, kanji: "心", on: "シン", kun: "こころ", bn: "হৃদয় / মন", radical: "心", strokes: 4,
    mnemonic: "একটি হৃদয়ের আকৃতি — মনের কেন্দ্র।",
    examples: [
      { word: "心", reading: "こころ", meaning: "হৃদয়" },
      { word: "心配", reading: "しんぱい", meaning: "চিন্তা" },
      { word: "安心", reading: "あんしん", meaning: "শান্তি" },
      { word: "中心", reading: "ちゅうしん", meaning: "কেন্দ্র" },
    ],
    category: "ধারণা",
  },
  {
    id: 105, kanji: "手", on: "シュ・ズ", kun: "て", bn: "হাত", radical: "手", strokes: 4,
    mnemonic: "একটি হাতের চিত্র — তর্জনী ও তিন আঙুল।",
    examples: [
      { word: "手", reading: "て", meaning: "হাত" },
      { word: "左手", reading: "ひだりて", meaning: "বাম হাত" },
      { word: "右手", reading: "みぎて", meaning: "ডান হাত" },
      { word: "手紙", reading: "てがみ", meaning: "চিঠি" },
    ],
    category: "শরীর",
  },
  {
    id: 106, kanji: "足", on: "ソク", kun: "あし・た(りる)", bn: "পা", radical: "足", strokes: 7,
    mnemonic: "মুখ (口) + একজন মানুষ নিচে — মুখের নিচে পা।",
    examples: [
      { word: "足", reading: "あし", meaning: "পা" },
      { word: "足元", reading: "あしもと", meaning: "পায়ের কাছে" },
      { word: "遠足", reading: "えんそく", meaning: "পিকনিক" },
      { word: "一足", reading: "いっそく", meaning: "একজোড়া" },
    ],
    category: "শরীর",
  },
  {
    id: 107, kanji: "耳", on: "ジ", kun: "みみ", bn: "কান", radical: "耳", strokes: 6,
    mnemonic: "একটি কানের চিত্র — বাইরের কান ও কানের ছিদ্র।",
    examples: [
      { word: "耳", reading: "みみ", meaning: "কান" },
      { word: "耳元", reading: "みみもと", meaning: "কানের কাছে" },
      { word: "耳鼻科", reading: "じびか", meaning: "ENT বিশেষজ্ঞ" },
    ],
    category: "শরীর",
  },
  {
    id: 108, kanji: "白", on: "ハク・ビャク", kun: "しろ・しら・しろ(い)", bn: "সাদা", radical: "白", strokes: 5,
    mnemonic: "সূর্য (日) এর উপর এক — সূর্যের আলো, সাদা।",
    examples: [
      { word: "白い", reading: "しろい", meaning: "সাদা" },
      { word: "白菜", reading: "はくさい", meaning: "পেঁচাঁয় কপি" },
      { word: "白紙", reading: "はくし", meaning: "খালি কাগজ" },
      { word: "明白", reading: "めいはく", meaning: "স্পষ্ট" },
    ],
    category: "রং",
  },
  {
    id: 109, kanji: "何", on: "カ", kun: "なに・なん", bn: "কী", radical: "人", strokes: 7,
    mnemonic: "মানুষ (人) + বহন (可) — মানুষ কী বহন করছে? কী?",
    examples: [
      { word: "何", reading: "なに", meaning: "কী" },
      { word: "何時", reading: "なんじ", meaning: "কটা বাজে" },
      { word: "何人", reading: "なんにん", meaning: "কতজন" },
      { word: "何度", reading: "なんど", meaning: "কতবার" },
    ],
    category: "ধারণা",
  },
  {
    id: 110, kanji: "毎", on: "マイ", kun: "ごと", bn: "প্রতি", radical: "毋", strokes: 6,
    mnemonic: "মা (母) + এক — প্রতিটি মায়ের মতো, প্রতিদিন।",
    examples: [
      { word: "毎日", reading: "まいにち", meaning: "প্রতিদিন" },
      { word: "毎月", reading: "まいつき", meaning: "প্রতি মাস" },
      { word: "毎年", reading: "まいとし", meaning: "প্রতি বছর" },
      { word: "毎朝", reading: "まいあさ", meaning: "প্রতি সকাল" },
    ],
    category: "ধারণা",
  },
  {
    id: 111, kanji: "元", on: "ゲン・ガン", kun: "もと", bn: "মূল / টাকা", radical: "儿", strokes: 4,
    mnemonic: "দুটি পা (儿) + দুই রেখা — মূল থেকে শুরু।",
    examples: [
      { word: "元気", reading: "げんき", meaning: "সুস্থ" },
      { word: "元々", reading: "もともと", meaning: "আসলে" },
      { word: "地元", reading: "じもと", meaning: "স্থানীয়" },
      { word: "一元", reading: "いちげん", meaning: "এক ইয়েন" },
    ],
    category: "ধারণা",
  },
  {
    id: 112, kanji: "気", on: "キ・ケ", kun: "", bn: "মন / আবহাওয়া / গ্যাস", radical: "气", strokes: 6,
    mnemonic: "বাতাস (气) এর নিচে ধান (米) — বাতাসে ধানের গন্ধ, মনের অনুভূতি।",
    examples: [
      { word: "気", reading: "き", meaning: "মন" },
      { word: "天気", reading: "てんき", meaning: "আবহাওয়া" },
      { word: "電気", reading: "でんき", meaning: "বিদ্যুৎ" },
      { word: "元気", reading: "げんき", meaning: "সুস্থ" },
    ],
    category: "ধারণা",
  },
  {
    id: 113, kanji: "名", on: "メイ・ミョウ", kun: "な", bn: "নাম", radical: "口", strokes: 6,
    mnemonic: "সন্ধ্যা (夕) + মুখ (口) — সন্ধ্যায় নাম ধরে ডাকা।",
    examples: [
      { word: "名前", reading: "なまえ", meaning: "নাম" },
      { word: "有名", reading: "ゆうめい", meaning: "বিখ্যাত" },
      { word: "名字", reading: "みょうじ", meaning: "পদবি" },
    ],
    category: "ধারণা",
  },
  {
    id: 114, kanji: "番", on: "バン", kun: "つが(い)", bn: "নম্বর / পালা", radical: "田", strokes: 12,
    mnemonic: "ক্ষেত (田) + বিক্রি (釆) — ক্ষেতের নম্বর, পালা।",
    examples: [
      { word: "番号", reading: "ばんごう", meaning: "নম্বর" },
      { word: "一番", reading: "いちばん", meaning: "প্রথম / সবচেয়ে" },
      { word: "順番", reading: "じゅんばん", meaning: "ক্রম" },
    ],
    category: "ধারণা",
  },
  {
    id: 115, kanji: "問", on: "モン", kun: "と(う)・と(い)・とん", bn: "প্রশ্ন", radical: "門", strokes: 11,
    mnemonic: "দরজা (門) + মুখ (口) — দরজার সামনে প্রশ্ন করা।",
    examples: [
      { word: "問題", reading: "もんだい", meaning: "সমস্যা / প্রশ্ন" },
      { word: "質問", reading: "しつもん", meaning: "প্রশ্ন" },
      { word: "訪問", reading: "ほうもん", meaning: "পরিদর্শন" },
    ],
    category: "ধারণা",
  },
  {
    id: 116, kanji: "題", on: "ダイ", kun: "", bn: "বিষয় / শিরোনাম", radical: "頁", strokes: 18,
    mnemonic: "হাঁটা (是) + পৃষ্ঠা (頁) — পৃষ্ঠার বিষয়, শিরোনাম।",
    examples: [
      { word: "問題", reading: "もんだい", meaning: "প্রশ্ন" },
      { word: "課題", reading: "かだい", meaning: "বিষয়" },
      { word: "主題", reading: "しゅだい", meaning: "মূল বিষয়" },
    ],
    category: "ধারণা",
  },
  {
    id: 117, kanji: "思", on: "シ", kun: "おも(う)", bn: "ভাবা", radical: "心", strokes: 9,
    mnemonic: "মুখের নিচে মন (心) — মুখের ভাব দিয়ে ভাবনা প্রকাশ।",
    examples: [
      { word: "思う", reading: "おもう", meaning: "ভাবা" },
      { word: "思想", reading: "しそう", meaning: "চিন্তাধারা" },
      { word: "意思", reading: "いし", meaning: "ইচ্ছা" },
      { word: "思い出", reading: "おもいで", meaning: "স্মৃতি" },
    ],
    category: "ধারণা",
  },
  {
    id: 118, kanji: "知", on: "チ", kun: "し(る)・し(らせる)", bn: "জানা", radical: "矢", strokes: 8,
    mnemonic: "তীর (矢) + মুখ (口) — তীরের মতো দ্রুত জ্ঞান, জানা।",
    examples: [
      { word: "知る", reading: "しる", meaning: "জানা" },
      { word: "知識", reading: "ちしき", meaning: "জ্ঞান" },
      { word: "通知", reading: "つうち", meaning: "বিজ্ঞপ্তি" },
    ],
    category: "ধারণা",
  },
  {
    id: 119, kanji: "言", on: "ゲン・ゴン", kun: "い(う)・こと", bn: "কথা", radical: "言", strokes: 7,
    mnemonic: "একটি বক্সের উপর তিনটি রেখা — মুখ থেকে বের হওয়া কথা।",
    examples: [
      { word: "言う", reading: "いう", meaning: "বলা" },
      { word: "言語", reading: "げんご", meaning: "ভাষা" },
      { word: "方言", reading: "ほうげん", meaning: "আঞ্চলিক ভাষা" },
      { word: "言葉", reading: "ことば", meaning: "শব্দ" },
    ],
    category: "ধারণা",
  },
  {
    id: 120, kanji: "語", on: "ゴ", kun: "かた(る)", bn: "ভাষা / শব্দ", radical: "言", strokes: 14,
    mnemonic: "কথা (言) + আমি (吾) — আমার ভাষা, কথা।",
    examples: [
      { word: "日本語", reading: "にほんご", meaning: "জাপানি ভাষা" },
      { word: "英語", reading: "えいご", meaning: "ইংরেজি" },
      { word: "言語", reading: "げんご", meaning: "ভাষা" },
      { word: "物語", reading: "ものがたり", meaning: "গল্প" },
    ],
    category: "ধারণা",
  },
];

export const categories = [
  "সব",
  "সংখ্যা",
  "সময়",
  "মানুষ",
  "শরীর",
  "ক্রিয়া",
  "বিশেষণ",
  "প্রকৃতি",
  "শিক্ষা",
  "বস্তু",
  "দিক",
  "ধারণা",
  "রং",
];
