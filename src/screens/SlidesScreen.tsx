import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Animated, Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { useRef } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Title 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Title 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Title 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

const { width: screenWidth } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { }

export const SlidesScreen = ({ navigation }: Props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const { opacity, fadeIn } = useAnimation();
    const disableButton = useRef(true);

    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',
            }}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.desc}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50,
            }}
        >

            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }: { item: Slide } /* or any */) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'
                onSnapToItem={(index) => {
                    setActiveIndex(index);
                    if (index === items.length - 1) {
                        disableButton.current = false;
                        fadeIn();
                    }
                }}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                alignItems: 'center',
            }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: '#5856D6',
                    }}
                />

                <Animated.View
                    style={{
                        opacity: opacity,
                    }}
                >
                    
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#5856D6',
                            width: 140,
                            height: 50,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        activeOpacity={0.8}
                        disabled={disableButton.current}
                        onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <Text style={{
                            fontSize: 25,
                            color: 'white',
                        }}>
                            Enter
                        </Text>
                        <Icon
                            name='chevron-forward-outline'
                            color='white'
                            size={30}
                        />
                    </TouchableOpacity>

                </Animated.View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
    },
    subtitle: {
        fontSize: 16,
    },
});