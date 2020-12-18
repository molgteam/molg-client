import React from 'react';
import { Link } from 'react-router-dom';

// TODO: 유료이용약관, 개인정보처리방침, 문의하기 페이지 만들기
const Footer = () => (
  <footer>
    <div className="area_footer">
      <div className="service_info">
        <Link to="/" className="link_service">
          유료이용약관
        </Link>
        <Link to="/" className="link_service">
          <strong className="dlnk_txt">개인정보처리방침</strong>
        </Link>
        <Link to="/" className="link_service">
          문의하기
        </Link>
        <p className="desc_service">
          Copyright © 2020 Wook & Ggun. All Rights Reserved.
          <br />
          Molg는 Instagram과 관련이 없습니다. 우리는 서버에서 Instagram
          데이터를 직접 호스팅하지 않으며 모든 권리는 해당 소유자에게
          있습니다.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
