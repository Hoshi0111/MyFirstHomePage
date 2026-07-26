# My Home Page

Vite、React、JavaScript、CSSで作成した1ページ構成の個人ポートフォリオです。

## ローカルで起動する

```bash
npm install
npm run dev
```

## コマンド

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run lint` | JavaScriptとJSXを検査 |
| `npm run build` | 公開用ファイルを`dist`へ生成 |
| `npm run preview` | 生成したサイトをローカル確認 |
| `npm run deploy` | ビルド後、Cloudflare Pagesへ手動公開 |

## Cloudflare Pagesで自動公開する

1. Cloudflareダッシュボードの「Workers & Pages」を開きます。
2. Pagesアプリケーションを作成し、GitHubのリポジトリを接続します。
3. 本番ブランチに`main`を指定します。
4. フレームワークプリセットで`React (Vite)`を選択します。
5. ビルドコマンドに`npm run build`、出力ディレクトリに`dist`を指定します。
6. デプロイ後、発行された`pages.dev` URLへアクセスします。

以後は`main`ブランチへのpushで自動的に再公開されます。

## Wranglerで手動公開する

Git連携済みの`my-home-page`プロジェクトへ、ローカルから同じ成果物を公開できます。

```bash
npx wrangler login
npm run deploy
```

Cloudflare側のプロジェクト名が異なる場合は、`package.json`の`deploy`スクリプトにある`--project-name`を変更してください。
