import {Input, AutoComplete} from 'antd';
import {UserOutlined} from '@ant-design/icons';

import './SearchBox.scss';

export const SearchBox = () => {
  return (
    <AutoComplete
      className="auto-complete"
      options={[
        {
          label: 'aasas',
        },
      ]}
    >
      <Input.Search
        size="large"
        placeholder="input here"
        enterButton
        className="search-input"
      />
    </AutoComplete>
  );
};
