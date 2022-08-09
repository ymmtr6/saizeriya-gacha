import React from "react";
import { Page, Button, Toolbar } from "react-onsenui";
import DetailPage from "./DetailPage";
import { NavigationProps } from './Block';
import ons from "onsenui";

interface MainProps extends NavigationProps {
  hoge?: string;
}

const MainPage: React.FC<MainProps> = (props) => {

  const pushDetailPage = () => {
    props.navigator.pushPage({
      component: DetailPage,
      title: "DetailPage",
      props: { ...props }
    });
  };

  return (
    <Page key="page1">
      <Toolbar>
        <div className="center">Title</div>
      </Toolbar>
      <p style={{ textAlign: "center" }}>
        {/* <Button onClick={() => { ons.notification.alert("alert") }}>
          アラートボタン
        </Button> */}
      </p>
      <Button onClick={() => { pushDetailPage() }} className="gcButton">
        ページ遷移
      </Button>
    </Page>
  );
};

export default MainPage;
