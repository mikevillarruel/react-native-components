import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('finished');
            setRefreshing(false);
            setData('Hola Mundo');
        }, 3000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor='#5856D6'
                    colors={['white', 'red', 'orange']}
                    style={{ backgroundColor: '#5856D6' }} // only iOS
                    tintColor='white' // only iOS
                />
            }
        >

            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull To Refresh' />
                {
                    data && <HeaderTitle title={data} />
                }
            </View>

        </ScrollView>
    )
}
