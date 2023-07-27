import React from 'react'

const Comment = ({ data }) => {

    const { name, text } = data;
    return (
        <div className='flex items-center mb-2'>
            <div className='my-3 mr-2'>
                <img className='h-8 rounded-full' alt='user' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
            </div>
            <div>
                <p className='font-semibold text-sm'>{name}</p>
                <p className=''>{text}</p>
            </div>
        </div>
    )
}

export default Comment;
