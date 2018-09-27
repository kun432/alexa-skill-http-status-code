# alexa-skill-http-status-code

### はじめに

ALEXAスキル「HTTPステータス検索」のリポジトリです

### スキルについて

詳細は以下をご覧ください

https://kun432.github.io/works/alexa-skill-http-status-search/

### 必要なもの

- Amazon Echo
- Amazonアカウント
- AWSアカウント

### 使い方

詳細は割愛。手順未検証ですので、不備あればissueまで。

#### 1. レポジトリをclone

```sh
$ git clone https://github.com/kun432/alexa-skill-http-status-code
$ cd alexa-skill-http-status-code
```

#### 2. Alexa Skills Kitの設定

- [Alexa Developer Portal](https://developer.amazon.com/alexa/console/ask)でスキル作成
  - 「デフォルトの言語」は「日本語」
  - スキルモデルは「カスタム」
- JSONエディター画面で、models/ja-JP.jsonをドラッグ＆ドロップ
- モデルを保存・ビルド
- エンドポイントで「AWS LambdaのARN」を選択し、スキルIDを控えておく。

#### 3. Lambdaの設定

- 関数を作成
  - ランタイムは、```Node.js 8.10```
  - トリガーの追加で```Alexa Skills Kit```を選択
    - トリガーの設定で、スキルID検証を「有効（推奨）」
    - スキルIDに、Alexa Developer Portalで控えておいたスキルIDを入力
- レポジトリ内のソースコードをZIPパッケージ化

```sh
$ cd lambda/custom
$ npm install
$ zip -r ../custom.zip *
```

- Lambdaｍに上記ZIPをアップロード
- LambdaのARNを控えておく

#### 4. Clovaスキル側のExtension Serverの設定

- Alexa Developer PortalでスキルのエンドポイントにLambdaのARNを入力
