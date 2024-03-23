import { Suspense, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/common/header';
import { Outlet } from 'react-router-dom';
import Loading from './components/(ui)/loading';
function App() {
  const { t, i18n } = useTranslation('translation');
  const handleChangeLang = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem('bao-chay', lang);
    },
    [i18n]
  );
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Outlet />
    </Suspense>
  );
}

export default App;
