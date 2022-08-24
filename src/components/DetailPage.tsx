import React, { useEffect, useState, useMemo } from 'react';
import { Page, Row, Col, Toolbar, BackButton, ToolbarButton, Icon, List, ListItem, ListHeader, SpeedDial, SpeedDialItem, Fab, Toast } from 'react-onsenui';
import { getItems } from '../utils/gacha';
import ons from 'onsenui';
import { SaizeriyaItem } from '../utils/SaizeriyaItem';
import LoadingModal from './LoadingModal';
import { pushPage } from '../utils/pushPage';
import { NONAME } from 'dns';

const DetailPage: React.FC = (props: any) => {

  const [itemList, setItemList] = useState<SaizeriyaItem[]>([]);
  const [openToast, setOpenToast] = useState<boolean>(false);

  const hasItemList = useMemo<boolean>(() => itemList && itemList.length !== 0, [itemList]);
  const searchParams = new URLSearchParams(window.location.search);
  const pageKey = `detail_${props.seed}`;

  // 初回更新
  useEffect(() => {
    updateItems(props.seed);
  }, []);

  // URL変更
  useEffect(() => {
    if (props.seed && props.balance) {
      searchParams.set('seed', props.seed);
      searchParams.set('balance', props.balance);
      history.replaceState('', '', `?${searchParams.toString()}`);
    }
  });

  // ヘッダー表示
  const renderHeader = () => {
    const sum = hasItemList && itemList.map((i) => i.price).reduce((a, x) => a + x);
    return <ListHeader>{sum ? `総額${sum.toLocaleString()}円` : ''}(予算{props.balance.toLocaleString()
    }円)</ListHeader>
  }

  // Item表示
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

  // Item追加
  const updateItems = (seed?: number) => {
    // 通信しているふうに振る舞う
    setTimeout(() => {
      const items = getItems(props.balance, seed,
        { alcoholic: props.alcohol, counterSales: props.counterSales, drinkBar: props.drinkBar });
      setItemList(items);
    }, 1000);
  }

  // オーダーID表示
  const countItemList = () => {
    const obj: { [key: string]: number } = {};
    itemList.map((item) => item.orderId)
      .forEach((id) => {
        obj[id] = ++obj[id] || 1;
      })
    return Object.entries(obj).map((item) =>
      <Row key={`toast_${item[0]}`}>
        <Col width="20%">{item[0]}</Col>
        <Col>{item[1]}</Col>
      </Row>
    )
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

  const getTweetLink = () => {
    const items = itemList.map((item) => item.name).join("\n");
    const sum = itemList.length ? itemList.map((item) => item.price).reduce((a, x) => a + x) : 0;
    const text = encodeURIComponent(`サイゼリヤガチャ\n\n${items}\n\n合計${sum}円(予算${props.balance}円)`);
    const param = encodeURIComponent(searchParams.toString());
    return `https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=${text}&url=https%3A%2F%2Fymmtr6.github.io%2Fsaizeriya-gacha%2F${param}`;
  }

  return (
    <Page key={pageKey}>
      <Toolbar>
        <div className='left'>
          <BackButton>
            Back
          </BackButton>
        </div>
        <div className='center'>ガチャ結果</div>
        <div className='right'>
          <ToolbarButton onClick={() => { setOpenToast(!openToast); }}>
            注文
          </ToolbarButton>
          <ToolbarButton onClick={
            () => {
              const newSeed = Math.floor(Math.random() * 100000);
              setOpenToast(false);
              pushPage({ ...props, balance: props.balance, seed: newSeed }, DetailPage, `detail_${newSeed}`);
            }
          }>
            <Icon
              icon="fa-refresh" />
          </ToolbarButton>
          <div>注文</div>
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
          <a href={getTweetLink()} target='_blank' style={{ textDecoration: 'none', color: "white" }}>
            <Icon icon='md-twitter' />
          </a>
        </SpeedDialItem>
      </SpeedDial>

      {/* itemListがない時はLoadingModalを表示する */}
      {!hasItemList && <LoadingModal open />}

      {/* orderIdと個数を表示する注文toast */}
      {<Toast visible={openToast} className="main">
        <div>
          {countItemList()}
        </div>
        <button onClick={() => setOpenToast(false)}>Close</button>
      </Toast>}
    </Page >
  );
};

export default DetailPage;
