import React, { useEffect, useState, useMemo } from 'react';
import { Page, Button, Toolbar, BackButton, ToolbarButton, Icon, List, ListItem, ListHeader, SpeedDial, SpeedDialItem, Fab } from 'react-onsenui';
import { getItems } from '../utils/gacha';
import ons from 'onsenui';
import { SaizeriyaItem } from '../utils/SaizeriyaItem';
import LoadingModal from './LoadingModal';
import { pushPage } from '../utils/pushPage';

const DetailPage: React.FC = (props: any) => {

  const [itemList, setItemList] = useState<SaizeriyaItem[]>([]);

  const hasItemList = useMemo<boolean>(() => itemList && itemList.length !== 0, [itemList]);

  const pageKey = `detail_${props.seed}`;

  const renderHeader = () => {
    const sum = hasItemList && itemList.map((i) => i.price).reduce((a, x) => a + x);
    return <ListHeader>{sum ? `総額${sum.toLocaleString()}円` : ''}(予算{props.balance.toLocaleString()
    }円)</ListHeader>
  }

  const selectIcon = (orderId: string) => {
    const itemType = orderId.slice(0, 2);
    switch (itemType) {
      case 'WN':
      case 'BR':
        return 'md-wine-bar';
      case 'DB':
        return 'md-local-drink';
      case 'PZ':
        return 'md-local-pizza';

    }
    return 'md-local-dining'
  }

  const renderRow = (item: SaizeriyaItem, idx: number) => {
    return (
      <ListItem key={`${pageKey}_item_${idx}`} modifier={idx === itemList.length - 1 ? 'longdivider' : null}>
        {/* <div className="left">
          <Icon key={`item_${idx}_icon`} icon={selectIcon(item.orderId)} />
        </div> */}
        <div className='center'>
          {`${item.name}`}
        </div>
        <div className='right'>
          {`${item.price.toLocaleString()}円`}
        </div>
      </ListItem >
    )
  }

  const updateItems = (seed?: number) => {
    // 通信しているふうに振る舞う
    setTimeout(() => {
      const items = getItems(props.balance, seed,
        { alcoholic: props.alcohol, counterSales: props.counterSales, drinkBar: props.drinkBar });
      setItemList(items);
    }, 1000);
  }

  // 初回更新
  useEffect(() => {
    updateItems(props.seed);
  }, []);


  return (
    <Page key={pageKey}>
      <Toolbar>
        <div className='left'>
          <BackButton>Back</BackButton>
        </div>
        <div className='center'>ガチャ結果</div>
        <div className='right'>
          <ToolbarButton onClick={
            () => {
              const newSeed = Math.floor(Math.random() * 100000);
              pushPage({ ...props, balance: props.balance, seed: newSeed }, DetailPage, `detail_${newSeed}`);
            }
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
      <SpeedDial disabled={false} direction='up' position='right bottom'>
        <Fab><Icon icon="md-share"></Icon></Fab>
        <SpeedDialItem>
          <Icon icon='md-twitter' />
        </SpeedDialItem>
      </SpeedDial>
      {/* itemListがない時はLoadingModalを表示する */}
      {!hasItemList && <LoadingModal open />}
    </Page>
  );
};

export default DetailPage;
