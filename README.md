# Health App

### 環境 / 技術
|                 |                    |
|-----------------|--------------------|
| Runtime         | Node `14.18.1`     |
| Package Manager | npm `6.14.15`      |
| Frontend        | React `^18.2.0`     |
| UI              | Chakra UI `^2.2.8` |

## 開発

### 環境構築
1. プロジェクトダウンロード
```bash
$ git clone https://github.com/yoshimariko/healthapp.git && cd healthapp
```

2. パッケージダウンロード
```bash
$ docker-compose run --rm node npm install
```

3. ローカル環境立ち上げ
```bash
$ cd app/
$ npm run start:dev
```
問題なく立ち上げたら http://localhost:3000/ からサイトを確認できる。


### ビルド
プロジェクトビルド
```bash
$ cd app/
$ npm run build:prod
```
ビルドできたら、`app/` ディレクトリ配下に `build/` フォルダーに最適化されたアプリケーションのビルドが生成される。