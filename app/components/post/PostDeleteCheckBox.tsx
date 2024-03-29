'use client';
import { memo, useState } from 'react';
import Input from '../pages/board/form/Input';
import Button from '../pages/board/form/Button';
import classes from './PostDeleteCheckBox.module.css';
import { handleDelete } from '@/app/server-actions/handleDelete';
import { useRouter } from 'next/navigation';

type Props = { id: string; postNumber: string };

const PostDeleteCheckBox = ({ id, postNumber }: Props) => {
  const router = useRouter();
  const [showDeleteInput, setShowDeleteInput] = useState<boolean>(false);

  return (
    <div className={classes.removePost}>
      <input
        className={classes.test}
        type='checkbox'
        onChange={(e) => setShowDeleteInput(e.target.checked)}
      />
      {showDeleteInput && (
        <form
          className={classes.form}
          action={(formData: FormData) =>
            handleDelete(formData, id, postNumber).finally(() => {
              router.refresh();
            })
          }
        >
          <Input name='delete' type='password' placeholder='Senha' required />
          <Button>Deletar</Button>
        </form>
      )}
    </div>
  );
};

export default memo(PostDeleteCheckBox);
