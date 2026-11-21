---
name: 你的名字的小房間
description: 一間親手佈置的等角小房間：作品是房裡的物件，旁邊一欄是日記。
colors:
  porcelain: "#fffaf1"
  oat: "#fbf3e6"
  oat-flour: "#efe2cc"
  line: "#e0cfb4"
  sage: "#a9c4b1"
  moss: "#dce8df"
  sage-deep: "#4f6e59"
  blush: "#f5c9cf"
  blush-soft: "#fbe5e7"
  blush-deep: "#94434f"
  rain: "#b7c7d6"
  rain-soft: "#e3eaf1"
  rain-deep: "#4d6680"
  acorn: "#8b6f4e"
  room-stroke: "#7a5f43"
  ink: "#45362a"
  ink-soft: "#6b5746"
  ink-faint: "#75604e"
typography:
  display:
    fontFamily: "'Noto Serif TC', 'Songti TC', serif"
    fontSize: "clamp(2.75rem, 1.6rem + 3.2vw, 4.75rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "0.02em"
  headline:
    fontFamily: "'Noto Serif TC', 'Songti TC', serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.2vw, 2.5rem)"
    fontWeight: 900
    lineHeight: 1.2
  title:
    fontFamily: "'Noto Serif TC', 'Songti TC', serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "'Huninn', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "'Huninn', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  s: "10px"
  tag: "12px"
  m: "16px"
  l: "24px"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  "9": "7rem"
components:
  nav-pill:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.45em 1em"
  nav-pill-current:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.sage-deep}"
    rounded: "{rounded.pill}"
  panel:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: "{rounded.l}"
    padding: "1rem 1.5rem 1.5rem"
  panel-diary:
    backgroundColor: "{colors.blush-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.l}"
  room-tag:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "0.35rem 0.8rem 0.4rem"
  tech-chip:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.sage-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.4em 0.7em"
  sample-badge:
    backgroundColor: "{colors.blush-soft}"
    textColor: "{colors.blush-deep}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.6em"
  diary-entry:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: "{rounded.m}"
    padding: "1rem 1.5rem"
---

# Design System: 你的名字的小房間

## Overview

**Creative North Star: "親手佈置的小房間"**

整個網站是站主自己佈置的一間小房間。首頁中央是一間用程式畫出來的等角（isometric）房間：燕麥色地板、細花壁紙、菱格地磚，家具都是圓角的貼紙感方塊，帶一圈柔和的深褐描邊。作品不放在卡片網格裡，而是房間裡的物件（海報、電腦桌、相機、書架、筆記本、電視遊樂器），每件物件上方掛著永遠看得見的名牌。日記放在旁邊的粉色小面板裡。

氣氛溫暖、安靜、手作。底色是燕麥與瓷白的紙，四個房間色（鼠尾草綠、腮紅粉、雨雲藍、橡實褐）都是低彩度的粉彩；文字用暖深褐而不是黑。大字是厚重的粗襯線（Noto Serif TC 900），內文與介面用圓潤的粉圓體（Huninn），兩者的對比就是這個世界的聲音：一個人的名字很重，日常的話很軟。

密度寬鬆。版面元素是圓角小面板、膠囊形按鈕和點狀虛線分隔，深度只靠柔和的暖色陰影與物件浮起，沒有硬邊投影、沒有玻璃質感。

**Key Characteristics:**
- 程式繪製的等角房間是首頁主角，作品＝房間物件，每件都有常駐名牌
- 燕麥／瓷白紙底，帶 22px 間距的淡褐點陣底紋
- 四個粉彩房間色，各有一個淺色（soft）與一個深色（deep）用於文字
- 粗襯線大字 ＋ 圓潤黑體內文
- 點狀虛線取代實線分隔
- 圓角一切：面板 24px、名牌 12px、按鈕與標籤全膠囊

## Colors

燕麥紙底上的四個低彩度房間色，每個顏色都分成「填色」「淺底」「深色文字」三種用法；文字一律是暖深褐。

