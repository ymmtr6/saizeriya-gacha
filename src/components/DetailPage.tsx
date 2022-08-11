import React, { useEffect, useState, useMemo } from 'react';
import { Page, Button, Toolbar, BackButton, ToolbarButton, Icon, List, ListItem, ListHeader } from 'react-onsenui';
import { getItems } from '../utils/gacha';
import ons from 'onsenui';
import { SaizeriyaItem } from '../utils/SaizeriyaItem';
import LoadingModal from './LoadingModal';
import { pushPage } from '../utils/pushPage';

const DetailPage: React.FC = (props: any) => {

  const [itemList, setItemList] = useState<SaizeriyaItem[]>([]);

  const hasItemList = useMemo<boolean>(() => itemList && itemList.length !== 0, [itemList]);

  const renderHeader = () => {
    const sum = hasItemList && itemList.map((i) => i.price).reduce((a, x) => a + x);
    return <ListHeader>総額{sum ? sum.toLocaleString() : 'xxx'}円(予算{props.balance.toLocaleString()
    }円)</ListHeader>
  }

  const renderRow = (item: SaizeriyaItem, idx: number) => {
    return (
      <ListItem key={`item_${idx}`} modifier={idx === itemList.length - 1 ? 'longdivider' : null}>
        <div className='left'>{`${item.name}`}</div>
        <div className='right'>{`${item.price.toLocaleString()}円`}</div>
      </ListItem>
    )
  }

  const updateItems = () => {
    setItemList([]);
    // 通信しているふうに振る舞う
    setTimeout(() => {
      const items = getItems();
      setItemList(items);
    }, 1000);
  }

  // 初回更新
  useEffect(() => {
    updateItems();
  }, []);

  return (
    <Page key='page2'>
      <Toolbar>
        <div className='left'>
          <BackButton>Back</BackButton>
        </div>
        <div className='center'>ガチャ結果</div>
        <div className='right'>
          <ToolbarButton onClick={
            () => { pushPage({ ...props, balance: props.balance }, DetailPage, "DetailPage") }
          }>
            <Icon
              icon="fa-refresh" />
          </ToolbarButton>
        </div>

      </Toolbar>
      <div className='Under-toolbar'>
        <section >
          <List
            dataSource={itemList}
            renderHeader={renderHeader}
            renderRow={renderRow}
          />
        </section>
      </div>
      {/* itemListがない時はLoadingModalを表示する */}
      {!hasItemList && <LoadingModal open />}
    </Page>
  );
};

export default DetailPage;
