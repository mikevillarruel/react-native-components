import React, { useContext, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const { theme: { colors } } = useContext(ThemeContext);

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
                    progressBackgroundColor={colors.primary}
                    colors={['white', 'red', 'orange']}
                    style={{ backgroundColor: colors.primary }} // only iOS
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
