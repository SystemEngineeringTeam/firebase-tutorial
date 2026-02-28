---
marp: true
theme: default
paginate: true
---

# Firebaseで

# SNSを作ってみよう

### 〜 BaaSを活用したWebアプリ開発 〜

---

# 自己紹介

## 矢部大智

<div style="display: flex; align-items: center; gap: 40px;">
<div>

- **出身**: 福井県
- **所属**: コンピュータシステム専攻 2 年生
- **技術領域**: TypeScript, Kotlin, Go, AWS
- **趣味**: 絶叫系, ゲーム, 食べること
  ![bg right:40%](./yabe.jpg)

---

## 今日のゴール

- バックエンド/フロントエンドとは何か分かる
- Firebaseで何ができるか分かる
- webアプリ開発がなんとなくわかるようになる
- 「これなら作れそう」と思えるようになる

---

## バックエンドとは

YouTubeで例えると...

- バックエンド
  - 動画ファイルをフロントエンドに送る
- フロントエンド
  - バックエンドから受けとった動画を画面に映し出す

---

## SNSアプリって何が必要？

最低限こんな機能👇

- ユーザー登録・ログイン
- 投稿
- タイムライン表示
- いいね・コメント

---

## 普通に作ろうとすると…

- サーバー構築
- DB設計
- 認証
- API実装
- セキュリティ

👉**初心者にはハードルが高い**

---

## Firebaseとは？

Googleが提供する  
**「アプリ開発に必要なもの全部入り」サービス**

特徴：

- サーバー管理ほぼ不要
- フロントエンド中心で開発できる

---

## Firebaseでできること

- 🔐Authentication（認証）
- Firestore / Realtime DB
- Storage（画像保存）
- etc...

👉 **SNSに必要な機能が全部ある**

---

## 今回使うFirebase機能

今回の勉強会では👇

- Authentication（ログイン）
- Firestore（投稿データ）

---

## アプリ構成イメージ
