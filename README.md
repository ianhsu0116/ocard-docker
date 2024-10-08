[<img align="center" src="https://user-images.githubusercontent.com/82724318/138928955-57146cae-1e69-4504-b602-8b539e758b86.png">](https://ocard-forumweb.herokuapp.com/)  
[<p align="center">Go to Ocard! »</p>](https://ocard-forumweb.herokuapp.com/)

<p align="center">一個致敬 Dcard(台灣最熱門的大學生網路論壇) 所寫出來的個人練習用作品</p>
<p align="center">This is a social media website, platforms allow users to have conversations, share information and create web content, enjoy it.</p>

## Login Demonstration

https://user-images.githubusercontent.com/82724318/138205206-025142f0-fc7b-490f-961f-ff0bf1fb09d7.mov

## Front-End Fundamental

HTML  
SCSS  
JavaScript (ES2015)

## Front-End Frameworks & Libraries

React  
React Hooks  
React Router

## Authentication

Google Auth  
Facebook Auth  
Json Web Token

## Tool for Development

Node Package Manager (NPM)  
SCSS
ESLint  
Prettier

## Back-End Fundamental

Node.JS  
Express

## Database

MongoDB  
Amazon S3

## [1.0.0] 2021-10-25

### added
- 2024/08/01
  Deployed on AWS!

- 2022/06/07
  Dockerize

- 2021/10/17
  Useing Amazon S3 to store upload images

- 2021/10/12
  Integrate sign-in system with Facebook and Google

- 2021/10/10
  Search function

### changed
- 2021-10-30
  Disabled background body scroll when article modal is showing

## How to start the app

- Set up .nev file before starting the app

- Client
  ```bash
  cd client

  docker buildx build \
    --platform linux/amd64 \
    -f Dockerfile \
    -t ocard-frontend:latest \
    --load \
    .
  
  env $(grep -v '^#' .env | xargs) docker run -p 3000:3000 --platform linux/amd64 ocard-frontend
  ```

- Server
  ```bash
  cd server

  docker buildx build \
    --platform linux/amd64 \
    -f Dockerfile \
    -t ocard-backend:latest \
    --load \
    .
  
  docker run -p 7777:80 --platform linux/amd64 ocard-backend
  ```

- Docker compose
  ```bash
  env $(grep -v '^#' .env | xargs) docker compose up --build
  ```

## Todos
- IaC
- Deployed on ECS
- Custom domain

## Conteact

If you got any problem when using Ocard, or had any suggestion about it. Please feel free to contact with me via email.

- Author: Ian, Hsu
- Email: ianhsu0116@gmail.com

<br />
<hr />
<p align="center">若是有任何侵權疑慮，煩請email告知，謝謝！</p>
