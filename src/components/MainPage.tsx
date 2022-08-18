import React, { useEffect, useState } from "react";
import { Page, Button, Toolbar, List, ListHeader, ListItem, Row, Col, Switch } from "react-onsenui";
import DetailPage from "./DetailPage";
import { NavigatorProps } from './Block';
import ons from "onsenui";
import { pushPage } from "../utils/pushPage";

interface MainProps extends NavigatorProps {
  balance?: number;
  seed?: number;
  alcohol?: boolean;
  counterSales?: boolean;
}

const MainPage: React.FC<MainProps> = (props) => {

  const [balance, setBalance] = useState(props.balance || 1000);
  const [alcohol, setAlcohol] = useState<boolean>(true);
  const [counterSales, setCounterSales] = useState<boolean>(false);


  const seed = Math.floor(Math.random() * 100000);

  const gachaButton = (balance: number) => {

    return (
      <Button key={`${balance}-yen-button`} modifier="large"
        onClick={() => pushDetailPage(balance)}>
        <div>{`${balance}円ガチャ`}</div>
      </Button>
    )
  }

  const pushDetailPage = (selectedBalance: number) => {
    pushPage({
      ...props,
      balance: selectedBalance,
      seed: seed,
      alcohol: alcohol,
      counterSales: counterSales
    }, DetailPage, `detail_${seed}`);
  }

  const renderRow = () => {
    return
  }

  useEffect(() => {

  });

  return (
    <Page key={`main`}>
      <Toolbar>
        <div className="center">サイゼガチャ</div>
      </Toolbar>
      <div className="Under-toolbar">
        <section >
          // ここに説明が入る
        </section>
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
          <List>
            <ListHeader>Option</ListHeader>
            <ListItem>
              <div className="center">アルコールを含める</div>
              <div className="right">
                <Switch checked onChange={(e: any) => { setAlcohol(e.value); }}></Switch>
              </div>
            </ListItem >
            <ListItem>
              <div className="center">店頭販売商品を含める</div>
              <div className="right">
                <Switch onChange={(e: any) => { setCounterSales(e.value); }}></Switch>
              </div>
            </ListItem >
          </List>
        </section>
      </div >
    </Page >
  );
};

export default MainPage;
