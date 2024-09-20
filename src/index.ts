interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getFooterYear = () => {
    const year = new Date().getUTCFullYear();
    const copyright = document.querySelector('.current-year');
    
    if (copyright != null) {
        copyright.innerHTML = year.toString();
    }
}

const getAllPosts = async (): Promise<Post[]> => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            return data as Promise<Post[]>
        });
}

const generateCards = (postRow: HTMLDivElement, posts: Post[]) => {
    posts.forEach((elem) => {
        const column: HTMLDivElement = document.createElement('div');
        column.classList.add('col-lg-4', 'col-md-12');

        const card: HTMLDivElement = document.createElement('div');
        card.classList.add('card', 'p-3');

        const cardBody: HTMLDivElement = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle: HTMLHeadingElement = document.createElement('h5')
        cardTitle.classList.add('card-title', 'fw-bold');
        cardTitle.innerHTML = elem.title;

        const anchor: HTMLAnchorElement = document.createElement('a');
        anchor.classList.add('navigate-to-card');
        anchor.href = './pages/post.html';
        anchor.target = '_blank';

        const cardParagraph: HTMLParagraphElement = document.createElement('p');
        cardParagraph.classList.add('card-text');
        cardParagraph.innerText = elem.body;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardParagraph);
        card.appendChild(cardBody);
        anchor.appendChild(card)
        column.appendChild(anchor);
        postRow.appendChild(column);
    });
}


const buildPostSpace = async () => {
    const posts: Post[] = await getAllPosts();
    const postRow: HTMLDivElement = document.querySelector('.section-row')!;
    postRow.innerHTML = ""; 
    
    generateCards(postRow, posts);
}

getFooterYear();
buildPostSpace();