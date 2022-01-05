import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'antd';

import {
  decrement,
  incrementAsync,
  selectCount,
  selectStatus,
} from '../../redux/modules/counter/counter.module';

import './Home.scss';

export function Home(props: any) {
  const count = useSelector(selectCount);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  // console.log(count);

  const goToHome2 = () => {
    const {history} = props;
    history.push('/Home2');
  };

  return (
    <div className="container">
      Home
      <button onClick={goToHome2}>
        hashashask{process.env.REACT_APP_NAME}
      </button>
      <button onClick={() => dispatch(decrement())}>dec</button>
      <button onClick={() => dispatch(incrementAsync(10))}>increment</button>
      <div>
        {count}
        {status}
      </div>
      <Button type="primary">Button</Button>
    </div>
  );
}
