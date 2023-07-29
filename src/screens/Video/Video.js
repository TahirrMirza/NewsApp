import React, {memo, useCallback, useRef, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Youtube from '../../components/Youtube';

const Video = () => {
  const playList = [
    'ylxA71rLjDc',
    'eFfqaEoAelk',
    'ReTdo8OXpUM',
    'UA72-lJ_BnI',
    'FGmWWN2aQqo',
    'QTgkavcoYYY',
    'AeuW55RDjoA',
    'jhG28hqbzMA',
    'NLkV6XDEWaw',
    'H02j1AmMSXQ',
    'BBplbPsHrjw',
  ];
  const flatListRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [layout, setLayout] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const onViewRef = useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      const index = viewableItems.viewableItems[0].index;
      setVisibleIndex(index);
    }
  });
  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <Youtube
          index={index}
          url={item}
          paused={index !== visibleIndex}
          layout={layout}
          playing={index === visibleIndex}
          visible={index === visibleIndex}
        />
      );
    },
    [layout, visibleIndex],
  );

  return (
    <View
      style={styles.container}
      onLayout={e => {
        setLayout(e.nativeEvent.layout);
      }}>
      <FlatList
        ref={flatListRef}
        data={playList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        refreshing={false}
        decelerationRate="fast"
        renderItem={renderItem}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignSelf: 'stretch'},
});

export default memo(Video);
