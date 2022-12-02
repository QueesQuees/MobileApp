import React from 'react';
import {
  GAMBannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.GAM_BANNER : '/xxx/yyyy';

function App() {
  return (
    <GAMBannerAd
      unitId={adUnitId}
      sizes={[BannerAdSize.INLINE_ADAPTIVE_BANNER]}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}
export default App;
