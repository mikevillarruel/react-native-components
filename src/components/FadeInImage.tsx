import React, { useContext, useState } from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const { theme: { colors } } = useContext(ThemeContext)

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            {
                isLoading && (
                    <ActivityIndicator style={{ position: 'absolute' }} size={30} color={colors.primary} />
                )
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    // width: '100%',
                    // height: 400,
                    opacity: opacity,
                }}
            />

        </View>
    )
}
