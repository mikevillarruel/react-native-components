import React, { useState } from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

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
                    <ActivityIndicator style={{ position: 'absolute' }} size={30} color='#5856D6' />
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