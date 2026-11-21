---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# 首頁 surface brief

## Scope and mode
首頁（src/pages/index.astro）。Mode: Experience。程式碼優先（code-led），沒有 comp；使用者選定的草圖 `.impeccable/decision/sketch4-room.html` 是構圖依據，`.impeccable/reference/minihompy-hero.webp` 與 `minihompy-board.webp` 是完成度標準。

## Audience, job, action
- 審閱者（求職／升學）：幾秒內找到作品並點進作品頁。這是首要行動。
- 朋友與想認識站主的人：讀日記。
- 首頁內容：名字（佔位）、一句自我介紹、今日心情（站主自填）、房間裡的作品物件、最新日記欄、往下捲動有完整作品清單與「全部日記」入口。
- 不放：訪客人數、積分、留言板（不可捏造數字，靜態網站沒有後端）。聯絡方式之後再加，頁尾預留位置。

## Direction contract
THESIS: 首頁是站主親手佈置的一間小房間，作品是房裡的物件，旁邊一欄是日記。拒絕「名字＋介紹＋作品卡片網格」的作品集預設版面。
OWN-WORLD: 燕麥／瓷白紙底，鼠尾草綠、腮紅粉、雨雲藍、橡實褐四色；等角房間由 SVG 畫成，牆紙細花、菱格地磚、貼紙感家具帶柔和深褐描邊；圓角小面板帶虛線分隔；圓潤黑體與溫暖的粗襯線大字。
STORY: 訪客先認出「這是一個人的房間」，看到每樣物件旁直接寫著作品名稱，點物件進作品頁；右欄讀到最近的日記，知道這個人平常在想什麼。往下有純文字作品清單給趕時間的審閱者。
FIRST VIEWPORT: 左上名字（大號襯線）與一句介紹；中央偏左佔約六成寬的等角房間，三到六件物件各帶永遠可見的名牌；右欄約三成寬：今日心情小卡在上，下方最新三篇日記卡與「全部日記」連結。主要行動＝房間物件本身（連結）。
FORM: 挑戰者世界 cyworld-minihompy-room（第三手的競爭挑戰者，不在我的接地清單上）；seed:03864ba5d1f31266
SIGNATURE: 滑鼠或鍵盤焦點停在物件上時，物件浮起、名牌展開成小卡（作品名、技術、年份），其餘物件淡去；減少動態設定時只換外框與透明度。
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## States and ranges
- 作品 0–6 件放進房間固定的物件槽（每件 frontmatter 的 `roomObject` 從預畫物件中選）；超過 6 件只列在下方清單。目前全部是標示「佔位」的範例。
- 日記 0 篇：右欄顯示空狀態文字；多篇：只顯示最新三篇。
- 手機：房間全寬、名牌常駐，日記欄移到房間下方。
