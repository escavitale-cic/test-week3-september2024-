"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getFooterYear = () => {
    const year = new Date().getUTCFullYear();
    const copyright = document.querySelector('.current-year');
    if (copyright != null) {
        copyright.innerHTML = year.toString();
    }
};
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
        return data;
    });
});
const generateCards = (postRow, posts) => {
    posts.forEach((elem) => {
        const column = document.createElement('div');
        column.classList.add('col-lg-4', 'col-md-12');
        const card = document.createElement('div');
        card.classList.add('card', 'p-3');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title', 'fw-bold');
        cardTitle.innerHTML = elem.title;
        const anchor = document.createElement('a');
        anchor.classList.add('navigate-to-card');
        anchor.href = './pages/post.html';
        anchor.target = '_blank';
        const cardParagraph = document.createElement('p');
        cardParagraph.classList.add('card-text');
        cardParagraph.innerText = elem.body;
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardParagraph);
        card.appendChild(cardBody);
        anchor.appendChild(card);
        column.appendChild(anchor);
        postRow.appendChild(column);
    });
};
const buildPostSpace = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield getAllPosts();
    const postRow = document.querySelector('.section-row');
    postRow.innerHTML = "";
    generateCards(postRow, posts);
});
getFooterYear();
buildPostSpace();
