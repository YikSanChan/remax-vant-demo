import * as React from 'react';
import { View } from 'remax/wechat';
import styles from './index.css';
import VantGrid from "@vant/weapp/dist/grid";
import VantGridItem from "@vant/weapp/dist/grid-item";

export default () => {
  return (
    <View className={styles.app}>
      <VantGrid column-num={7} border={false}>
        <VantGridItem key="1" text="Mon" icon="photo-o" dot content-class="grid-item-color" />
        <VantGridItem key="2" text="Tue" icon="photo-o" />
        <VantGridItem key="3" text="Wed" icon="photo-o" />
        <VantGridItem key="4" text="Thu" icon="photo-o" />
        <VantGridItem key="5" text="Fri" icon="photo-o" />
        <VantGridItem key="6" text="Sat" icon="photo-o" />
        <VantGridItem key="7" text="Sun" icon="photo-o" />
      </VantGrid>
    </View>
  );
};
