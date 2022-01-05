import './Home.scss';

import {SearchBox} from '../../components';

export function Home() {
  return (
    <div className="container">
      <aside className="header-image"></aside>
      <section className="header-container">
        <SearchBox />
      </section>
    </div>
  );
}
