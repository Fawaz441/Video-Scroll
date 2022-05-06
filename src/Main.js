import React from 'react'
import {FlatList, View, StyleSheet} from 'react-native'
import SingleVideo from './Video'

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#000'
    }
})

const Main = () => {
    const [videos, setVideos] = React.useState([])

    const renderVideo = ({item}) => (
        <SingleVideo/>
    )

    return(
        <View>
            <FlatList
            data={videos}
            renderItem={renderVideo}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Main