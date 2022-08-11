import React, { useEffect, useState } from "react";
import { Page, Button, Toolbar, Select, Modal, Icon, Row, Col } from "react-onsenui";
import DetailPage from "./DetailPage";
import { NavigatorProps } from './Block';
import ons from "onsenui";
import { pushPage } from "../utils/pushPage";

interface MainProps extends NavigatorProps {
  balance?: number;
}

const MainPage: React.FC<MainProps> = (props) => {

  const [balance, setBalance] = useState(props.balance || 1000);
  const [isLoading, setLoading] = useState(false);

  const gachaButton = (balance: number) => {
    return (
      <Button key={`${balance}-yen-button`} modifier="large"
        onClick={() => pushDetailPage(balance)}>
        <div>{`${balance}円ガチャ`}</div>
      </Button>
    )
  }

  const pushDetailPage = (selectedBalance: number) => {
    pushPage({ ...props, balance: selectedBalance }, DetailPage, "DetailPage");
  }

  useEffect(() => {

  });

  return (
    <Page key="page1">
      <Toolbar>
        <div className="center">サイゼガチャ</div>
      </Toolbar>
      <div className="Under-toolbar">
        <section className="row-col-m2" >
          {/* <Button modifier="large" onClick={() => { ons.notification.alert("alert") }}>
            アラートボタン
          </Button>
          <Button onClick={() => { setLoading(true); }}>
            Modal
          </Button> */}
          {/* <Button modifier="large" onClick={() => { pushPage(props, DetailPage, "DetailPage") }} className="gcButton">
            ガチャ
          </Button> */}

          <Row>
            <Col>
              {gachaButton(500)}
            </Col>
            <Col>
              {gachaButton(1000)}

            </Col>
          </Row>
          <Row>
            <Col>
              {gachaButton(1500)}

            </Col>
            <Col>
              {gachaButton(2000)}

            </Col>
          </Row>
        </section>
      </div >
    </Page >
  );
};

export default MainPage;
