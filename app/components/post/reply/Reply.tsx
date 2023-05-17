'use client';
import { Post } from '@/types/generalTypes';
import PostUserDetails from '../PostUserDetails';
import PostFileDetails from '../PostFileDetails';
import PostImage from '../PostImage';
import classes from './Reply.module.css';
import parseHtmlString from '@/lib/parseStringToJsx';
import generalClasses from '../General.module.css';
import HiddenPost from '../HiddenPost';
import useHidden from '@/custom-hooks/useHidden';

type Props = { reply: Post };

const Reply = ({ reply }: Props) => {
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
  } = reply;

  const { handleShowState: handleShowPostState, show: showPost } = useHidden(
    _id,
    randomIdGeneratedByMe,
    'hiddenPosts'
  );

  const { handleShowState: handleShowImageState, show: showImage } = useHidden(
    _id,
    randomIdGeneratedByMe,
    'hiddenImages'
  );

  if (!showPost) {
    return (
      <HiddenPost
        from='inside'
        assunto={assunto}
        email={email}
        id={_id}
        postDay={postDay}
        randomIdGeneratedByMe={randomIdGeneratedByMe}
        op={op}
        handleShowPost={handleShowPostState}
      />
    );
  }

  return (
    <div className={classes.reply} id={String(randomIdGeneratedByMe)}>
      <div className={generalClasses.fileOrUserDetails}>
        <PostUserDetails
          assunto={assunto}
          email={email}
          id={_id}
          postDay={postDay}
          postNumber={String(randomIdGeneratedByMe)}
          op={op}
        />
      </div>
      {catUrl && (
        <div className={generalClasses.fileOrUserDetails}>
          <PostFileDetails
            showImage={showImage}
            hideImage={handleShowImageState}
            width={catWidth}
            height={catHeight}
            catUrl={catUrl}
            handleShowPost={handleShowPostState}
          />
        </div>
      )}
      <div>
        {catUrl && showImage && (
          <PostImage src={catUrl} width={catWidth} height={catHeight} />
        )}
        {parseHtmlString(postContent)}
      </div>
    </div>
  );
};

export default Reply;