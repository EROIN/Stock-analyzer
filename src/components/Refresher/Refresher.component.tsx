import {Input} from 'antd';
import {useState} from 'react';

import './Refresher.scss';

// import {RefresherProps} from './Refresher.types';

export const Refresher = () => {
  const changeInterval = (event: any) => {
    const input = event.target.value;
    if (!isNaN(input)) setInterval(input);
  };

  return (
    <>
      <span>Refresh data in every </span>
      <Input
        defaultValue={10}
        maxLength={3}
        onChange={changeInterval}
        className="refresher-input"
      />
      <span> seconds</span>
    </>
  );
};
