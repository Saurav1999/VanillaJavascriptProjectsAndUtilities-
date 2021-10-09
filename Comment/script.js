const commentInput = document.getElementById("comment-text-area");
const addComment = document.getElementById("add");
const comments = document.getElementById("comments");
let currId = 1;
const commentList = {
  id: 0,
  children: [],
  text: "",
  marginLeft: 0,
};
// const commentList = {
//   id: 0,
//   children: [
//     {
//       id: 1,
//       text: "Hi",
//       children: [
//         {
//           id: 3,
//           text: "Okay",
//           children: [],
//           marginLeft: 10,
//         },
//         {
//           id: 4,
//           text: "Great",
//           children: [
//             {
//               id: 5,
//               text: "yeah",
//               children: [],
//               marginLeft: 15,
//             },
//             {
//               id: 6,
//               text: "really",
//               children: [],
//               marginLeft: 15,
//             },
//             {
//               id: 7,
//               text: "enjoyed",
//               children: [],
//               marginLeft: 15,
//             },
//             {
//               id: 4,
//               text: "it",
//               children: [],
//               marginLeft: 15,
//             },
//           ],
//           marginLeft: 10,
//         },
//       ],
//       marginLeft: 5,
//     },
//     {
//       id: 2,
//       text: "Nice Vedio",
//       children: [],
//       marginLeft: 5,
//     },
//   ],
//   text: "",
//   marginLeft: 0,
// };

const showComments = (commentObj, parent) => {
  //   comments.innerHTML = "";
  //   commentList.forEach((comment) => {
  //     const commentItem = document.createElement("div");
  //     commentItem.classList.add("comment");
  //     commentItem.innerText = comment;
  //     comments.appendChild(commentItem);
  //   });
  const comment = document.createElement("div");
  // comment.setAttribute('data-comment-id',commentObj?.id)
  //   comment.setAttribute('data-comment-id',commentObj?.id)
  comment.style.marginLeft = `${
    commentObj?.marginLeft ? commentObj.marginLeft : 0
  }px`;
  comment.innerHTML = `<div>
    <div>${commentObj.text}</div>
    <button class="reply-btn" id=${commentObj.id}>Reply</button>
  
  </div>`;
  commentObj.children.length >= 0 &&
    commentObj.children.forEach((child) => {
      showComments(child, comment);
    });
  parent.appendChild(comment);
};
showComments(commentList, comments);

const searchObject = (Obj, id) => {
  // console.log(Obj)
  if (Obj.id === id) return Obj;
  if (Obj.children.length === 0) return null;
  let res;
  Obj.children.forEach((child) => {
    if (!res) res = searchObject(child, id);
  });
  return res;
};
const insertComment = (id, text) => {
  const parentObj = searchObject(commentList, id);
  const newObj = {
    id: currId++,
    text: text,
    children: [],
    marginLeft: 5,
  };
  id++;
  parentObj.children.push(newObj);
  console.log(commentList);
  comments.innerHTML = "";
  showComments(commentList, comments);
};
addComment.addEventListener("click", () => {
  const text = commentInput.value;
  //   commentList.push(commentInput.value);
  // console.log(commentList)
  //   showComments();
  commentInput.value = "";
  insertComment(0, text);
});

const handleClick = (e) => {
  if (e.target.className === "reply-btn") {
    const parentNode = e.target.parentNode;
    console.log(parentNode);
    const textArea = document.createElement("textarea");
    parentNode.appendChild(textArea);
  }
};
comments.addEventListener("click", handleClick);
