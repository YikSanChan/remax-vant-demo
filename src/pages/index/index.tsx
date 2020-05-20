import * as React from 'react';
import { View } from 'remax/wechat';
import styles from './index.css';
import VantGrid from "@vant/weapp/dist/grid";
import VantGridItem from "@vant/weapp/dist/grid-item";

export default () => {
  return (
    <View className={styles.app}>
      <VantGrid column-num={7} border={false}>
      <VantGridItem key="1" text="Mon" custom-class="color:red" />
      <VantGridItem key="2" text="Tue" custom-class="background-color:red"/>
      <VantGridItem key="3" text="Wed" text-class="color:red" />
      <VantGridItem key="4" text="Thu" />
      <VantGridItem key="5" text="Fri" />
      <VantGridItem key="6" text="Sat" />
      <VantGridItem key="7" text="Sun" />
      </VantGrid>
    </View>
  );
};