### Primary
- **鼠尾草綠 Sage**：主要互動色。連結底線、導覽懸停外框、捲軸、房間壁紙的小草。
- **苔蘚淺綠 Moss**：目前頁面的導覽膠囊與技術標籤的底色。
- **深鼠尾草 Sage Deep**：Moss 上的文字、鍵盤焦點外框（3px）、首頁提示文字、名牌被選中時的外框。

### Secondary
- **腮紅粉 Blush**：日記的顏色。日記面板外框與虛線、選取文字底色、房間裡的沙發與小物。
- **淺腮紅 Blush Soft**：日記面板與日記內頁標頭的底色；「範例」標記的底色。
- **深莓 Blush Deep**：日記面板標題、「全部日記」連結、「範例」標記文字、輸入游標。

### Tertiary
- **雨雲藍 Rain**：只出現在房間插畫中（海報色塊、相機鏡頭、筆記本線條、遊戲機）。
- **淺雨藍 Rain Soft**：地磚的淺格、窗玻璃、陰天心情圖示的底。
- **深雨藍 Rain Deep**：房間裡的電腦／電視螢幕、心情圖示的線條。
- **橡實褐 Acorn**：木頭與年份。作品清單的年份數字、清單的點狀分隔、房間名牌外框、晴天圖示。
- **房間描邊褐 Room Stroke**：房間插畫裡所有物件的統一描邊色（1.4px，圓角接合）。只用在 SVG 插畫，不用在介面。

### Neutral
- **瓷白 Porcelain**：面板、名牌、導覽膠囊的底；房間裡的地毯、奶油色家具頂面。
- **燕麥 Oat**：頁面底色，也是 theme-color。
- **燕麥粉 Oat Flour**：房間裡的海報色塊與書本，較深的紙色。
- **紙線 Line**：所有 1.5px 面板外框、預設的點狀虛線、地磚縫。
- **墨褐 Ink**：主要文字與標題。
- **淡墨 Ink Soft**：次要文字（介紹、摘要、導覽文字）。
- **更淡墨 Ink Faint**：日期、頁尾、計數等最弱的資訊。

### Named Rules
**The Four Room Colors Rule.** 介面只有四個色系：Sage、Blush、Rain、Acorn。每個色系的「深色」只拿來當文字或外框，「淺色」只拿來當底。新增顏色前先試著用這四個。

**The Diary Is Pink Rule.** 腮紅粉屬於日記。日記面板、日記內頁（`tone="blush"`）、「全部日記」都是粉的；作品相關的介面（技術標籤、導覽目前頁）是綠的。

**The Warm Ink Rule.** 文字不用黑色也不用灰色，一律從 Ink、Ink Soft、Ink Faint 三階暖褐中選。

## Typography

**Display Font:** Noto Serif TC 700／900（後備 Songti TC, serif）
**Body Font:** Huninn 400（後備 PingFang TC, Microsoft JhengHei, sans-serif）

**Character:** 厚重溫暖的宋體大字配上圓潤可愛的粉圓體；名字與標題有分量，日常文字很輕鬆。兩支字都自架（@fontsource）。

### Hierarchy
- **Display**（900，clamp(2.75rem → 4.75rem)，行高 1.05，字距 0.02em）：首頁的名字，全站只有這一處。
- **Headline**（900，clamp(1.75rem → 2.5rem)，行高 1.2）：區塊標題（作品清單、關於我）。內頁 h1 用 clamp(2rem → 3.25rem)，日記列表頁 h1 用 clamp(2.25rem → 3.5rem)。
- **Title**（700，1.0625–1.375rem）：作品名、日記標題、房間名牌、心情字（900，1.5rem）、站名（700，1.125rem）。
- **Body**（400，1.0625rem，行高 1.75）：內文。文章內文放大到 1.125rem、行高 1.9；介紹與關於我限寬 26–40em。
- **Label**（400，0.8125–0.9375rem）：導覽、技術標籤、日期、面板標題、提示。日期一律 `tabular-nums`。

