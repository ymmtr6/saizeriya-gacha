import React from "react";
import { Page, Button, Toolbar } from "react-onsenui";
import DetailPage from "./DetailPage";
import ons from "onsenui";

const MainPage: React.FC = (props: any) => {

  const pushDetailPage = () => {
    console.log(navigator);
    props.navigator.pushPage({
      component: DetailPage,
      title: "DetailPage",
      shouldAnimateToolbar: false
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
