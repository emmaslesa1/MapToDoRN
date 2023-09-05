import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';

import peopleIcon from './images/iconPeopleBold.png';
import cameraIcon from './images/AnarkeyIconsByAnima.png';
import errorIcon from './images/iconErrorBold.png';
import coinIcon from './images/Group126.png';

import AddUserIcon from 'react-native-vector-icons/AntDesign'



const images = [
    require('./images/Ellipse45.png'), 
    require('./images/Ellipse46.png'),
    require('./images/Ellipse47.png'),
    require('./images/Ellipse48.png'),
    require('./images/Ellipse49.png'),
    require('./images/Ellipse50.png'),
    require('./images/Ellipse51.png'),
    require('./images/Ellipse52.png'),
  ];

const photos = [
    require('./images/Rectangle82.png'), 
    require('./images/Rectangle83.png'),
    require('./images/Rectangle84.png'),
    require('./images/Rectangle85.png'),
    require('./images/Rectangle86.png'),
];

  const numColumns = 5;
  const numColumnsPhoto = 3;

const UiPage = () => {

  const rows = [];
  let rowIndex = 0;

  while (rowIndex < images.length) {
    rows.push(images.slice(rowIndex, rowIndex + numColumns));
    rowIndex += numColumns;
  }

  const rowsPhoto = [];
  let rowIndexPhoto = 0;

  while (rowIndexPhoto < photos.length) {
    rowsPhoto.push(photos.slice(rowIndexPhoto, rowIndexPhoto + numColumnsPhoto));
    rowIndexPhoto += numColumnsPhoto;
  }

  return (
    <View style={styles.container}>
        <View style={styles.div1}>
            <View style={styles.header1}>
                <Image source={errorIcon} style={styles.errorImage} />
                <Text style={styles.iconTextDetails}>Details</Text>
            </View>
            <View style={styles.right}>
                <View style={styles.header2}>
                    <Image source={coinIcon} style={styles.coinIcon} />
                    <Text style={styles.iconText}>20</Text>
                </View>
            </View>
        </View>

        <View style={styles.div2}><View style={styles.line} /></View>

        <View style={styles.div6}>
          <Text style={styles.div6Text}>Summer party museum</Text>
          <View style={styles.box}>
            <View style={styles.boxItem}>
              <Text style={styles.boxItemText}>Party</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={styles.boxItemText}>Drinks</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={styles.boxItemText}>Meet new people</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={styles.boxItemText}>Dance</Text>
            </View>
          </View>
        </View>

        <View style={styles.div7}>
          <Text style={styles.div6Text}>Description</Text>
          <Text style={styles.descItemText}>Channeling traditional village fete vibes, Museum of the Home's Summer Party invites you and the kids onto its lush lawns, for a day of ...</Text>
        </View>
        
        <View style={styles.div3}>
            <View style={styles.iconContainer}>
                <Image source={peopleIcon} style={styles.iconImage} />
                <Text style={styles.iconText}>8</Text>
            </View>
            {rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
                {row.map((image, index) => (
                <Image key={index} source={image} style={styles.circleImage} />
                ))}
            </View>
            ))}
        </View> 

        <View style={styles.div4}>
            <View style={styles.iconContainer}>
                <Image source={cameraIcon} style={styles.iconImage} />
                <Text style={styles.iconText}>5</Text>
            </View>
            {rowsPhoto.map((rowPhoto, rowIndexPhoto) => (
            <View key={rowIndexPhoto} style={styles.rowPhoto}>
                {rowPhoto.map((image, index) => (
                <Image key={index} source={image} style={styles.rectangleImage} />
                ))}
            </View>
            ))}
        </View>
        <View style={styles.div5}>
        <TouchableOpacity style={styles.btn}>
            <AddUserIcon name="adduser" size={20} color="white" style={styles.addUserIcon} />
          <Text style={styles.btnText}>Invite others</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:10,
    },
    div3:{
        margin: 10,
        marginBottom: 10,
    },
    div2:{
        //margin: 15,
        marginBottom: 10,
        marginHorizontal: 15,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    circleImage: {
      width: 65, 
      height: 65,
      borderRadius: 30, 
      marginHorizontal: 5, // between images in a row
    },
    iconContainer: {
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5, // between iconContainer and rows
        backgroundColor: 'lightgrey',
        width: 50,
      },
      iconImage: {
        width: 25,
        height: 25,
        marginRight: 7, // between icon and number
        margin: 3,
      },
      iconText: {
        fontSize: 14,
        fontFamily: 'Pangolin-Regular',
        fontWeight: 'normal',
        color: 'black',
      },
      iconTextDetails: {
        fontSize: 18,
        fontFamily: 'Pangolin-Regular',
        fontWeight: 'normal',
        color: 'black',
      },
      div4: {
        margin: 10,
        marginBottom: 5,
      },
      rowPhoto: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      rectangleImage: {
        width: 117, 
        height: 70, 
        marginHorizontal: 3,
      },
      div5: {
        margin: 10, 
        marginTop: 5,
      },
      btn: {
        marginBottom: 30,
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center', 
        justifyContent: 'center', 
        
      },
      btnText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 7,
      },
      addUserIcon: {
        marginLeft: 5, // Add some margin to separate the text and icon
      },
      div1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        //marginBottom: 10,
        /*
        flexDirection: 'row',
        margin: 10, 
        marginBottom: 5,
        */
      },
      header1: {
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: 60,
      },
      errorImage: {
        width: 30,
        height: 30,
        marginRight: 15, // between icon and number
        
      },
      header2: {
        flexDirection: 'row',
        alignItems: 'center',
        /*
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 60,
        //marginLeft: 260,
        */
      },
      coinIcon: {
        width: 30,
        height: 30,
        marginRight: 8, // between icon and number
        
      },
      right: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      line: {
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        width: '100%',
         // Adjust the margin to control the space between the header and the line
      },
      div6: {
        paddingHorizontal: 15,
        paddingTop: 10,
      },
      div6Text: {
        fontSize: 24,
        fontWeight: '400',
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: 'left',
        fontFamily: 'Pangolin-Regular',
        color: 'black',
      },
      box: {
        flexDirection: 'row',
        marginTop: 10,
        //fontSize: 20,
      },
      boxItem: {
        backgroundColor: 'lightgray',
        borderRadius: 5,
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        //fontSize: 20,
      },
      boxItemText: {
        fontFamily: 'Pangolin-Regular',
        backgroundColor: 'lightgray',
        borderRadius: 5,
        fontSize: 14,
        paddingVertical: 7,
        //paddingHorizontal: 2,
        color: 'black',
      },
      div7: {
        margin: 10,
        marginLeft: 15,
      },
      descItemText: {
        fontFamily: 'Pangolin-Regular',
        fontSize: 14,
        color: 'black',
      }
  });

export default UiPage;
