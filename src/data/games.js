export const games = [
  {
    id: 'tsuchinoko',
    number: '01',
    title: 'ツチノコ見つけた',
    subtitle: 'オンラインボードゲーム / 開発中',
    summary:
      'ツチノコとハンターに分かれて遊ぶ、12×12マスのターン制ボードゲーム。探索する側と逃げながらアイテムを集める側で、まったく異なる戦略を楽しめます。',
    features: ['3人チームで開発', 'オンライン対戦・CPU対戦', '強化学習を用いたハンターAI'],
    contribution: 'インゲームシステムを担当。試行を重ねながらルールとゲームバランスを改善しました。',
    tools: ['Unity', 'C#', 'Reinforcement Learning'],
    images: [
      { src: '/images/games/tsuchinoko-play-1.webp', alt: 'ツチノコ側のゲーム画面' },
      { src: '/images/games/tsuchinoko-play-2.webp', alt: 'ハンター側の探索画面' },
      { src: '/images/games/tsuchinoko-result.webp', alt: 'ゲーム終了画面' },
    ],
  },
  {
    id: 'link-slider',
    number: '02',
    title: 'リンクスライダー',
    subtitle: '対戦型パズルゲーム',
    summary:
      '2人のプレイヤーがスライダーを乗り継ぎ、中央のマスへの到達を競う対戦パズル。原作への愛着を出発点に、戦術の幅を広げる独自ルールを加えました。',
    features: ['4段階のCPU難易度', 'ローカル・オンライン対戦', 'MiniMax法によるCPU思考'],
    contribution:
      '個人開発。得点マスを追加して消極的な行動が最善になる状況を改善し、画面遷移やマッチング演出まで一貫して制作しました。',
    tools: ['Unity', 'C#', 'MiniMax'],
    playUrl: 'https://unityroom.com/games/link_slider',
    images: [
      { src: '/images/games/link-slider-game.webp', alt: 'CPU対戦中のゲーム画面' },
    ],
  },
  {
    id: 'dice-mahjong',
    number: '03',
    title: 'サイコロ麻雀',
    subtitle: '1人用ミニゲーム',
    summary:
      '14個のサイコロを振って麻雀のような役を作る、短時間で遊べるゲーム。ボタンを押すだけのシンプルな操作で、偶然から生まれる組み合わせを楽しめます。',
    features: ['サイコロの出目から役を判定', '達成した役を一覧で記録', '100万回のシミュレーションでレア度を設定'],
    contribution: '企画から実装まで個人で制作。遊びやすさと、結果を集めたくなる継続性を意識しました。',
    tools: ['Unity', 'C#', 'Simulation'],
    playUrl: 'https://unityroom.com/games/dice_mahjong',
    images: [
      { src: '/images/games/dice-mahjong-game.webp', alt: 'サイコロを振ったゲーム画面' },
      { src: '/images/games/dice-mahjong-result.webp', alt: '達成した役の一覧画面' },
    ],
  },
  {
    id: 'fill-in-one-more',
    number: '04',
    title: 'あとひとつ',
    subtitle: 'ドラッグ＆ドロップ謎解き',
    summary:
      '画面にある文字や絵を動かして、「あとひとつ」足りないものを埋める約10分の謎解きゲーム。要素を組み合わせると、新しいものが生まれることもあります。',
    features: ['マウスだけで操作', '文字や絵を組み合わせる謎解き', 'ヒント・ランキング機能'],
    contribution: 'Unity1週間ゲームジャムのお題「もうひとつ」に合わせ、画面上の要素そのものを操作する発想を中心に制作しました。',
    tools: ['Unity', 'C#', 'Puzzle'],
    playUrl: 'https://unityroom.com/games/fillinonemore',
    images: [
      { src: '/images/games/fill-in-one-more.webp', alt: '「あとひとつ」のゲームアイコン' },
    ],
  },
]
