import React from "react";
import { Page, Button, Toolbar, BackButton } from "react-onsenui";
import ons from 'onsenui';

const DetailPage: React.FC = (props: any) => {

  return (
    <Page key="page2">
      <Toolbar>
        <div className="center">FooDetail</div>
        <div className="left">
          <BackButton>Back</BackButton>
        </div>
      </Toolbar>
      DetailPage
    </Page>
  );
};

export default DetailPage;
