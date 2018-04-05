import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

const imgBaseUrl = 'http://test.qiansx.com/server/image';

export default class reactdemo02 extends Component {
    constructor(props){
        super(props);
        this.state={
            //当前显示的图片索引
            currentIndex:0,
            //在线图片数据
            imgDate:[
                `${imgBaseUrl}/img.jpg`,
                `${imgBaseUrl}/img1.jpg`,
                `${imgBaseUrl}/img2.jpg`,
                `${imgBaseUrl}/img3.jpg`,
                `${imgBaseUrl}/img4.jpg`,
            ]
        };
        this.carousel = this.carousel.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.onAnnotationEnd = this.onAnnotationEnd.bind(this)
    }
    componentDidMount(){
        this.carousel()
    }

    //点击圆点，关闭定时器，并设置当前图片索引
    dotClick(index){
        clearInterval(this.carouselTimer);
        this.setState({
            currentIndex:index
        },()=>{
            var ScrollView = this.refs.scrollView;
            const currentX = this.state.currentIndex*Dimensions.get('window').width;
            ScrollView.scrollResponderScrollTo({x:currentX,animated:true})
        })
    }

    //开始拖动，关闭定时器
    dragStart(){
        clearInterval(this.carouselTimer);
    }

    //拖动结束，开启定时器
    dragEnd(){
        this.carousel()
    }

    //定时器
    carousel(){
        var ScrollView = this.refs.scrollView;
        const timer = 4000;
        let currentIndex = this.state.currentIndex;

        this.carouselTimer = setInterval(()=>{
            currentIndex===this.state.imgDate.length-1?currentIndex=0:currentIndex++
            this.setState({
                currentIndex:currentIndex
            },()=>{
                const currentX = currentIndex*Dimensions.get('window').width;
                ScrollView.scrollResponderScrollTo({x:currentX,animated:true})
            })
        },timer)

    }

    //当一帧滚动完毕时，重新设置当前图片的索引
    onAnnotationEnd(e){
        const offSetX = e.nativeEvent.contentOffset.x;
        const currentIndex = offSetX/Dimensions.get('window').width;
        this.setState({
            currentIndex:currentIndex
        })
    }
    render() {
        const { imgDate, currentIndex } = this.state;
        console.log(currentIndex)
        const screenWidth = Dimensions.get('window').width;
        const imgDataList = imgDate.map((elem,index)=>{
            console.log(index, elem)
            return(
                <Image key={index} style={{width:screenWidth,height:240}} source={{uri:elem}} />
            )
        });
        const dotList = imgDate.map((elem,index)=>{
            return (
                <Text onPress={this.dotClick.bind(this,index)} key={index} style={[styles.dotStyle,{backgroundColor:currentIndex===index?"red":"#fff"}]}></Text>
            )
        })
        return (
            <View>
                <Text style={styles.myTitleStyle}>ScrollView轮播图</Text>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScrollBeginDrag={this.dragStart}
                    onScrollEndDrag={this.dragEnd}
                    onMomentumScrollEnd={this.onAnnotationEnd}
                    style={{borderWidth:1, borderColor: 'red'}}
                >
                    {imgDataList}
                </ScrollView>
                <View style={styles.dotView}>{dotList}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myTitleStyle:{
        flexDirection:'row',
        fontSize:30,
        color:'#000',
        textAlign:'center',
        paddingTop:12,
        paddingBottom:12,
        marginTop:24,
        // marginBottom:24,
        borderWidth:1,
        borderColor:'green'
    },
    dotStyle:{
        width:24,
        height:24,
        borderRadius:12,
        marginRight:10,
    },
    dotView:{
        flexDirection:'row',
        marginLeft:15,
        position:'absolute',
        bottom:10
    }
});

AppRegistry.registerComponent('reactdemo02', () => reactdemo02);