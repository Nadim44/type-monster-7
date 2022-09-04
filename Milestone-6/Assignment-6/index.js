// const displayNewHeading = headings => {
//     // console.log(headings)
//     const newsContainer = document.getElementById('news-container')
//     newsContainer.innerHTML = ''
//     for (const heading of headings) {
//         const newsTitle = document.createElement('a')
//         newsTitle.innerHTML = `
//         <a onclick="newsFeeds('${category_id}')" class="nav-link">${heading.category_name}</a>
//         `;
//         newsContainer.append(newsTitle)

//     }

// }
// const loadNewsHeading = () => {
//     // console.log('add')
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//         .then(res => res.json())
//         .then(data => displayNewHeading(data.data.news_category))

// }

// const newsFeeds = async (category_id) => {
//     // const url = `https://openapi.programming-hero.com/api/news/category/01`;
//     const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayNews(data.data)
// }

// const displayNews = (allNews) => {
//     // console.log(allNews)
//     const newsPartContainer = document.getElementById('news-part')
//     // newsPart.createElement = ('div')
//     newsPartContainer.innerHTML = ''
//     for (const news of allNews) {
//         console.log(news)
//         // const newsPartContainer = document.getElementById('news-part')
//         // // newsPart.createElement = ('div')
//         // newsPartContainer.innerHTML = ''
//         const newsPart = document.createElement('div')
//         newsPart.innerHTML = `
//         <div class="d-flex border border-dark ">
//                 <div class="card">
//                     <img src="${news.thumbnail_url}" alt="...">
//                 </div>
//                 <div class="card-body">
//                     <h5 class="card-title">${news.title}</h5>
//                     <h5 class="card-title">${news.total_view}</h5>
//                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in
//                         to additional content. This content is a little bit longer.</p>
//                 </div>

//             </div>

//         `;
//         newsPartContainer.appendChild(newsPart)
//     }


// }






const loadNewsHeading = () => {
    // console.log('add')
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNewHeading(data.data.news_category))

}
const displayNewHeading = headings => {
    // console.log(headings)
    const newsContainer = document.getElementById('news-container')
    newsContainer.innerHTML = ''
    for (const heading of headings) {
        const newsTitle = document.createElement('a')
        newsTitle.innerHTML = `
        <a onclick="newsFeeds('${heading.category_id}')" class="nav-link">${heading.category_name}</a>
        `;
        newsContainer.append(newsTitle)

    }

}
const newsFeeds = async (categoryId) => {
    // const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}

const displayNews = (allNews) => {
    // console.log(allNews)
    const newsPartContainer = document.getElementById('news-part')
    newsPartContainer.innerHTML = ''
    for (const news of allNews) {
        // console.log(news)
        const newsPart = document.createElement('div')
        newsPart.innerHTML = `
        <div class="d-flex border border-dark ">
                <div class="card img-fluid">
                    <img src="${news.thumbnail_url}" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.details.slice(0, 100)}</p>
                    <div class="d-flex" > 
                      <div class="card img-fluid" > 
                         <img style="height: 25px; width:25px" class="rounded-circle" src="${news.author.img}" alt="...">
                      </div>
                      <div class="d-flex mx-auto">
                        <h3 class="mx-4">${news.author.name === null ? 'no data found' : news.author.name} </h3>
                       <span> <i class="fa-solid fa-eye"></i></span>
                        <h3>${news.total_view == null ? 'no view' : news.total_view} </h3>
                        
                        <button class="btn btn-primary mx-4">Details</button>

                       </div> 
                    </div> 
                </div>


            </div>


        `;
        newsPartContainer.appendChild(newsPart)
    }


}


// const details = () => {
//     // console.log('add')
//     const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayDetails(data.data))

// }
// const displayDetails = (details) => {

//     const modal=document.createElement('div')

// }
// details()




// newsFeeds()




/* <div class="row g-0 card mb-3 ">
                    <div class="col-md-4">
                        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <h5 class="card-title">${news.total_view}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
         </div> */




// document.getElementById('news-details').addEventListener('click', function () {
//     console.log('clicked')
// })




// const loadQuote = () => {
//     // fetch('https://api.kanye.rest/')
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//         .then(res => res.json())
//         .then(data => displayQuote(data.data.news_category))
// }

// const displayQuote = headings => {
//     // const blockQuote = document.getElementById('quote');
//     // console.log(quote)
//     // blockQuote.innerText = quote.quote
//     for (const heading of headings) {
//         console.log(heading.category_name)
//     }

// }

// const newsFeeds = (category_id) => {

//     const url = `https://openapi.programming-hero.com/api/news/category/{category_id}`;
//     // const url = `https://openapi.programming-hero.com/api/news/category/01`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayNews(data.data))
// }



// 

/* <div> 
<div class="card img-fluid">
<img src="${news.}" alt="...">
<h3>${author.name} </h3>
</div>
<h3>${news.total_view} </h3>

</div>   */
/* <p>${news.author.name}</p><br></br> */


const questionBlog = () => {
    const questionBlog = document.getElementById('question-blog')
    questionBlog.innerHTML = ''
    // console.log('add')
    const blog = document.createElement('div')
    blog.innerHTML = `
     <div class='mx-4'>
        <h5>1. Difference between var, let and const?</h5>
        <p>Answer: var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. </p>
  </div>
     <div class='mx-4'>
        <h5>2. Difference between Arrow function and Regular function?</h5>
        <p>Answer: Inside of a regular JavaScript function, this value is dynamic. The dynamic context means that the value of this depends on how the function is invoked. In JavaScript, there are 4 ways you can invoke a regular function.
        </p>
    </div>
     <div class='mx-4'>
        <h5>3. Difference between Arrow function and Regular function?</h5>
        <p>Answer: Template literals are a new feature introduced in ECMAScript 2015/ ES6. It provides an easy way to create multiline strings and perform string interpolation. Template literals are the string literals and allow embedded expressions. Before ES6, template literals were called as template strings.
        </p?
    </div>
    
    `
    questionBlog.appendChild(blog)
}