import { Hearts } from 'react-loader-spinner';

import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.loader__container}>
      <Hearts heigth="200" width="200" color="blue" arialLabel="loading" />
    </div>
  );
}

export default Loader;
