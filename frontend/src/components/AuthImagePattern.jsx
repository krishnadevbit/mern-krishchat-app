import { useLocation } from 'react-router-dom';
import AuthSignInImageLogo from './AuthSignInImageLogo';
import AuthSignUpImageLogo from './AuthSignUpImageLogo';

const AuthImagePattern = ({ title, subtitle, logo }) => {
  const location = useLocation();
  return (
    <div className='hidden lg:flex items-center justify-center bg-base-200 p-12'>
      <div className='max-w-md text-center'>
        {location.pathname.includes('login') ? (
          <AuthSignInImageLogo />
        ) : (
          <AuthSignUpImageLogo />
        )}
        <h2 className='text-2xl font-bold mb-4 mt-4'>{title}</h2>
        <p className='text-base-content/60'>{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
