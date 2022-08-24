import React, { useEffect, useState } from "react";
import { Page, Button, Toolbar, List, ListHeader, ListItem, Row, Col, Switch, Card } from "react-onsenui";
import DetailPage from "./DetailPage";
import { NavigatorProps } from './Block';
import ons from "onsenui";
import { pushPage } from "../utils/pushPage";
import { setTimeout } from "timers";

interface MainProps extends NavigatorProps {
  balance?: number;
  seed?: number;
  alcohol?: boolean;
  counterSales?: boolean;
  drinkBar?: boolean;
}

const MainPage: React.FC<MainProps> = (props) => {

  const [balance, setBalance] = useState(props.balance || 1000);
  const [alcohol, setAlcohol] = useState<boolean>(false);
  const [counterSales, setCounterSales] = useState<boolean>(false);
  const [drinkBar, setDrinkBar] = useState<boolean>(false);

  const searchParams = new URLSearchParams(window.location.search);

  const gachaButton = (balance: number) => {
    const seed = Math.floor(Math.random() * 100000);
    return (
      <Button key={`${balance}-yen-button`} modifier="large"
        onClick={() => pushDetailPage(balance, seed)}>
        <div>{`${balance}円ガチャ`}</div>
      </Button>
    )
  }

  const pushDetailPage = (selectedBalance: number, seed?: number) => {
    pushPage({
      ...props,
      balance: selectedBalance,
      seed: seed,
      alcohol: alcohol,
      counterSales: counterSales,
      drinkBar: drinkBar
    }, DetailPage, `detail_${seed}`);
  }

  useEffect(() => {
    // seed&balanceがある場合はpush
    const seed = searchParams.get("seed");
    const balance = searchParams.get("balance");
    if (seed && balance) {
      setTimeout(() => {
        pushDetailPage(Number(balance));
      }, 500);
    }
  }, []);

  return (
    <Page key={`main`}>
      <Toolbar>
        <div className="center">Saizeriya PWA Gacha</div>
      </Toolbar>
      <div className="Under-toolbar">
        <section>
          <Card>
            <div className="title">サイゼリヤガチャ</div>
            <div className="content">
              <div>version 0.0.1</div>
            </div>
          </Card>
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
              {gachaButton(800)}
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
              <div className="center">ドリンクバーをつける</div>
              <div className="right">
                <Switch onChange={(e: any) => { setDrinkBar(e.value) }}></Switch>
              </div>
            </ListItem>
            <ListItem>
              <div className="center">アルコールを含める</div>
              <div className="right">
                <Switch onChange={(e: any) => { setAlcohol(e.value); }}></Switch>
              </div>
            </ListItem>
            <ListItem>
              <div className="center">店頭販売商品を含める</div>
              <div className="right">
                <Switch onChange={(e: any) => { setCounterSales(e.value); }}></Switch>
              </div>
            </ListItem>

          </List>
        </section>
        <section style={{
          textAlign: 'center', paddingTop: '5px',
          fontSize: '0.8em'
        }}>
          <div>©2022 Riku Yamamoto</div>
        </section>
      </div >
    </Page >
  );
};

export default MainPage;
