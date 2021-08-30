import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />
            <Button
                title='Open modal'
                onPress={() => { setIsVisible(true) }}
            />

            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={true}
            >
                {/* Background */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* Modal Content */}
                    <View style={{
                        width: 200,
                        height: 200,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 10,

                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Modal
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>
                            Modal Body
                        </Text>
                        <Button
                            title='Close'
                            onPress={() => setIsVisible(false)}
                        />
                    </View>

                </View>
            </Modal>
        </View>
    )
}
