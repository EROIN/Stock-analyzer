import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {useEffect, useState} from 'react';

import './Refresher.scss';

import {RefresherProps} from './Refresher.types';
let intervalId: any;

export const Refresher = ({refreshData}: RefresherProps) => {
  const [refreshTime, setRefreshTime] = useState<number>(10);

  useEffect(() => {
    intervalId = setInterval(refreshData, refreshTime * 1000);
    return () => clearInterval(intervalId);
  }, [refreshTime, refreshData]);

  const changeInterval = (input: number) => () => {
    setRefreshTime(input);
  };

  const addMenuItem = (item: number, index: number) => (
    <Menu.Item key={`${index}`} onClick={changeInterval(item)}>
      {item}
    </Menu.Item>
  );

  const menu = <Menu>{[10, 15, 20, 30].map(addMenuItem)}</Menu>;

  return (
    <div className="refresher-container">
      <span>Refresh data in every </span>
      <Dropdown overlay={menu} trigger={['click']}>
        <a>
          {refreshTime} <DownOutlined />
        </a>
      </Dropdown>
      ,<span> seconds</span>
    </div>
  );
};
