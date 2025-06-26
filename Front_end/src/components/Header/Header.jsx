import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <img src="logo.png" alt="logo" className="logo" />
        </div>
        <div className="user">
          <div className="user_infor">
            <p className="user_infor-username">Kang0408</p>
            <p className="logout">Đăng xuất</p>
          </div>
          <div className="user_avatar">
            <img src="logo.png" alt="avatar" className="avatar" />
          </div>
        </div>
      </header>
    </>
  );
}
