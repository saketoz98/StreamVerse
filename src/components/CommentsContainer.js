import React from 'react'
import CommentsList from './CommentsList';
import { generateRandomCommentMessage } from '../utils/utils';

const commentsData = [
    {
        name: 'Saket Ozarkar',
        text: generateRandomCommentMessage(),
        replies: []
    },
    {
        name: 'Jane Doe',
        text: generateRandomCommentMessage(),
        replies: [{
            name: 'Robert Downey Jr.',
            text: generateRandomCommentMessage(),
            replies: [{
                name: 'Rober Kiyosaki',
                text: generateRandomCommentMessage(),
                replies: [{
                    name: 'Lebron James',
                    text: generateRandomCommentMessage(),
                    replies: [{
                        name: 'Joe Biden',
                        text: generateRandomCommentMessage(),
                        replies: [{
                            name: 'James Anderson',
                            text: generateRandomCommentMessage(),
                            replies: []
                        },]
                    },]
                },]
            },]
        },]
    },
    {
        name: 'Roger Federer',
        text: generateRandomCommentMessage(),
        replies: [{
            name: 'Lisa Su',
            text: generateRandomCommentMessage(),
            replies: []
        },]
    },
    {
        name: 'Peter Parker',
        text: generateRandomCommentMessage(),
        replies: [{
            name: 'Peter Paterson',
            text: generateRandomCommentMessage(),
            replies: []
        },]
    },
    {
        name: 'Logan Paul',
        text: generateRandomCommentMessage(),
        replies: [{
            name: 'Pink Panther',
            text: generateRandomCommentMessage(),
            replies: []
        },]
    },
    {
        name: 'Loris Karius',
        text: generateRandomCommentMessage(),
        replies: [{
            name: 'Ben Haggerty',
            text: generateRandomCommentMessage(),
            replies: []
        },]
    },
    {
        name: 'Raymond Reddington',
        text: generateRandomCommentMessage(),
        replies: [{
            name: 'Raheem Sterling',
            text: generateRandomCommentMessage(),
            replies: [{
                name: 'Nelson Mandela',
                text: generateRandomCommentMessage(),
                replies: [{
                    name: 'Louis Hamilton',
                    text: generateRandomCommentMessage(),
                    replies: []
                },]
            },]
        },]
    }
]

const CommentsContainer = () => {
    return (
        <div>
            <h1 className='text-lg mb-2 font-bold'>Comments</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;
