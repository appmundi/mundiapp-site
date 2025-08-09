import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import styles from './style.module.css';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min?url';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export type PdfViewerProps = {
  type: 'terms' | 'policies';
};

export function PdfViewer({ type }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const policies = '/politica-de-privacidade.pdf';
  const terms = '/termos-de-servico.pdf';
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  if (!type) return <p>Arquivo não encontrado.</p>;

  return (
    <div className={styles.container}>
      <Document
        file={type === 'terms' ? terms : policies}
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
