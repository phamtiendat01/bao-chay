import React, { useRef } from 'react';
import loginImg from '../assets/login-office-CQRYLh9n.jpeg';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
const LoginViews = () => {
  const { t } = useTranslation('translation');
  const navigate = useNavigate()
  const [_, setUser] = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current && passwordRef.current) {
      setUser({
        username: emailRef.current.value,
        password: passwordRef.current.value,
      });
      emailRef.current.value = ""
      passwordRef.current.value = ""
      navigate('/')
    }
  };
  return (
    <main className='bg-darkBlue min-h-[100vh] w-full flex justify-center items-center p-4 lg:p-6 overflow-hidden'>
      <section className='w-full grid lg:grid-cols-2 shadow-xl md:h-auto md:w-1/2 overflow-hidden rounded-lg'>
        <img src={loginImg} alt='login-img' {...{ fetchpriority: 'high' }} />
        <div className='text-white flex flex-col gap-[40px] py-12 px-4 md:p-12 bg-darkGray'>
          <h1 className='text-4xl font-bold'>{t('login')}</h1>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-[20px] border-b-2 border-white pb-16'
          >
            <div className='flex flex-col gap-2 text-[#93a3af]'>
              <label htmlFor='email'>Email</label>
              <input
                className='bg-[#374151] px-2 py-3 rounded border border-[#6b7280]'
                type='email'
                placeholder='example@email.com'
                ref={emailRef}
              />
            </div>
            <div className='flex flex-col gap-2 text-[#93a3af]'>
              <label htmlFor='password'>{t('password')}</label>
              <input
                className='bg-[#374151] px-2 py-3 rounded border border-[#6b7280]'
                type='password'
                placeholder='********'
                ref={passwordRef}
              />
            </div>
            <button
              className='h-[48px] bg-darkGreen hover:bg-green transition-colors py-[8px] px-[16px] rounded-lg'
              type='submit'
            >
              {t('login')}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginViews;
