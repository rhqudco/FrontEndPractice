import { Link, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Content from './components/Content';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈 화면 보기</Link>
        </li>
        <li>
          <Link to="/about">About 화면 보기</Link>
        </li>
        <li>
          <Link to="/Content">전체 도서 정보 출력</Link>
        </li>
        <li>
          <Link to="/Book/ant">개미</Link>
        </li>
        <li>
          <Link to="/Book/demian">데미안</Link>
        </li>
        <li>
          <Link to="/Book/threeKingdoms">삼국지</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/book/:keyword" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