### Named Rules
**The Serif For Names Rule.** 有「名字」性質的文字（站主名字、作品名、日記標題、名牌、年份）用 Noto Serif TC；其他所有文字，包括面板標題，都用 Huninn 400。

**The No Bold Body Rule.** Huninn 只載入 400，不做假粗體；要強調就換成襯線字或換顏色。

## Layout

內容寬度 `min(100% - 2rem, 1320px)` 置中。首頁第一屏是兩欄格線（約 2.1fr : 1fr，右欄最小 18rem）：左上是名字與介紹，左下是房間（最寬 780px），右欄是心情卡與日記面板。1180px 以下介紹改成橫跨兩欄；820px 以下變成單欄，順序是介紹 → 房間 → 日記欄。作品清單在下方，桌機是四欄列（年份 5rem／名稱與摘要／技術標籤 14rem／連結 9rem），窄螢幕收成兩欄。內頁（作品、日記）是 46rem 的單欄閱讀寬度。

間距用 `--space-1` 到 `--space-9` 的 9 階（0.25rem → 7rem）；區塊之間用 4.5rem–7rem，面板內用 1–1.5rem。頁面底色帶 22px 點陣底紋。560px 以下頂部列直排、導覽膠囊縮小。

## Elevation & Depth

扁平紙面加上非常柔和的暖色陰影。陰影的顏色是暖褐（rgb(92 66 40)），而且向下偏移、負擴散，看起來像紙片輕輕浮在桌上。深度的主要來源其實是房間插畫本身的等角三面配色（頂面最亮、右面中間、左面最暗）。

### Shadow Vocabulary
- **Soft**（`0 6px 18px -8px rgb(92 66 40 / 0.28)`）：面板、文章標頭、房間名牌，靜止狀態。
- **Object Float**（`drop-shadow(0 10px 8px rgb(92 66 40 / .28))` ＋ 上移 7px）：房間物件被懸停或聚焦時。

### Named Rules
**The Paper On A Desk Rule.** 陰影只用暖褐、只向下、只柔和。沒有硬邊偏移投影、沒有冷灰陰影、沒有模糊玻璃。

**The Room Lifts, Others Fade Rule.** 停在一件作品上時，那件物件浮起 7px、名牌展開技術與年份，其他物件淡到 0.5、其他名牌淡到 0.55。減少動態設定時只保留透明度與外框的變化，不位移。

## Shapes

圓角是這個世界的基本形狀。面板 24px（`--radius-l`）、日記條目與文章圖片 16px（`--radius-m`）、名牌 12px、跳到主要內容 10px（`--radius-s`）；導覽、技術標籤、「範例」標記全部是膠囊（999px）。外框統一 1.5px 的 Line 色，名牌用 1.5px Acorn 並帶一個 45° 旋轉方塊做成的小尾巴指向物件。

分隔線不用實線，而是用 radial-gradient 做的點狀虛線（8px 一點，Line 或 Blush 色；作品清單用 9px 一點的 Acorn 色）。房間插畫裡的方塊是每個面各自圓角的多邊形，盆栽是圓柱，全部 1.4px 深褐描邊。

## Components

### Navigation
輕巧的膠囊列。
- **Style：** 瓷白底、1.5px Line 外框、膠囊圓角、Ink Soft 文字 0.9375rem，左側 18px 線條圖示。
- **Hover：** 外框轉 Sage、文字轉 Ink（0.2s ease-out）。
- **Current：** Moss 底、Sage 外框、Sage Deep 文字。
- **Mobile：** 560px 以下站名與導覽直排，內距縮為 0.4em 0.85em。

### Chips
- **Tech chip：** Moss 底、Sage Deep 文字、0.8125rem、膠囊，無外框。作品清單與作品內頁共用。
- **Sample badge（範例）：** Blush Soft 底、1px Blush 外框、Blush Deep 文字、0.75rem 膠囊。只用來標示佔位內容，站主換成真內容後就會消失。

