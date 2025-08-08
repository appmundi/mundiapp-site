import { Document, Page, pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './style.module.css';

import workerSrc from 'pdfjs-dist/build/pdf.worker.min?url';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export function PdfViewer() {
  const { file } = useParams<{ file: string }>();
  const [numPages, setNumPages] = useState<number | null>(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  if (!file) return <p>Arquivo não encontrado.</p>;

  return (
    <div className={styles.container}>
      <Document
        file={`/${file}.pdf`}
        onLoadSuccess={onDocumentLoadSuccess}
        loading='Carregando documento...'
        error='Erro ao carregar o documento.'
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={window.innerWidth > 768 ? 800 : window.innerWidth - 32}
          />
        ))}
      </Document>
    </div>
  );
}
