'use client';
import { Post } from '@/types/generalTypes';
import React, { ReactNode, useState } from 'react';
import PostFileDetails from '../PostFileDetails';
import PostImage from '../PostImage';
import PostUserDetails from '../PostUserDetails';
import classes from './Thread.module.css';
import Hr from '@/components/layout/Hr';
import { serialize } from 'mongodb';

type Props = { from: 'outside' | 'inside'; thread: Post; children: ReactNode };

const Thread = ({ from, thread, children }: Props) => {
  const [showImage, setShowImage] = useState<boolean>(true);
  const {
    _id,
    email,
    assunto,
    postContent,
    op,
    randomIdGeneratedByMe,
    catUrl,
    catWidth,
    catHeight,
    postDay,
  } = thread;

  return (
    <div>
      <div>
        <PostFileDetails
          showImage={showImage}
          hideImage={() => setShowImage((prev) => !prev)}
          width={catWidth}
          height={catHeight}
          catUrl={catUrl}
        />
        {catUrl && showImage && (
          <PostImage src={catUrl} width={catWidth} height={catHeight} />
        )}
        <div>
          <div className={classes.UserDetailsAndText}>
            <PostUserDetails
              assunto={assunto}
              email={email}
              id={_id}
              postDay={postDay}
              postNumber={String(randomIdGeneratedByMe)}
              from={from}
              op={op}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: postContent,
              }}
            />
          </div>
        </div>
      </div>
      {children}
      <Hr />
    </div>
  );
};

export default Thread;