### Cards / Containers
- **Corner Style：** 24px。
- **Background：** 預設瓷白；日記相關用 Blush Soft 配 Blush 外框。
- **Shadow Strategy：** Soft。
- **Border：** 1.5px Line。
- **Internal Padding：** 1rem 1.5rem 1.5rem（首頁面板），2rem（文章標頭）。
- **Panel head：** Huninn 400、0.9375rem、Ink Soft（日記面板為 Blush Deep），下方一條點狀虛線，可帶 18px 圖示。

### Diary entries
- 首頁面板內：無外框，懸停時出現半透明瓷白底（16px 圓角），條目之間用 Blush 點狀虛線。
- 日記列表頁：瓷白底、1.5px Line 外框、16px 圓角；懸停時外框轉 Blush 並上移 2px。日期欄 6.5rem、tabular-nums。

### Icons
自繪的 24px 線條圖示，線寬 1.75、圓端點、圓接合，顏色跟隨文字（currentColor）。常用尺寸 15–18px，心情圖示 40px 放在 3.75rem 的圓形淺色底上。

### Room（Signature Component）
用程式產生的等角 SVG 房間（viewBox 660×670）。地板與兩面牆、細花壁紙圖樣、菱格地磚、橢圓地毯（內圈 Blush 虛線）。家具是三面配色的圓角方塊：木頭（#ecd3ae／#d9b688／#c49c6c）、奶油（#fffaf1／#efe5d4／#e2d4bd）、腮紅（#f9d9dd／#f0bcc3／#e2a4ad）、陶盆（#efc0ae／#e0a58f／#cc8d78），全部 1.4px Room Stroke 描邊。六個物件槽：poster、computer、camera、bookshelf、notebook、console；有作品的槽才變成連結並掛名牌，其餘只是擺設。載入時物件依序從上方 16px 落定（0.9s，間隔 0.09s）。

### Room tag（名牌）
- **Style：** 94% 不透明瓷白底、1.5px Acorn 外框、12px 圓角、Soft 陰影，下方小尾巴；名稱用 Noto Serif TC 700，clamp(0.8125rem → 1rem)。
- **Hover / Focus：** 外框轉 Sage Deep、底轉實心瓷白，展開第二行（技術 · 年份，0.8125rem Ink Soft），用 grid-template-rows 0fr → 1fr 展開。
- **Touch：** `hover: none` 時不顯示第二行。名牌才是鍵盤焦點所在，物件本身不可 Tab。

## Do's and Don'ts

### Do:
- **Do** 把新作品放進房間的物件槽，並同時列在下方的純文字作品清單；超過六件只進清單。
- **Do** 用點狀虛線（radial-gradient，8px 間距）分隔，而不是實線。
- **Do** 外框一律 1.5px，面板 24px 圓角，按鈕與標籤用膠囊。
- **Do** 日記相關介面用腮紅粉系，作品相關介面用鼠尾草綠系。
- **Do** 新增房間物件時沿用三面配色方塊與 1.4px `#7a5f43` 描邊。
- **Do** 所有動態使用 `--ease-out`（cubic-bezier(0.16, 1, 0.3, 1)），並在 prefers-reduced-motion 下取消位移。
- **Do** 佔位內容一律掛上「範例」標記。

### Don't:
- **Don't** 把作品排成卡片網格放在首頁第一屏；作品是房間裡的物件。
- **Don't** 用純黑、冷灰或高彩度的顏色；文字只用三階暖褐。
- **Don't** 用硬邊偏移陰影或冷色陰影。
- **Don't** 用圖示字型或 emoji 當圖示；圖示是自繪的 1.75 線寬 SVG。
- **Don't** 放上沒有真實資料來源的訪客數、積分或留言板；迷你小窩式的計數器只有在真的接上資料後才能出現（目前是靜態網站）。
