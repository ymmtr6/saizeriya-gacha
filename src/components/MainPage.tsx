import React, { useEffect, useState } from "react";
import { Page, Button, Toolbar, Select, Modal, Icon } from "react-onsenui";
import DetailPage from "./DetailPage";
import { NavigatorProps } from './Block';
import ons from "onsenui";
import { pushPage } from "../utils/pushPage";

interface MainProps extends NavigatorProps {
  balance?: number;
}

const MainPage: React.FC<MainProps> = (props) => {

  const [balance, setBalance] = useState(props.balance || '2000');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

  });

  return (
    <Page key="page1">
      <Toolbar>
        <div className="center">Title</div>
      </Toolbar>
      <div className="Under-toolbar">
        <Select modifier="material" defaultValue={balance} key='balance_select'
          onChange={(e: { target: { value: any } }) => { setBalance(e.target.value) }}>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
        </Select>
        <p style={{ textAlign: "center" }}>
          <Button onClick={() => { ons.notification.alert("alert") }}>
            アラートボタン
          </Button>
          <Button onClick={() => { setLoading(true); }}>
            Modal
          </Button>
          <Button onClick={() => { pushPage(props, DetailPage, "DetailPage") }} className="gcButton">
            ページ遷移
          </Button>
        </p>
      </div>
      <Modal isOpen={isLoading}>
        <Icon
          icon="md-spinner" size={{ default: 48 }} spin />
        <p>Loading...</p>
        <Button onClick={() => { setLoading(false) }}>Close</Button>
      </Modal>
    </Page >
  );
};

export default MainPage;
