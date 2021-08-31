import React, { useContext } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    });
    const { theme: { colors, dividerColor } } = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <ScrollView>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.globalMargin}>

                        <HeaderTitle title="TextInputs" />

                        <TextInput
                            placeholderTextColor={dividerColor}
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholder="Enter your name"
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />

                        <TextInput
                            placeholderTextColor={dividerColor}
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholder="Enter your email"
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark' // only IOS
                        />

                        <View style={stylesScreen.switchRow}>
                            <Text style={{
                                ...stylesScreen.switchText,
                                color: colors.text,
                            }}>Is Subscribed?</Text>
                            <CustomSwitch
                                isOn={isSubscribed}
                                onChange={(value) => onChange(value, 'isSubscribed')}
                            />

                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            placeholderTextColor={dividerColor}
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text,
                            }}
                            placeholder="Enter your phone"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />

                        <View style={{ height: 100 }} />

                    </View>

                </TouchableWithoutFeedback>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25,
    },
});