import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,StatusBar,SafeAreaView} from 'react-native';

import {Avatar,Badge,Icon} from 'react-native-elements'
import { Button } from 'react-native-elements'
import ViewMoreText from 'react-native-view-more-text';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';


import styles, { colors } from '../styles/appstyle';
import stylesModel from '../styles/ModelStyle.js';
import { sliderWidth, itemWidth } from '../styles/StyleSliderEntry';
import SliderEntry from '../components/SliderEntry';
import { ENTRIES1} from '../static/entries';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


export default class model_profile extends Component{
  constructor (props) {
    super(props);
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
}

_renderItem ({item, index}) {
  return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
}

_renderItemWithParallax ({item, index}, parallaxProps) {
  return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
  );
}

_renderLightItem ({item, index}) {
  return <SliderEntry data={item} even={false} />;
}

_renderDarkItem ({item, index}) {
  return <SliderEntry data={item} even={true} />;
}

Galery (number, title) {
  const { slider1ActiveSlide } = this.state;

  return (
      <View >
          <Carousel
            ref={c => this._slider1Ref = c}
            data={ENTRIES1}
            renderItem={this._renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={true}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            // inactiveSlideShift={20}
            containerCustomStyle={stylesModel.slider}
            contentContainerCustomStyle={stylesModel.sliderContentContainer}
            loop={true}
            loopClonesPerSide={2}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
          />
          <Pagination
            dotsLength={ENTRIES1.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={stylesModel.paginationContainer}
            dotColor={'rgba(255, 255, 255, 0.92)'}
            dotStyle={stylesModel.paginationDot}
            inactiveDotColor={colors.black}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
          />
      </View>
  );
}

get gradient () {
  return (
      <LinearGradient
        colors={['black','black']}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={stylesModel.gradient}
      />
  );
}

  
  render() {

    const Galery = this.Galery(1, 'Default layout | Loop | Parallax | Scale | Opacity | Pagination with tappable dots');

    const nameModel = "Rachel"
    const contacts = 0
    const reviews = 0
    const rating = 0
    const balance = "0.00"
    const hair = "Light Brown"
    const skin = "white"
    const eyes = "blue"
    const weight = 83
    const sex = "Male"
    const age = 37
    const height = 1.91
    const location = "London"
    const experience= "Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos ipsum dolor.Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos ipsum do"
    const instagram="@rodri"
    const facebook='/rodri'
    const youtube='/rodri'
    const twitter='@rodri'

    return (
      <View style={styles.container}>
        <View style={styles.Header}>
            <Avatar
                large
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <View style={styles.NameContacReviewRating}>
              <View style={styles.Rol}>
                <Text style={styles.redTitle} >{nameModel}</Text>
                <Text style={styles.gray}>Model</Text>
              </View>
              <View style={styles.rating}>
                <View style={styles.caja_columna}>
                  <Text style={styles.littleWhite}>{contacts}</Text>
                  <Text style={styles.littleWhite}>Contacts</Text>
                </View>
                <View style={styles.caja_columna}>
                  <Text style={styles.littleWhite}>{reviews}</Text>
                  <Text style={styles.littleWhite}>Reviews</Text>
                </View>
                <View style={styles.caja_columna}>
                  <Text style={styles.littleWhite}>{rating}</Text>
                  <Text style={styles.littleWhite}>Rating</Text>
                </View>
                <Button 
                        rounded 
                        backgroundColor= 'white' 
                        title='Edit Profile'
                        textStyle={{color:'black',fontSize:8}}
                        buttonStyle={{height:32, width:78}}
                />
                </View>
              
            </View>
        </View>
        <ScrollView>
        <View style={styles.Caracteristicas}>
          <View style={styles.CaracteristicaRowButtons}>
            <Button title="Wish List" fontSize={16} color='#E4664A'backgroundColor='black' />
            <Button title="My Projects" fontSize={16} color='#E4664A'backgroundColor='black'/>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Balance</Text>
              <Text style={styles.red}>${balance}</Text>
            </View>
          </View>
          <View style={styles.CaracteristicaRow}>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Hair</Text>
              <Text style={styles.red}>{hair}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Skin</Text>
              <Text style={styles.red}>{skin}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Eyes</Text>
              <Text style={styles.red}>{eyes}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Weight</Text>
              <Text style={styles.red}>{weight}Kg</Text>
            </View>
          </View>
          <View style={styles.CaracteristicaRow} >
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Sex</Text>
              <Text style={styles.red}>{sex}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Age</Text>
              <Text style={styles.red}>{age}</Text>
            </View>
            <View style={styles.caja_columna}>
              <Text style={styles.white}>Height</Text>
              <Text style={styles.red}>{height} mts</Text>
            </View>
            <View style={styles.caja_columna}>
                  <Text style={styles.littleWhite}>Location</Text>
                  <Text style={styles.red} >{location}</Text>
            </View>
          </View>
        </View>
        <Button title='More Information' backgroundColor='black'color='white' style={styles.BorderTopBottom}/>
        
        <View style={styles.Experience}>
          <Text style={styles.white}>Experience</Text>
              <ViewMoreText
                numberOfLines={3}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}>
                <Text style={styles.gray}>
                  {experience}
                </Text>
              </ViewMoreText>
        </View>
        <View style={styles.carrusel1}>
        <Text style={styles.white}>Portfolio</Text>
            <SafeAreaView style={stylesModel.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    { this.gradient }
                    <View>
                        { Galery }
                    </View>
                </View>
            </SafeAreaView>
      </View>
      <View style={styles.CaracteristicasManager}>
        <View style={styles.CaracteristicaRow}>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Instagram</Text>
            <Text style={styles.red}>${instagram}</Text>
          </View>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Facebook</Text>
            <Text style={styles.red}>{facebook}</Text>
          </View>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Youtube</Text>
            <Text style={styles.red}>{youtube}</Text>
          </View>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Twitter</Text>
            <Text style={styles.red}>{twitter}</Text>
          </View>
        </View>
      </View>
      <Button
        raised
        icon={{name:'add-circle'}}
        title='Publish Content' 
        backgroundColor='black'
        color='white'/>
      </ScrollView>
      </View>
    );
  }
  renderViewLess(onPress){
    return(
      <Text style={styles.red} onPress={onPress}>View less</Text>
    )
  }
  renderViewMore(onPress){
    return(
      <Text style={styles.red} onPress={onPress}>... More</Text>
    )
  }
}
