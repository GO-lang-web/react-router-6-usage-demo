//libraries
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  useParams,
  useResolvedPath,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      this is app
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 加index默认显示这个 */}
            <Route index element={<Home />} />
            {/* /product */}
            <Route path="product" element={<Product />}>
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            {/* not found  backup  */}
          </Route>
          <Route path="/me" element={<Me />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

//pages
function Layout() {
  return (
    <div>
      <Link to="/">首页</Link>
      <Link to="product">商品</Link>
      {/* 容器 显示子元素用 */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
function Me() {
  return (
    <div>
      <h1>Me</h1>
    </div>
  );
}
function Product() {
  const path = useResolvedPath("123");
  console.log("path", path); //sy-log
  return (
    <div>
      <h1>Product</h1>
      <Link to="123">详情</Link>
      <Outlet />
    </div>
  );
}

function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>ProductDetail: {params.id}</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go home
      </button>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>NoMatch</h1>
    </div>
  );
}
export default App;
