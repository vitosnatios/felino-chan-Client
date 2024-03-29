import classes from './PostFileDetails.module.css';
import Link from 'next/link';

type Props = {
  hideImage: () => void;
  showImage: boolean;
  width: number;
  height: number;
  catUrl: string | null;
  handleShowPost: () => void;
};

const PostFileDetails = ({
  hideImage,
  showImage,
  width,
  height,
  catUrl,
  handleShowPost,
}: Props) => {
  return (
    <div className={classes.detailsContainer}>
      <p>
        <span className={classes.pointer} onClick={handleShowPost}>
          [ - ]
        </span>{' '}
        Arquivo{' '}
        <small className={classes.pointer} onClick={hideImage}>
          ({showImage ? 'esconder imagem' : 'mostrar imagem'})
        </small>
        {catUrl && (
          <Link href={catUrl} target='_blank'>
            <small> foto do gatinho :3 </small>
            <small>
              ({width}x{height}px)
            </small>
          </Link>
        )}
      </p>
    </div>
  );
};

export default PostFileDetails;
