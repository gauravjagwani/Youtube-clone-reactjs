import React from 'react';

const commentsData = [
    {
        name: "Gaurav",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [

        ]
    },
    {
        name: "Sahil",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [

        ]
    },
    {
        name: "Sujit",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [

        ]
    },
    {
        name: "Varsha",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [

        ]
    }
    

]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'> Comments: </h1>
    </div>
  )
}

export default CommentsContainer;

