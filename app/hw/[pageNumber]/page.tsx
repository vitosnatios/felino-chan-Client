import Board from '@/components/pages/board/Board';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    'A board that contains a list of threads with random content and cat images',
};

export const dynamicParams = false;

// export const revalidate = 0;

export const generateStaticParams = async () => {
  const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return pages.map((page) => ({ pageNumber: page }));
};

const HelloWorldPage = ({ params }: { params: { pageNumber: string } }) => {
  const page = Number(params.pageNumber);
  metadata.title = `Hello, World! Página ${page}`;
  return <Board page={page} />;
};

export default HelloWorldPage;