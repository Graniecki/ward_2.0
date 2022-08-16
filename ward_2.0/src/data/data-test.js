const data = [
  {
    "id": 1,
    "word": "шлунок",
    "translation": "stomach"
  },
  {
    "id": 2,
    "word": "перукар",
    "translation": "hairdresser"
  },
  {
    "id": 3,
    "word": "справляти враження",
    "translation": "to give an impression"
  },
  {
    "id": 4,
    "word": "безробітний",
    "translation": "to be out of work"
  },
  {
    "id": 5,
    "word": "швидкий",
    "translation": "swift"
  },
  {
    "id": 6,
    "word": "наємний солдат",
    "translation": "mercenary",
    "transcription": "/ˈmɜːsənəri/"
  },
  {
    "id": 7,
    "word": "йти на пенсію",
    "translation": "retire"
  },
  {
    "id": 8,
    "word": "звільнений",
    "translation": "made redundant"
  },
  {
    "id": 9,
    "word": "звільнятись, йти у відставку",
    "translation": "resign"
  },
  {
    "id": 10,
    "word": "жалкувати, каятися",
    "translation": "regret"
  },
  {
    "id": 11,
    "word": "бути звільненим",
    "translation": "be sacked"
  },
  {
    "id": 12,
    "word": "мішок",
    "translation": "sack"
  },
  {
    "id": 13,
    "word": "підприємець",
    "translation": "entrepreneur",
    "transcription": "/ˌɒntrəprəˈnɜːr/"
  },
  {
    "id": 14,
    "word": "керувати, відповідати за щось",
    "translation": "be in charge of"
  },
  {
    "id": 15,
    "word": "реклама",
    "translation": "advertisement/advert/ad"
  },
  {
    "id": 16,
    "word": "кусати, гризти",
    "translation": "bite"
  },
  {
    "id": 17,
    "word": "байдужий",
    "translation": "indifferent"
  },
  {
    "id": 18,
    "word": "їздити на роботу і назад",
    "translation": "commute"
  },
  {
    "id": 19,
    "word": "видаватись, здаватись",
    "translation": "seem"
  },
  {
    "id": 20,
    "word": "відмовлятись",
    "translation": "refuse"
  },
  {
    "id": 21,
    "word": "прикидатись",
    "translation": "pretend"
  },
  {
    "id": 22,
    "word": "спроба",
    "translation": "effort"
  },
  {
    "id": 23,
    "word": "дозволяти собі",
    "translation": "afford"
  },
  {
    "id": 24,
    "word": "уникати",
    "translation": "avoid + (gerund)"
  },
  {
    "id": 25,
    "word": "заперечувати",
    "translation": "deny",
    "transcription": "/dɪˈnaɪ/"
  },
  {
    "id": 26,
    "word": "признавати, признаватись",
    "translation": "admit"
  },
  {
    "id": 27,
    "word": "цікавитись, бажати знати",
    "translation": "wonder",
    "transcription": "/ˈwʌndər/"
  },
  {
    "id": 28,
    "word": "до, до тих пір поки",
    "translation": "until or till"
  },
  {
    "id": 29,
    "word": "бачити/розуміти",
    "translation": "see"
  },
  {
    "id": 30,
    "word": "скарга",
    "translation": "complaint"
  },
  {
    "id": 31,
    "word": "скаржитись",
    "translation": "complain"
  },
  {
    "id": 32,
    "word": "забобон",
    "translation": "superstition",
    "transcription": "/ˌsuːpəˈstɪʃən/"
  },
  {
    "id": 33,
    "word": "different ...",
    "translation": "different from"
  },
  {
    "id": 34,
    "word": "на коні, в ударі (щастити)",
    "translation": "on a roll"
  },
  {
    "id": 35,
    "word": "be tired ... smth",
    "translation": "be tired of smth"
  },
  {
    "id": 36,
    "word": "be worried ... smth",
    "translation": "be worried about smth"
  },
  {
    "id": 37,
    "word": "be rude ... smb",
    "translation": "be rude with smb"
  },
  {
    "id": 38,
    "word": "be proud ... smth",
    "translation": "be proud of smth"
  },
  {
    "id": 39,
    "word": "be pleased ... smth",
    "translation": "be pleased with smth"
  },
  {
    "id": 40,
    "word": "be maried ... smb",
    "translation": "be maried to smb"
  },
  {
    "id": 41,
    "word": "робити щось в минулому/бути в минулому якимось",
    "translation": "used to"
  },
  {
    "id": 42,
    "word": "be famous ... smth",
    "translation": "be famous for smth"
  },
  {
    "id": 43,
    "word": "be fed up ... smth",
    "translation": "be fed up with smth"
  },
  {
    "id": 44,
    "word": "be excited ... smth",
    "translation": "be excited about smth"
  },
  {
    "id": 45,
    "word": "be close ... smth/smb",
    "translation": "be close to smth/smb"
  },
  {
    "id": 46,
    "word": "be interested ... smth",
    "translation": "be interested in smth"
  },
  {
    "id": 47,
    "word": "be good ... smth",
    "translation": "be good at smth"
  },
  {
    "id": 48,
    "word": "angry ... smb/smth",
    "translation": "angry with smb/smth"
  },
  {
    "id": 49,
    "word": "afraid ... smth",
    "translation": "afraid of smth"
  },
  {
    "id": 50,
    "word": "pay ...",
    "translation": "pay for"
  },
  {
    "id": 51,
    "word": "dream ...",
    "translation": "dream about"
  },
  {
    "id": 52,
    "word": "believe ...",
    "translation": "believe in"
  },
  {
    "id": 53,
    "word": "ask ... sb/sth",
    "translation": "ask for sb/sth"
  },
  {
    "id": 54,
    "word": "argue ...",
    "translation": "argue with"
  },
  {
    "id": 55,
    "word": "apologise ... smb ... smth",
    "translation": "apologise to smb for smth"
  },
  {
    "id": 56,
    "word": "закупорювати",
    "translation": "to bottle up"
  },
  {
    "id": 57,
    "word": "be kind ... smb",
    "translation": "be kind to smb"
  },
  {
    "id": 58,
    "word": "remind sb ... sth/sb",
    "translation": "remind sb of sth/sb"
  },
  {
    "id": 59,
    "word": "досягати",
    "translation": "achieve"
  },
  {
    "id": 60,
    "word": "на днях",
    "translation": "the other day"
  },
  {
    "id": 61,
    "word": "чекати щось з нетерпінням",
    "translation": "look forward to sth/doing sth"
  },
  {
    "id": 62,
    "word": "вмовляти, переконувати",
    "translation": "persuade",
    "transcription": "/pəˈsweɪd/"
  },
  {
    "id": 63,
    "word": "робити все можливе",
    "translation": "do/try your best"
  },
  {
    "id": 64,
    "word": "посміхатись",
    "translation": "smile at"
  },
  {
    "id": 65,
    "word": "сміятись над кимось/чимось",
    "translation": "laugh at sb/sth"
  },
  {
    "id": 66,
    "word": "залежати від чогось",
    "translation": "depend on sth "
  },
  {
    "id": 67,
    "word": "намисто",
    "translation": "necklace",
    "transcription": "/ˈnekləs/"
  },
  {
    "id": 68,
    "word": "належати",
    "translation": "belong to sb/sth"
  },
  {
    "id": 69,
    "word": "знизу, нижче",
    "translation": "below"
  },
  {
    "id": 70,
    "word": "показник, критерій / оцінювати, виміряти",
    "translation": "gauge",
    "transcription": "/ɡeɪdʒ/"
  },
  {
    "id": 71,
    "word": "підхід (шлях щоб робити щось)",
    "translation": "approach",
    "transcription": "/əˈprəʊtʃ/"
  },
  {
    "id": 72,
    "word": "точність",
    "translation": "precision",
    "transcription": "/prɪˈsɪʒən/"
  },
  {
    "id": 73,
    "word": "осмислювати",
    "translation": "realize"
  },
  {
    "id": 74,
    "word": "дивитись за кимось/чимось",
    "translation": "look after sb/sth"
  },
  {
    "id": 75,
    "word": "обслуговувати, служити",
    "translation": "serve"
  },
  {
    "id": 76,
    "word": "лосось",
    "translation": "salmon",
    "transcription": "/ˈsæmən/"
  },
  {
    "id": 77,
    "word": "особистість",
    "translation": "identity",
    "transcription": "/aɪˈdentəti/"
  },
  {
    "id": 78,
    "word": "чіткий, ясний",
    "translation": "definite"
  },
  {
    "id": 79,
    "word": "хоча",
    "translation": "although"
  },
  {
    "id": 80,
    "word": "трошки",
    "translation": "slightly"
  },
  {
    "id": 81,
    "word": "не важливий",
    "translation": "slight"
  },
  {
    "id": 82,
    "word": "в той час як, тоді як",
    "translation": "whereas",
    "transcription": "/weəˈræz/"
  },
  {
    "id": 83,
    "word": "заявляти, стверджувати",
    "translation": "claim"
  },
  {
    "id": 84,
    "word": "зв'язок, зв'язувати",
    "translation": "link"
  },
  {
    "id": 85,
    "word": "майже",
    "translation": "almost",
    "transcription": "/ˈɔːlməʊst/"
  },
  {
    "id": 86,
    "word": "коливатись в певних межах",
    "translation": "range from sth to sth"
  },
  {
    "id": 87,
    "word": "плітка",
    "translation": "gossip",
    "transcription": "/ˈɡɒsɪp/"
  },
  {
    "id": 88,
    "word": "дуже дякую",
    "translation": "thanks a bunch"
  },
  {
    "id": 89,
    "word": "вибоїстий",
    "translation": "bumpy"
  },
  {
    "id": 90,
    "word": "санки",
    "translation": "sledge",
    "transcription": "/sledʒ/"
  },
  {
    "id": 91,
    "word": "набитий, переповнений",
    "translation": "packed"
  },
  {
    "id": 92,
    "word": "дах",
    "translation": "roof"
  },
  {
    "id": 93,
    "word": "звичайний, широко розповсюджений",
    "translation": "common"
  },
  {
    "id": 94,
    "word": "в, серед",
    "translation": "among"
  },
  {
    "id": 95,
    "word": "берег",
    "translation": "bank"
  },
  {
    "id": 96,
    "word": "тростина",
    "translation": "reed"
  },
  {
    "id": 97,
    "word": "брати, отримувати",
    "translation": "pick sth up"
  },
  {
    "id": 98,
    "word": "традиційний",
    "translation": "conventional",
    "transcription": "/kənˈvenʃənəl/"
  },
  {
    "id": 99,
    "word": "коврик",
    "translation": "mat"
  },
  {
    "id": 100,
    "word": "стежка",
    "translation": "track"
  },
  {
    "id": 101,
    "word": "допоміжний, допомагаючий",
    "translation": "Auxiliary",
    "transcription": "/ɔːɡˈzɪliəri/"
  },
  {
    "id": 102,
    "word": "чия, чий, чиє, чиї",
    "translation": "Whose"
  },
  {
    "id": 103,
    "word": "прийменник",
    "translation": "Preposition"
  },
  {
    "id": 104,
    "word": "котрий",
    "translation": "Which"
  },
  {
    "id": 105,
    "word": "забезпечувати, надавати",
    "translation": "Provide"
  },
  {
    "id": 106,
    "word": "виробляти, випускати, створювати",
    "translation": "Produce"
  },
  {
    "id": 107,
    "word": "шина, покришка",
    "translation": "Tyre",
    "transcription": "|ˈtaɪər|"
  },
  {
    "id": 108,
    "word": "допоміжнаий, додатковий, філія",
    "translation": "Subsidiary"
  },
  {
    "id": 109,
    "word": "конкурент, соперник",
    "translation": "Competitor"
  },
  {
    "id": 110,
    "word": "швидкий, підказувати",
    "translation": "Prompt"
  },
  {
    "id": 111,
    "word": "захищати, охороняти",
    "translation": "Protect"
  },
  {
    "id": 112,
    "word": "річний",
    "translation": "Annual"
  },
  {
    "id": 113,
    "word": "працювати, керувати",
    "translation": "Operate"
  },
  {
    "id": 114,
    "word": "відповідний, придатний",
    "translation": "Suitable"
  },
  {
    "id": 115,
    "word": "широкий, великий",
    "translation": "wide"
  },
  {
    "id": 116,
    "word": "консультувати",
    "translation": "Consult"
  },
  {
    "id": 117,
    "word": "рекламувати, афішувати",
    "translation": "Advertise"
  },
  {
    "id": 118,
    "word": "безсумнівно",
    "translation": "certainly"
  },
  {
    "id": 119,
    "word": "взяти в борг",
    "translation": "to borrow"
  },
  {
    "id": 120,
    "word": "позичити (комусь)",
    "translation": "to lend"
  },
  {
    "id": 121,
    "word": "прикметник",
    "translation": "Adjective"
  },
  {
    "id": 122,
    "word": "втомлюватись",
    "translation": "Tire",
    "transcription": "|ˈtaɪər|"
  },
  {
    "id": 123,
    "word": "виснажений, знесилений",
    "translation": "Exhausted"
  },
  {
    "id": 124,
    "word": "дивувати",
    "translation": "Amaze"
  },
  {
    "id": 125,
    "word": "дивувати",
    "translation": "Astonish"
  },
  {
    "id": 126,
    "word": "розважати",
    "translation": "Amuse"
  },
  {
    "id": 127,
    "word": "жахати, вселяти жах",
    "translation": "Terrify"
  },
  {
    "id": 128,
    "word": "згодом, потім, пізніше",
    "translation": "Afterwards",
    "transcription": "|ˈæftərwərdz|"
  },
  {
    "id": 129,
    "word": "огида, гидливість",
    "translation": "Disgust",
    "transcription": "|dɪsˈɡʌst|"
  },
  {
    "id": 130,
    "word": "рідко",
    "translation": "Seldom"
  },
  {
    "id": 131,
    "word": "особливо, зокрема",
    "translation": "Particularly"
  },
  {
    "id": 132,
    "word": "дратувати, докучати, набридати",
    "translation": "Annoy"
  },
  {
    "id": 133,
    "word": "радувати, подобатися",
    "translation": "pleased"
  },
  {
    "id": 134,
    "word": "збентежений, розгублений",
    "translation": "embarrassed"
  },
  {
    "id": 135,
    "word": "розчарований",
    "translation": "disappointed"
  },
  {
    "id": 136,
    "word": "засмучений",
    "translation": "upset"
  },
  {
    "id": 137,
    "word": "зляканий",
    "translation": "scared"
  },
  {
    "id": 138,
    "word": "сплутаний, збентежений, поставлений у глухий кут",
    "translation": "confused"
  },
  {
    "id": 139,
    "word": "задоволений, радісний",
    "translation": "glad"
  },
  {
    "id": 140,
    "word": "стурбований",
    "translation": "concerned"
  },
  {
    "id": 141,
    "word": "я терпіти не можу, я ненавиджу",
    "translation": "I can't stand"
  },
  {
    "id": 142,
    "word": "мене цілком цікавить",
    "translation": "I'm quite interested in"
  },
  {
    "id": 143,
    "word": "я думаю все добре",
    "translation": "I think is all right"
  },
  {
    "id": 144,
    "word": "мене нервує",
    "translation": "get on my nerves"
  },
  {
    "id": 145,
    "word": "я не переношу, мені нестерпно",
    "translation": "I can't bear"
  },
  {
    "id": 146,
    "word": "мені всеодно",
    "translation": "I don't mind"
  },
  {
    "id": 147,
    "word": "я дуже цікавлюсь",
    "translation": "I'm really keen on"
  },
  {
    "id": 148,
    "word": "я не в захваті від",
    "translation": "I'm not very keen on"
  },
  {
    "id": 149,
    "word": "зводити з розуму, виводити з себе",
    "translation": "drive me crazy"
  },
  {
    "id": 150,
    "word": "блискуче, геніально",
    "translation": "brilliant"
  },
  {
    "id": 151,
    "word": "погано, жахливо",
    "translation": "awful"
  },
  {
    "id": 152,
    "word": "кошмарно, жахливо",
    "translation": "dreadful"
  },
  {
    "id": 153,
    "word": "майже не, майже ніколи",
    "translation": "hardly ever"
  },
  {
    "id": 154,
    "word": "ніхто",
    "translation": "noone"
  },
  {
    "id": 155,
    "word": "ніхто, ніякий, ніодин",
    "translation": "neither"
  },
  {
    "id": 156,
    "word": "вслух",
    "translation": "out loud"
  },
  {
    "id": 157,
    "word": "annoyed ...",
    "translation": "annoyed at"
  },
  {
    "id": 158,
    "word": "nervous ...",
    "translation": "nervous about"
  },
  {
    "id": 159,
    "word": "happy ...",
    "translation": "happy to"
  },
  {
    "id": 160,
    "word": "concerned ...",
    "translation": "concerned about"
  },
  {
    "id": 161,
    "word": "frightened ...",
    "translation": "frightened of"
  },
  {
    "id": 162,
    "word": "embarrassed ...",
    "translation": "embarrassed about"
  },
  {
    "id": 163,
    "word": "surprised ...",
    "translation": "surprised by"
  },
  {
    "id": 164,
    "word": "досліджувати",
    "translation": "Investigate"
  },
  {
    "id": 165,
    "word": "приймати",
    "translation": "Adopt"
  },
  {
    "id": 166,
    "word": "особистість, індивідуальність",
    "translation": "Personality"
  },
  {
    "id": 167,
    "word": "голод, голодування, голодна смерть, виснаження",
    "translation": "Starvation"
  },
  {
    "id": 168,
    "word": "голодувати",
    "translation": "starve"
  },
  {
    "id": 169,
    "word": "ожиріння",
    "translation": "Obesity",
    "transcription": "|əʊˈbiːsətɪ|"
  },
  {
    "id": 170,
    "word": "переповнювати",
    "translation": "Overwhelm",
    "transcription": "|ˌəʊvərˈwelm|"
  },
  {
    "id": 171,
    "word": "перевантажений, переповнений",
    "translation": "overwhelmed"
  },
  {
    "id": 172,
    "word": "розлад, хвороба",
    "translation": "disorder"
  },
  {
    "id": 173,
    "word": "споживати",
    "translation": "consume"
  },
  {
    "id": 174,
    "word": "стежити за, контролювати",
    "translation": "monitor"
  },
  {
    "id": 175,
    "word": "помітити, помічати",
    "translation": "notice"
  },
  {
    "id": 176,
    "word": "радість",
    "translation": "joy"
  },
  {
    "id": 177,
    "word": "визначення, поняття",
    "translation": "Definition"
  },
  {
    "id": 178,
    "word": "жадати",
    "translation": "crave"
  },
  {
    "id": 179,
    "word": "миттєво, відразу",
    "translation": "instantly"
  },
  {
    "id": 180,
    "word": "через",
    "translation": "across"
  },
  {
    "id": 181,
    "word": "пропонувати, радити",
    "translation": "suggest"
  },
  {
    "id": 182,
    "word": "протилежний",
    "translation": "opposite"
  },
  {
    "id": 183,
    "word": "біль, шкода,",
    "translation": "Hurt",
    "transcription": "|hɜːrt|"
  },
  {
    "id": 184,
    "word": "в кінці кінців",
    "translation": "Eventually"
  },
  {
    "id": 185,
    "word": "доречний, релевантний",
    "translation": "relevant"
  },
  {
    "id": 186,
    "word": "накопичувати",
    "translation": "accumulate"
  },
  {
    "id": 187,
    "word": "навіть",
    "translation": "Even"
  },
  {
    "id": 188,
    "word": "ясність, чіткість",
    "translation": "clarity"
  },
  {
    "id": 189,
    "word": "заманливий",
    "translation": "tempting"
  },
  {
    "id": 190,
    "word": "спроба",
    "translation": "effort"
  },
  {
    "id": 191,
    "word": "класифікувати",
    "translation": "categorize"
  },
  {
    "id": 192,
    "word": "далеко, далі",
    "translation": "further"
  },
  {
    "id": 193,
    "word": "розглядати, обдумувати",
    "translation": "consider"
  },
  {
    "id": 194,
    "word": "марнувати, витрачати даремно",
    "translation": "waste"
  },
  {
    "id": 195,
    "word": "дозволяти собі",
    "translation": "afford"
  },
  {
    "id": 196,
    "word": "ціна, плата",
    "translation": "charge"
  },
  {
    "id": 197,
    "word": "водопровідник",
    "translation": "Plumber"
  },
  {
    "id": 198,
    "word": "рахунок",
    "translation": "bill"
  },
  {
    "id": 199,
    "word": "бути винним (гроші)",
    "translation": "owe"
  },
  {
    "id": 200,
    "word": "позика, позичка",
    "translation": "loan",
    "transcription": "/ləʊn/"
  },
  {
    "id": 201,
    "word": "змінити, реформувати",
    "translation": "reshape"
  },
  {
    "id": 202,
    "word": "проливати",
    "translation": "spill",
    "transcription": ""
  },
  {
    "id": 203,
    "word": "викидати",
    "translation": "throw sth out",
    "transcription": ""
  },
  {
    "id": 204,
    "word": "фея",
    "translation": "fairy",
    "transcription": ""
  },
  {
    "id": 205,
    "word": "подушка",
    "translation": "pillow",
    "transcription": ""
  },
  {
    "id": 206,
    "word": "драбина",
    "translation": "ladder",
    "transcription": ""
  },
  {
    "id": 207,
    "word": "копати",
    "translation": "dig",
    "transcription": ""
  },
  {
    "id": 208,
    "word": "повторювати пройдений матеріал",
    "translation": "revise",
    "transcription": ""
  },
  {
    "id": 209,
    "word": "якщо не",
    "translation": "unless",
    "transcription": ""
  },
  {
    "id": 210,
    "word": "закривати, закриватись",
    "translation": "shut",
    "transcription": "/ʃʌt/"
  },
  {
    "id": 211,
    "word": "кричати, викрикувати",
    "translation": "shout",
    "transcription": "/ʃaʊt/"
  },
  {
    "id": 212,
    "word": "кричати",
    "translation": "yell",
    "transcription": "/jel/"
  },
  {
    "id": 213,
    "word": "прийом, зустріч",
    "translation": "appointment",
    "transcription": ""
  },
  {
    "id": 214,
    "word": "підвозити когось",
    "translation": "to give sb a lift ",
    "transcription": ""
  },
  {
    "id": 215,
    "word": "наслідок",
    "translation": "consequence",
    "transcription": "/ˈkɒnsɪkwəns/"
  },
  {
    "id": 216,
    "word": "припускати",
    "translation": "assume",
    "transcription": ""
  },
  {
    "id": 217,
    "word": "здатність",
    "translation": "capability",
    "transcription": ""
  },
  {
    "id": 218,
    "word": "вимір, аспект",
    "translation": "dimension",
    "transcription": ""
  },
  {
    "id": 219,
    "word": "послуга",
    "translation": "favour",
    "transcription": "/ˈfeɪvər/"
  },
  {
    "id": 220,
    "word": "жест",
    "translation": "gesture",
    "transcription": ""
  },
  {
    "id": 221,
    "word": "довільний",
    "translation": "arbitrary",
    "transcription": ""
  },
  {
    "id": 222,
    "word": "зручний",
    "translation": "convenient",
    "transcription": ""
  },
  {
    "id": 223,
    "word": "очевидний",
    "translation": "obvious",
    "transcription": " /ˈɒbviəs/"
  },
  {
    "id": 224,
    "word": "ставати кращим, покращуватись",
    "translation": "look up",
    "transcription": ""
  },
  {
    "id": 225,
    "word": "поважати, захоплюватись",
    "translation": "look up to sb",
    "transcription": ""
  },
  {
    "id": 226,
    "word": "справа, питання",
    "translation": "matter",
    "transcription": "/ˈmætər/"
  },
  {
    "id": 227,
    "word": "хотіти",
    "translation": "fancy",
    "transcription": ""
  },
  {
    "id": 228,
    "word": "таємниця",
    "translation": "mystery",
    "transcription": ""
  },
  {
    "id": 229,
    "word": "забороняти",
    "translation": "forbid",
    "transcription": ""
  },
  {
    "id": 230,
    "word": "виділятись",
    "translation": "stand out",
    "transcription": ""
  },
  {
    "id": 231,
    "word": "видатний",
    "translation": "outstanding",
    "transcription": ""
  },
  {
    "id": 232,
    "word": "повстанець, повставати",
    "translation": "rebel",
    "transcription": "/ˈrebəl/"
  },
  {
    "id": 233,
    "word": "вундеркінд",
    "translation": "prodigy",
    "transcription": "/ˈprɒdɪdʒi/"
  },
  {
    "id": 234,
    "word": "спір",
    "translation": "controversy",
    "transcription": "/ˈkɒntrəvɜːsi/"
  },
  {
    "id": 235,
    "word": "повний рішучості",
    "translation": "determined",
    "transcription": "/dɪˈtɜːmɪnd/"
  },
  {
    "id": 236,
    "word": "заохочувати, сприяти",
    "translation": "encourage",
    "transcription": "/ɪnˈkʌrɪdʒ/"
  },
  {
    "id": 237,
    "word": "супроводжувати",
    "translation": "accompany",
    "transcription": "/əˈkʌmpəni/"
  },
  {
    "id": 238,
    "word": "наполягати на чомусь",
    "translation": "to insist on sth ",
    "transcription": ""
  },
  {
    "id": 239,
    "word": "зберігатися, залишатися",
    "translation": "persist",
    "transcription": ""
  },
  {
    "id": 240,
    "word": "відрізнятися, чудово робити що-небудь",
    "translation": "excel",
    "transcription": "/ɪkˈsel/"
  },
  {
    "id": 241,
    "word": "перевершити самого себе",
    "translation": "excel yourself",
    "transcription": ""
  },
  {
    "id": 242,
    "word": "почати займатися чимось",
    "translation": "take sth up",
    "transcription": ""
  },
  {
    "id": 243,
    "word": "обурюватися",
    "translation": "resent",
    "transcription": "/rɪˈzent/"
  },
  {
    "id": 244,
    "word": "змагальний, заснований на конкуренції",
    "translation": "competitive",
    "transcription": ""
  },
  {
    "id": 245,
    "word": "бути присутнім",
    "translation": "attend",
    "transcription": ""
  },
  {
    "id": 246,
    "word": "приватний викладач, репетитор",
    "translation": "tutor",
    "transcription": ""
  },
  {
    "id": 247,
    "word": "залежати від будь-кого/чого-небудь",
    "translation": "rely on sb/sth",
    "transcription": ""
  },
  {
    "id": 248,
    "word": "не спати",
    "translation": "awake",
    "transcription": ""
  },
  {
    "id": 249,
    "word": "зір",
    "translation": "sight",
    "transcription": "/saɪt/"
  },
  {
    "id": 250,
    "word": "бути не проти, не переживти за це",
    "translation": "not seem to mind",
    "transcription": ""
  },
  {
    "id": 251,
    "word": "підходити (річ підходить якраз по розміру)",
    "translation": "fit",
    "transcription": ""
  },
  {
    "id": 252,
    "word": "усвідомлювати",
    "translation": "be aware of/that",
    "transcription": ""
  },
  {
    "id": 253,
    "word": "забороняти",
    "translation": "ban",
    "transcription": ""
  },
  {
    "id": 254,
    "word": "карати",
    "translation": "punish",
    "transcription": ""
  },
  {
    "id": 255,
    "word": "робити щось з небажанням",
    "translation": "to be reluctant to do smth",
    "transcription": "/rɪˈlʌktənt/"
  },
  {
    "id": 256,
    "word": "оглянути пам'ятки",
    "translation": "to go sightseeing / to see the sights",
    "transcription": ""
  },
  {
    "id": 257,
    "word": "виховувати когось",
    "translation": "bring somebody up",
    "transcription": ""
  },
  {
    "id": 258,
    "word": "виганяти, виключати",
    "translation": "expel",
    "transcription": ""
  },
  {
    "id": 259,
    "word": "обов'язковий",
    "translation": "compulsory",
    "transcription": "/kəmˈpʌlsəri/"
  },
  {
    "id": 260,
    "word": "отримувати, купувати",
    "translation": "gain",
    "transcription": ""
  },
  {
    "id": 261,
    "word": "приміщення, територія",
    "translation": "premises",
    "transcription": "/ˈpremɪsɪz/"
  },
  {
    "id": 262,
    "word": "нагорода",
    "translation": "award",
    "transcription": ""
  },
  {
    "id": 263,
    "word": "уточнювати",
    "translation": "specify",
    "transcription": ""
  },
  {
    "id": 264,
    "word": "іскра",
    "translation": "spark",
    "transcription": "/spɑːk/"
  },
  {
    "id": 265,
    "word": "виробляти, приносити",
    "translation": "yield",
    "transcription": "/jiːld/"
  },
  {
    "id": 266,
    "word": "здатність, вмістимість",
    "translation": "capacity",
    "transcription": ""
  },
  {
    "id": 267,
    "word": "одночасний",
    "translation": "simultaneous",
    "transcription": "/ˌsɪməlˈteɪniəs/"
  },
  {
    "id": 268,
    "word": "відправляти, посилати, відправка",
    "translation": "dispatch",
    "transcription": ""
  },
  {
    "id": 269,
    "word": "простий",
    "translation": "plain",
    "transcription": ""
  },
  {
    "id": 270,
    "word": "не ймовірний, неправдоподібний",
    "translation": "improbable",
    "transcription": ""
  },
  {
    "id": 271,
    "word": "вигаданий",
    "translation": "imaginary",
    "transcription": ""
  },
  {
    "id": 272,
    "word": "шерсть",
    "translation": "fur",
    "transcription": "/fɜːr/"
  },
  {
    "id": 273,
    "word": "парусний спорт",
    "translation": "sailing",
    "transcription": ""
  },
  {
    "id": 274,
    "word": "позбуватися від чогось",
    "translation": "get rid of sth",
    "transcription": ""
  },
  {
    "id": 275,
    "word": "розширяти, розширятися",
    "translation": "expand",
    "transcription": "/ɪkˈspænd"
  },
  {
    "id": 276,
    "word": "статуя",
    "translation": "statue",
    "transcription": "/ˈstætʃuː/"
  },
  {
    "id": 277,
    "word": "надзвичайно, дуже",
    "translation": "greatly",
    "transcription": "/ˈɡreɪtli/"
  },
  {
    "id": 278,
    "word": "перевершувати чисельно",
    "translation": "outnumber",
    "transcription": ""
  },
  {
    "id": 279,
    "word": "міська або місцева рада",
    "translation": "council",
    "transcription": "/ˈkaʊnsəl"
  },
  {
    "id": 280,
    "word": "в межах, не далі ніж",
    "translation": "within",
    "transcription": ""
  },
  {
    "id": 281,
    "word": "більшість",
    "translation": "majority",
    "transcription": "/məˈdʒɒrəti/"
  },
  {
    "id": 282,
    "word": "заглибитися у що-небудь, бути поглиненим чимось",
    "translation": "immerse",
    "transcription": " /ɪˈmɜːs/"
  },
  {
    "id": 283,
    "word": "реєструватися (в аеропорту, готелі)",
    "translation": "check in",
    "transcription": ""
  },
  {
    "id": 284,
    "word": "задоволення, радість",
    "translation": "amusement",
    "transcription": ""
  },
  {
    "id": 285,
    "word": "колишній",
    "translation": "former",
    "transcription": "/ˈfɔːmər/"
  },
  {
    "id": 286,
    "word": "виконавчий, керівний працівник",
    "translation": "executive",
    "transcription": ""
  },
  {
    "id": 287,
    "word": "точний",
    "translation": "accurate",
    "transcription": "/ˈækjərət/"
  },
  {
    "id": 288,
    "word": "простий, зрозумілий",
    "translation": "uncomplicated",
    "transcription": "/ʌnˈkɒmplɪkeɪtɪd/"
  },
  {
    "id": 289,
    "word": "теле- або радіопередача",
    "translation": "broadcast",
    "transcription": "/ˈbrɔːdkɑːst/"
  },
  {
    "id": 290,
    "word": "двухмовний (що говорить добре на 2 мовах)",
    "translation": "be bilingual in",
    "transcription": "/bailingwal/"
  },
  {
    "id": 291,
    "word": "розважливо, розумно",
    "translation": "reasonably",
    "transcription": "/ ritzanabli/",
    "example": "Why can't we discuss this reasonably, like adults?"
  },
  {
    "id": 292,
    "word": "know just enough of a language for simple communication",
    "translation": "get by (in a language)",
    "transcription": ""
  },
  {
    "id": 293,
    "word": "not as good at a language as you used to be because you haven't used it for a long time",
    "translation": "rusty",
    "transcription": ""
  },
  {
    "id": 294,
    "word": "learn a language by practising it, rather than by learning it in a class",
    "translation": "pick up (a language)",
    "transcription": ""
  },
  {
    "id": 295,
    "word": "поселенець, іммігрант",
    "translation": "settler",
    "transcription": "/ˈsetlər/"
  },
  {
    "id": 296,
    "word": "незнайомець",
    "translation": "stranger",
    "transcription": "/ˈstreɪndʒər/"
  },
  {
    "id": 297,
    "word": "робити внесок, жертвувати (гроші)",
    "translation": "contribute",
    "transcription": "kənˈtrɪbjuːt"
  },
  {
    "id": 298,
    "word": "заходити, заїжджати в гості",
    "translation": "come round",
    "transcription": ""
  },
  {
    "id": 299,
    "word": "валятись в ліжку (довше ніж зазвичай)",
    "translation": "lie in",
    "transcription": ""
  },
  {
    "id": 300,
    "word": "хірург",
    "translation": "surgeon",
    "transcription": "/ˈsɜːdʒən/"
  },
  {
    "id": 301,
    "word": "нерішучість, сумнів",
    "translation": "hesitation",
    "transcription": "/ˌhezɪˈteɪʃən/"
  },
  {
    "id": 302,
    "word": "припущення",
    "translation": "assumption",
    "transcription": " /əˈsʌmʃən/"
  },
  {
    "id": 303,
    "word": "поводитися",
    "translation": "act",
    "transcription": "",
    "example": "Stop acting like a child!"
  },
  {
    "id": 304,
    "word": "двозначний",
    "translation": "ambiguous",
    "transcription": "/æmˈbɪɡjuəs/",
    "example": "an ambiguous statement"
  },
  {
    "id": 305,
    "word": "банкнота",
    "translation": "note",
    "transcription": "",
    "example": ""
  },
  {
    "id": 306,
    "word": "багато разів",
    "translation": "loads of times",
    "transcription": "",
    "example": ""
  },
  {
    "id": 307,
    "word": "чути",
    "translation": "Hear",
    "transcription": "",
    "example": ""
  },
  {
    "id": 308,
    "word": "продавець",
    "translation": "salesman",
    "transcription": "/ˈseɪlzmən/",
    "example": ""
  },
  {
    "id": 309,
    "word": "брюки",
    "translation": "Trouser",
    "transcription": "|ˈtraʊzər|",
    "example": ""
  },
  {
    "id": 310,
    "word": "не мати грошей",
    "translation": "broke",
    "transcription": "",
    "example": "I can't afford it - I'm broke."
  },
  {
    "id": 311,
    "word": "грати в азартні ігри",
    "translation": "gamble",
    "transcription": "/ˈɡæmbl/",
    "example": ""
  },
  {
    "id": 312,
    "word": "надійшов в продаж",
    "translation": "went on sale",
    "transcription": "",
    "example": ""
  },
  {
    "id": 313,
    "word": "спад, падіння, зниження",
    "translation": "Recession",
    "transcription": "|rɪˈseʃn|",
    "example": ""
  },
  {
    "id": 314,
    "word": "соромитися",
    "translation": "ashamed",
    "transcription": "/əˈʃeɪmd/",
    "example": ""
  },
  {
    "id": 315,
    "word": "be ashamed ... sb",
    "translation": "be ashamed of sb",
    "transcription": "",
    "example": "He was so rude to Phil - I was ashamed of him."
  },
  {
    "id": 316,
    "word": "поспішати",
    "translation": "hurry",
    "transcription": "/ˈhɝː.i/",
    "example": ""
  },
  {
    "id": 317,
    "word": "ганьба",
    "translation": "shame",
    "transcription": "",
    "example": ""
  },
  {
    "id": 318,
    "word": "is somebody who write a book for another people",
    "translation": "ghost writer",
    "transcription": "",
    "example": ""
  },
  {
    "id": 319,
    "word": "повні кармани",
    "translation": "a Pocketful",
    "transcription": "",
    "example": ""
  },
  {
    "id": 320,
    "word": "дірка",
    "translation": "hole",
    "transcription": "",
    "example": ""
  },
  {
    "id": 321,
    "word": "кого, кому, ким, про кого",
    "translation": "Whom",
    "transcription": "|huːm|",
    "example": ""
  },
  {
    "id": 322,
    "word": "лопатися, прориватися",
    "translation": "Burst",
    "transcription": "|bɜːrst|",
    "example": ""
  },
  {
    "id": 323,
    "word": "сльоза",
    "translation": "Tear",
    "transcription": "|ter|",
    "example": ""
  },
  {
    "id": 324,
    "word": "to find yourself in a place or situation at the end of a process or period of time",
    "translation": "end up",
    "transcription": "",
    "example": ""
  },
  {
    "id": 325,
    "word": "період часу в 2 тижні",
    "translation": "fortnight",
    "transcription": "/ˈfɔːrt.naɪt/",
    "example": ""
  },
  {
    "id": 326,
    "word": "ремонтувати",
    "translation": "repair",
    "transcription": "/rɪˈper",
    "example": ""
  },
  {
    "id": 327,
    "word": "робити щось безкарно, виходити сухим із води",
    "translation": "get away with sth",
    "transcription": "",
    "example": "He shouldn't treat you like that. Don't let him get away with it."
  },
  {
    "id": 328,
    "word": "to do or use less of something:",
    "translation": "cut down",
    "transcription": "",
    "example": "I'm trying to cut down on caffeine."
  },
  {
    "id": 329,
    "word": "відмовитись зовсім від чогось",
    "translation": "cut out",
    "transcription": "",
    "example": ""
  },
  {
    "id": 330,
    "word": "креветка",
    "translation": "prawn",
    "transcription": "/prɑːn",
    "example": ""
  },
  {
    "id": 331,
    "word": "мідія",
    "translation": "mussel",
    "transcription": "/ˈmʌs.əl/",
    "example": ""
  },
  {
    "id": 332,
    "word": "кальмар",
    "translation": "squid",
    "transcription": "/skwɪd/",
    "example": ""
  },
  {
    "id": 333,
    "word": "ягня",
    "translation": "lamb",
    "transcription": "/læm/",
    "example": ""
  },
  {
    "id": 334,
    "word": "тіло, м'ясо",
    "translation": "flesh",
    "transcription": "/fleʃ/",
    "example": ""
  },
  {
    "id": 335,
    "word": "in real life and not on television or in a film",
    "translation": "in the flesh",
    "transcription": "",
    "example": "She looks much taller in the flesh."
  },
  {
    "id": 336,
    "word": "яловичина",
    "translation": "beef",
    "transcription": "",
    "example": ""
  },
  {
    "id": 337,
    "word": "груша",
    "translation": "pear",
    "transcription": "/per/",
    "example": ""
  },
  {
    "id": 338,
    "word": "персик",
    "translation": "peach",
    "transcription": "",
    "example": ""
  },
  {
    "id": 339,
    "word": "малина",
    "translation": "raspberry",
    "transcription": "/ˈræz.ber.i/",
    "example": ""
  },
  {
    "id": 340,
    "word": "капуста",
    "translation": "cabbage",
    "transcription": "",
    "example": ""
  },
  {
    "id": 341,
    "word": "смажений",
    "translation": "fried",
    "transcription": "/fraɪd/",
    "example": "a fried egg"
  },
  {
    "id": 342,
    "word": "пекти",
    "translation": "bake",
    "transcription": "/beɪk/",
    "example": ""
  },
  {
    "id": 343,
    "word": "жарити, пекти",
    "translation": "roast",
    "transcription": "/roʊst/",
    "example": ""
  },
  {
    "id": 344,
    "word": "нече́сний",
    "translation": "dishonest",
    "transcription": "/dɪˈsɑː.nɪst/",
    "example": ""
  },
  {
    "id": 345,
    "word": "скупий",
    "translation": "mean",
    "transcription": "/miːn/",
    "example": ""
  },
  {
    "id": 346,
    "word": "егоїстичний",
    "translation": "selfish",
    "transcription": "",
    "example": ""
  },
  {
    "id": 347,
    "word": "showing a wish to help or bring advantages to others, even if it results in disadvantage for yourself:",
    "translation": "altruistic",
    "transcription": "/ˌæl.truˈɪs.tɪk/",
    "example": ""
  },
  {
    "id": 348,
    "word": "дуже брудний",
    "translation": "filthy",
    "transcription": "/ˈfɪl.θi/",
    "example": ""
  },
  {
    "id": 349,
    "word": "дуже злий",
    "translation": "furious",
    "transcription": "/ˈfjʊə.ri.əs/",
    "example": ""
  },
  {
    "id": 350,
    "word": "передбачення, прогноз",
    "translation": "prediction",
    "transcription": "/prɪˈdɪk.ʃən/",
    "example": ""
  },
  {
    "id": 351,
    "word": "заява",
    "translation": "statement",
    "transcription": "",
    "example": ""
  },
  {
    "id": 352,
    "word": "виражати",
    "translation": "express",
    "transcription": "/ɪkˈspres/",
    "example": ""
  },
  {
    "id": 353,
    "word": "дані, докази",
    "translation": "evidence",
    "transcription": "/ˈev.ɪ.dəns/",
    "example": ""
  },
  {
    "id": 354,
    "word": "впевнений, переконаний",
    "translation": "certain",
    "transcription": "",
    "example": "Are you absolutely certain (that) you gave them the right number?"
  },
  {
    "id": 355,
    "word": "сумнів",
    "translation": "doubt",
    "transcription": "/daʊt/",
    "example": "I'm having doubts about his ability to do the job"
  },
  {
    "id": 356,
    "word": "безсумнівно",
    "translation": "definitely",
    "transcription": "",
    "example": "Are you going to have children? Oh, definitely (= without any doubt)."
  },
  {
    "id": 357,
    "word": "ймовірно",
    "translation": "probably",
    "transcription": "",
    "example": "I'll probably be home by midnight."
  },
  {
    "id": 358,
    "word": "може бути, можливо (ймовірно)",
    "translation": "perhaps",
    "transcription": "/pəˈhæps/",
    "example": "He hasn't written to me recently - perhaps he's lost my address."
  },
  {
    "id": 359,
    "word": "намір",
    "translation": "intention",
    "transcription": "",
    "example": "It wasn't my intention to exclude her from the list - I just forgot her"
  },
  {
    "id": 360,
    "word": "домовленість",
    "translation": "arrangement",
    "transcription": "/əˈreɪndʒ.mənt/",
    "example": "They'd made all the arrangements for the party."
  },
  {
    "id": 361,
    "word": "підкристлити",
    "translation": "emphasize",
    "transcription": "/ˈem.fə.saɪz/",
    "example": "You can use italics or capitals to emphasize a word in a piece of writing."
  },
  {
    "id": 362,
    "word": "миттєвий, негайний",
    "translation": "instant",
    "transcription": "",
    "example": ""
  },
  {
    "id": 363,
    "word": "закуска",
    "translation": "starter",
    "transcription": "",
    "example": ""
  },
  {
    "id": 364,
    "word": "їжа на виніс",
    "translation": "takeaway",
    "transcription": "",
    "example": "We were too tired to cook so we ordered takeaway."
  },
  {
    "id": 365,
    "word": "приносити",
    "translation": "bring",
    "transcription": "",
    "example": ""
  },
  {
    "id": 366,
    "word": "рідко, незвично",
    "translation": "Unusual",
    "transcription": "",
    "example": ""
  },
  {
    "id": 367,
    "word": "повернення коштів",
    "translation": "to refund",
    "transcription": "",
    "example": ""
  },
  {
    "id": 368,
    "word": "купувати",
    "translation": "purchase",
    "transcription": "/ˈpɜː.tʃəs/",
    "example": ""
  },
  {
    "id": 369,
    "word": "асортимент",
    "translation": "stock",
    "transcription": "",
    "example": ""
  },
  {
    "id": 370,
    "word": "розміщати замовлення",
    "translation": "place an order",
    "transcription": "",
    "example": ""
  },
  {
    "id": 371,
    "word": "опрацьовувати замовлення клієнта",
    "translation": "process the customer's order",
    "transcription": "",
    "example": ""
  },
  {
    "id": 372,
    "word": "відстежувати їх вантаж",
    "translation": "track their shipment",
    "transcription": "",
    "example": ""
  },
  {
    "id": 373,
    "word": "навести справки",
    "translation": "make an enquiry",
    "transcription": "",
    "example": ""
  },
  {
    "id": 374,
    "word": "запит",
    "translation": "inquiry",
    "transcription": "/ɪnˈkwaɪə.ri/",
    "example": "I've been making inquiries about/into the cost of a round-the-world ticket."
  },
  {
    "id": 375,
    "word": "постачальник",
    "translation": "supplier",
    "transcription": "",
    "example": ""
  },
  {
    "id": 376,
    "word": "декретна відпустка",
    "translation": "maternity leave",
    "transcription": "/məˈtɜː.nə.ti ˌliːv/",
    "example": ""
  },
  {
    "id": 377,
    "word": "дозволяти",
    "translation": "allow",
    "transcription": "/əˈlaʊ/",
    "example": ""
  },
  {
    "id": 378,
    "word": "не допускати",
    "translation": "prevent",
    "transcription": "",
    "example": ""
  },
  {
    "id": 379,
    "word": "субсидіювати",
    "translation": "subsidized",
    "transcription": "/ˈsʌbsɪdaɪzd/",
    "example": ""
  },
  {
    "id": 380,
    "word": "нагляд за дітьми, коли батьки на роботі",
    "translation": "childcare",
    "transcription": "",
    "example": ""
  },
  {
    "id": 381,
    "word": "чарівний (милий)",
    "translation": "adorable",
    "transcription": "",
    "example": ""
  },
  {
    "id": 382,
    "word": "офіціант",
    "translation": "waiter",
    "transcription": "",
    "example": ""
  },
  {
    "id": 383,
    "word": "в будь-якому випадку",
    "translation": "anyway",
    "transcription": "",
    "example": ""
  },
  {
    "id": 384,
    "word": "добрий, люб'язний",
    "translation": "kind",
    "transcription": "",
    "example": ""
  },
  {
    "id": 385,
    "word": "божественний",
    "translation": "divine",
    "transcription": "/dɪˈvaɪn/",
    "example": ""
  },
  {
    "id": 386,
    "word": "витончено",
    "translation": "exquisite",
    "transcription": "/ɪkˈskwɪz.ɪt/",
    "example": ""
  },
  {
    "id": 387,
    "word": "привілей",
    "translation": "privilege",
    "transcription": "/ˈprɪv.əl.ɪdʒ/",
    "example": ""
  },
  {
    "id": 388,
    "word": "дивний, незрозумілий",
    "translation": "weird",
    "transcription": "/wɪrd/",
    "example": "I had a really weird dream last night."
  },
  {
    "id": 389,
    "word": "запіканка",
    "translation": "casserole",
    "transcription": "/ˈkæs.ə.roʊl/",
    "example": ""
  },
  {
    "id": 390,
    "word": "someone who tries to make someone more important like them by being very polite and helpful in a way that is not sincere:",
    "translation": "creep",
    "transcription": "",
    "example": "Making coffee for the boss again? You creep!"
  },
  {
    "id": 391,
    "word": "дуже цікавий",
    "translation": "fascinating",
    "transcription": "/ˈfæs.ən.eɪ.tɪŋ/",
    "example": ""
  },
  {
    "id": 392,
    "word": "підходящий",
    "translation": "appropriate",
    "transcription": "",
    "example": "Is this film appropriate for small children?"
  },
  {
    "id": 393,
    "word": "наявність",
    "translation": "availability",
    "transcription": "",
    "example": ""
  },
  {
    "id": 394,
    "word": "мало часу",
    "translation": "short of time",
    "transcription": "",
    "example": ""
  },
  {
    "id": 395,
    "word": "розібратись, справитись",
    "translation": "deal with",
    "transcription": "",
    "example": ""
  },
  {
    "id": 396,
    "word": "залиш це мені",
    "translation": "Leave it with me",
    "transcription": "",
    "example": ""
  },
  {
    "id": 397,
    "word": "час йде, час закінчується",
    "translation": "Time's running out",
    "transcription": "",
    "example": ""
  },
  {
    "id": 398,
    "word": "тиск",
    "translation": "pressure",
    "transcription": "/ˈpreʃ.ɚ/",
    "example": ""
  },
  {
    "id": 399,
    "word": "виставка",
    "translation": "exhibition",
    "transcription": "/ˌek.səˈbɪʃ.ən/",
    "example": ""
  },
  {
    "id": 400,
    "word": "особливий",
    "translation": "particular",
    "transcription": "",
    "example": ""
  },
  {
    "id": 401,
    "word": "обов'язок, борг",
    "translation": "obligation",
    "transcription": "",
    "example": ""
  },
  {
    "id": 402,
    "word": "зобов'язати",
    "translation": "oblige",
    "transcription": "",
    "example": ""
  },
  {
    "id": 403,
    "word": "хворобливий, запалений",
    "translation": "sore",
    "transcription": "",
    "example": ""
  },
  {
    "id": 404,
    "word": "вимагати, вимога",
    "translation": "demand",
    "transcription": "/dɪˈmænd/",
    "example": ""
  },
  {
    "id": 405,
    "word": "переконливо",
    "translation": "forcefully",
    "transcription": "/ˈfɔːrs.fəl.i/",
    "example": ""
  },
  {
    "id": 406,
    "word": "бути зобов'язаним зробити щось",
    "translation": "be supposed to",
    "transcription": "",
    "example": "The children are supposed to be at school by 8:00 a.m."
  }
];

export default data;
