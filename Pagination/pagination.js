import { pagination,todoList } from "./classSelectors.js";

const displayList = (data,currPage,itemPerPage) => {
    const pageData= data.slice(currPage,currPage+itemPerPage);

    pageData.forEach((todo, index) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `<div>${currPage*itemPerPage  + index + 1}. ${todo.title}<div>`;
        todoList.appendChild(todoItem);
      });
}
export const createPagination = (data,itemPerPage) => {
    const numberOfPages = data.length/10
    let currPage = 0;
    const handlePageChange = (e) => {
        if(e.target.classList.contains('pagination-button'))
        {
            currPage = e.target.id -1;
            todoList.innerHTML=''
            displayList(data,currPage,itemPerPage);
        }
        else if(e.target.parentNode.classList.contains('pagination-button'))
        {
            currPage = e.target.parentNode.id -1;
            todoList.innerHTML=''
            displayList(data,currPage,itemPerPage);
        }

    }
    for(let i=0; i < numberOfPages; i++ )
    {
        const paginationButton = document.createElement('div');
        paginationButton.classList.add("pagination-button")
        paginationButton.setAttribute('id',i+1)
        paginationButton.innerHTML = `<div>${i+1}</div>`
        pagination.appendChild(paginationButton);
    }
    displayList(data,currPage,itemPerPage);

    pagination.addEventListener('click',handlePageChange)
    // pagination.appendChild


}