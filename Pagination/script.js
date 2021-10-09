import { todoList} from "./classSelectors.js";
import { createPagination } from "./pagination.js";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      options
    );

    if (response) {
      const data = await response.json();
      console.log(data);
   
      createPagination(data,10);


    }
  } catch (e) {
    console.log(e);
  }
};

fetchData();
