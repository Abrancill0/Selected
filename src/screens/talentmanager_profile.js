import React, {Component} from 'react';
import { Text, View,ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements'
import { Button } from 'react-native-elements'
import ViewMoreText from 'react-native-view-more-text';
import { CalendarList} from 'react-native-calendars';
import styles from '../styles/appstyle';
import stylesTalent from '../styles/TalentStyle.js';


export default class talent_manager extends Component {
  render() {
    const nameModel = "Rodrigo Mora"
    const contacts = 0
    const reviews = 0
    const rating = 0
    const balance = "0.00"
    const location = "London"
    const phone = "+1 (212) 3456789"
    const experience= "Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos ipsum dolor."
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
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
          />
          <View style={styles.NameContacReviewRating}>
            <View style={styles.Rol}>
              <Text style={styles.redTitle} >{nameModel}</Text>
              <Text style={styles.gray}>Talent Manager</Text>
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
              </View>
              <View style={styles.buttonHeader}>
              <Button 
                        rounded 
                        containerStyle 
                        backgroundColor= 'white' 
                        title='Edit Profile'
                        textStyle={{color:'black',fontSize:10}}
                        containerViewStyle={{height:35,width:95}}
                />
            </View>
          </View>
      </View>
      <ScrollView>
      <View style={styles.CaracteristicasManager}>
        <View style={styles.CaracteristicaRow}>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Balance</Text>
            <Text style={styles.red}>${balance}</Text>
          </View>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Phone Number</Text>
            <Text style={styles.red}>{phone}</Text>
          </View>
          <View style={styles.caja_columna}>
            <Text style={styles.white}>Location</Text>
            <Text style={styles.red}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={stylesTalent.ButtonsRow}>
        <Button title='Projects' backgroundColor='black'color='white'/>
        <Button title='My Talents' backgroundColor='black'color='white'/>
      </View>
      <View style={styles.About}>
        <Text style={styles.white}>About</Text>
        <ScrollView>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}>
              <Text style={styles.gray}>
                {experience}
              </Text>
            </ViewMoreText>
        </ScrollView>
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
      <View style={stylesTalent.calendar}>
          <Text style={styles.white}>Calendar</Text>
          <View style={styles.CaracteristicaRow}>

          <CalendarList 
                theme={{
                  textDayHeaderFontSize:11,
                  calendarBackground: 'black',
                  dayTextColor: 'white',
                  monthTextColor: '#E4664A',
                  selectedDayBackgroundColor: '#E4664A',
                  selectedDayTextColor: 'white',
                  textDayFontSize: 10,
                  textMonthFontSize:14
                }}
                // Initially visible month. Default = Date()
                current={'2012-05-01'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MMM yyyy'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {console.log('month changed', month)}}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                markedDates={{
                  '2012-05-16': {selected: true, marked: true, selectedColor: '#E4664A'},
                  '2012-05-17': {marked: true},
                  '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                }}
                calendarWidth={180}
                calendarHeight={320}
                
          />
          <CalendarList 
                theme={{
                textDayHeaderFontSize:11,
                calendarBackground: 'black',
                dayTextColor: 'white',
                monthTextColor: '#E4664A',
                selectedDayBackgroundColor: '#E4664A',
                selectedDayTextColor: 'white',
                textDayFontSize: 10,
                textMonthFontSize:14
              }}
                // Initially visible month. Default = Date()
                current={'2018-10-01'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2018-10-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2018-10-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MMM yyyy'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {console.log('month changed', month)}}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                markedDates={{
                  '2018-10-16': {selected: true, marked: true, selectedColor: '#E4664A'},
                  '2018-10-10': {marked: true},
                  '2018-10-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                }}
                calendarWidth={180}
                calendarHeight={320}/>
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




