import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ANDROID_STORE_URL =
  'https://play.google.com/store/apps/details?id=br.com.mundi.mundi_client_app&hl=pt_BR';
// const IOS_STORE_URL = ''; // TODO: publicar na App Store

const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
const isAndroid = /Android/i.test(navigator.userAgent);

export default function EntrepreneurRedirect() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Abrindo o Mundi App…');
  const hasHidden = useRef(false);

  useEffect(() => {
    const id = searchParams.get('id');
    const deepLink = id ? `br.com.mundi.mundi_client_app://entrepreneur?id=${id}` : 'br.com.mundi.mundi_client_app://';

    const onVisibilityChange = () => {
      if (document.hidden) hasHidden.current = true;
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    // Tenta abrir o app
    window.location.href = deepLink;

    // Após 1.5 s: se ainda visível, redireciona para a loja
    const timer = setTimeout(() => {
      if (hasHidden.current) return;

      if (isAndroid) {
        window.location.href = ANDROID_STORE_URL;
      } else if (isIOS) {
        // TODO: window.location.href = IOS_STORE_URL;
        setStatus('Em breve disponível na App Store.');
      } else {
        window.location.href = ANDROID_STORE_URL;
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [searchParams]);

  return (
    <div style={styles.container}>
      <img src="/images/img.png" alt="Mundi App" style={styles.logo} />
      <div style={styles.spinner} />
      <p style={styles.status}>{status}</p>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    background: '#0a0e1f',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    padding: 24,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  logo: {
    width: 72,
    height: 72,
    objectFit: 'contain',
    borderRadius: 16,
    opacity: 0.92,
  },
  spinner: {
    width: 36,
    height: 36,
    border: '3px solid rgba(255,193,7,0.2)',
    borderTopColor: '#ffc107',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  status: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: '0.2px',
    textAlign: 'center',
  },
};
